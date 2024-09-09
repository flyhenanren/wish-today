import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import router from './router'
import App from './App.vue'
import 'view-ui-plus/dist/styles/viewuiplus.css'

import {
  NDataTable,
  create
} from 'naive-ui'

import './style.css'
import './ipc/ipcListener'
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'


const naive = create({
  components: [NDataTable]
})

createApp(App)
  .use(router)
  .use(ViewUIPlus)
  .use(naive)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
