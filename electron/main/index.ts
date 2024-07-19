import { app, BrowserWindow, shell, ipcMain,Menu,dialog } from 'electron'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import os from 'node:os'



import {rsNativeSum, rsNativeSubtraction} from '../../native'

const require = createRequire(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// The built directory structure
//
// ├─┬ dist-electron
// │ ├─┬ main
// │ │ └── index.js    > Electron-Main
// │ └─┬ preload
// │   └── index.mjs   > Preload-Scripts
// ├─┬ dist
// │ └── index.html    > Electron-Renderer
//
process.env.APP_ROOT = path.join(__dirname, '../..')

export const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron')
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist')
export const VITE_DEV_SERVER_URL = process.env.VITE_DEV_SERVER_URL

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, 'public')
  : RENDERER_DIST

// Disable GPU Acceleration for Windows 7
if (os.release().startsWith('6.1')) app.disableHardwareAcceleration()

// Set application name for Windows 10+ notifications
if (process.platform === 'win32') app.setAppUserModelId(app.getName())

if (!app.requestSingleInstanceLock()) {
  app.quit()
  process.exit(0)
}

const desktop = app.getPath('desktop')
const name = app.getName()
console.log(name)


let win: BrowserWindow | null = null
const preload = path.join(__dirname, '../preload/index.mjs')
const indexHtml = path.join(RENDERER_DIST, 'index.html')

async function createWindow() {
  win = new BrowserWindow({
    title: 'Main window',
    icon: path.join(process.env.VITE_PUBLIC, 'favicon.ico'),
    webPreferences: {
      preload,
      // Warning: Enable nodeIntegration and disable contextIsolation is not secure in production
      // nodeIntegration: true,

      // Consider using contextBridge.exposeInMainWorld
      // Read more on https://www.electronjs.org/docs/latest/tutorial/context-isolation
      // contextIsolation: false,
    },
  })
  setMenu()

  if (VITE_DEV_SERVER_URL) { // #298
    win.loadURL(VITE_DEV_SERVER_URL)
    // Open devTool if the app is not packaged
    // win.webContents.openDevTools()
  } else {
    win.loadFile(indexHtml)
  }

  // Test actively push message to the Electron-Renderer
  win.webContents.on('did-finish-load', () => {

    const sum = rsNativeSum(1,2)
    const sub = rsNativeSubtraction(3,1)
    
    win?.webContents.send('main-process-message', new Date().toLocaleString())
    win?.webContents.send('main-process-message-sum', sum)
    win?.webContents.send('main-process-message-sub', sub)
  })

  // Make all links open with the browser, not with the application
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:')) shell.openExternal(url)
    return { action: 'deny' }
  })
  // win.webContents.on('will-navigate', (event, url) => { }) #344
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  win = null
  if (process.platform !== 'darwin') app.quit()
})

app.on('second-instance', () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized()) win.restore()
    win.focus()
  }
})

app.on('activate', () => {
  const allWindows = BrowserWindow.getAllWindows()
  if (allWindows.length) {
    allWindows[0].focus()
  } else {
    createWindow()
  }
})

// New window example arg: new windows url
ipcMain.handle('open-win', (_, arg) => {
  const childWindow = new BrowserWindow({
    webPreferences: {
      preload,
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  if (VITE_DEV_SERVER_URL) {
    childWindow.loadURL(`${VITE_DEV_SERVER_URL}#${arg}`)
  } else {
    childWindow.loadFile(indexHtml, { hash: arg })
  }
})



function setMenu(){
  let newWindow: BrowserWindow | null = null
  //创建菜单集合
  let template = [
      {
          label: '文件(F)',
          submenu: [
              {
                  label: '打开文件',
                  accelerator: 'ctrl+o', //绑定快捷键
                  click: () => {
                    dialog.showOpenDialog({
                      title: "选择压缩包",
                  }).then(result => {
                      if(!result.canceled) {
                        console.log(result.filePaths)
                      }
                    }).catch(err => {
                      console.log(err)
                    })
                  }
              },
              {
                label: '打开文件夹',
                accelerator: 'ctrl+k', //绑定快捷键
                click: () => {
                    
                }
              },
              {
                label: '新建窗口',
                accelerator: 'ctrl+shift+n',
                click: () => { //绑定事件
                    newWindow = new BrowserWindow({
                        width: 500,
                        height: 300,
                        //主题渲染内容
                        webPreferences: {
                            nodeIntegration: true, //集成node环境
                        }
                    })
                    newWindow.loadFile('index.html')
                    newWindow.on('closed', () => {
                        newWindow = null
                    })
                }
            }
          ]
      },
      {
          label: '帮助(H)',
          submenu: [
              {
                  label: '更多',
                  click: () => {
                     
                  }
              }
          ]
      }
  ]
  //载入模板
  const menu = Menu.buildFromTemplate(template)
     //主进程设置应用菜单
  Menu.setApplicationMenu(menu)
}

