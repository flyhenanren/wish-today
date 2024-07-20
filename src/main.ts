import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import router from './router'
import App from './App.vue'
import 'view-ui-plus/dist/styles/viewuiplus.css'


import './ipc/ipc'
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

createApp(App)
  .use(router)
  .use(ViewUIPlus)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
