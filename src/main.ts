import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import router from './router'
import App from './App.vue'
import 'view-ui-plus/dist/styles/viewuiplus.css'

import {
  NDataTable,
  NSplit,
  NDivider,
  NSpace,
  NDropdown,
  NMessageProvider,
  NPageHeader,
  NModal,
  NCard,
  NProgress,
  NLayout,
  NLayoutSider,
  NLayoutFooter,
  NButton,
  NSelect,
  NForm,
  NFormItem,
  NRadio,
  NRadioGroup,
  NMenu,
  create
} from 'naive-ui'

import './style.css'

// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'


const naive = create({
  components: [NDataTable,NRadio,NRadioGroup, NButton,NForm,NFormItem, NSplit,NDropdown,NSelect, NMessageProvider,NPageHeader,NDivider,NSpace,NModal,NCard,NProgress,NMenu,NLayout,NLayoutSider,NLayoutFooter]
})

createApp(App)
  .use(router)
  .use(ViewUIPlus)
  .use(naive)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
