import fs from 'node:fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron/simple'

import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  fs.rmSync('dist-electron', { recursive: true, force: true })

  const isServe = command === 'serve'
  const isBuild = command === 'build'
  const sourcemap = isServe || !!process.env.VSCODE_DEBUG

  return {
    plugins: [
      vue(),
      electron({
        main: {
          // Shortcut of `build.lib.entry`
          entry: 'electron/main/index.ts',
          onstart({ startup }) {
            if (process.env.VSCODE_DEBUG) {
              console.log(/* For `.vscode/.debug.script.mjs` */'[startup] Electron App')
            } else {
              startup()
            }
          },
          vite: {
            build: {
              sourcemap,
              minify: isBuild,
              outDir: 'dist-electron/main',
              rollupOptions: {
                // Some third-party Node.js libraries may not be built correctly by Vite, especially `C/C++` addons, 
                // we can use `external` to exclude them to ensure they work correctly.
                // Others need to put them in `dependencies` to ensure they are collected into `app.asar` after the app is built.
                // Of course, this is not absolute, just this way is relatively simple. :)
                external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
              },
            },
          },
        },
        preload: {
          // Shortcut of `build.rollupOptions.input`.
          // Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
          input: 'electron/preload/index.ts',
          vite: {
            build: {
              sourcemap: sourcemap ? 'inline' : undefined, // #332
              minify: isBuild,
              outDir: 'dist-electron/preload',
              rollupOptions: {
                external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
              },
            },
          },
        },
        // Ployfill the Electron and Node.js API for Renderer process.
        // If you want use Node.js in Renderer process, the `nodeIntegration` needs to be enabled in the Main process.
        // See 👉 https://github.com/electron-vite/vite-plugin-electron-renderer
        renderer: {},
      })
    ],
    server: {
      host:'0.0.0.0',
      port:5174,
      proxy:{
        "/api":{
          target:"http://localhost:3000",
          secure:false,
          changeOrigin:true,  // 允许跨域
          rewrite:path => path.replace(/^\/api/,'')
        }
      }
    },
    css: {
      // 对css的行为进行配置
      // modules配置最终会丢给postcss modules
      modules: {
          // 是对css模块化的默认行为进行覆盖
          localsConvention: 'camelCase', // 修改生成的配置对象的key的展示形式(驼峰还是中划线形式)
          scopeBehaviour: 'local', // 配置当前的模块化行为是模块化还是全局化 (有hash就是开启了模块化的一个标志, 因为他可以保证产生不同的hash值来控制我们的样式类名不被覆盖)
          generateScopedName: '[name]_[local]_[hash:5]',
          // generateScopedName: (name, filename, css) => {
          //     // name -> 代表的是你此刻css文件中的类名
          //     // filename -> 是你当前css文件的绝对路径
          //     // css -> 给的就是你当前样式
          //     console.log('name', name, 'filename', filename, 'css', css) // 这一行会输出在哪？？？ 输出在node
          //     // 配置成函数以后, 返回值就决定了他最终显示的类型
          //     return `${name}_${Math.random().toString(36).substr(3, 8)}`
          // },
      }
     },
    clearScreen: false,

  }
})
