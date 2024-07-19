import { createApp } from 'vue'
import naive from 'naive-ui'
import router from './router'
import App from './App.vue'


import './ipc/ipc'
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

createApp(App)
  .use(router)
  .use(naive)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
