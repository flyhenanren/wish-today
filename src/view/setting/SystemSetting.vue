<script setup lang="ts">
import { onMounted, ref, shallowRef } from 'vue'
import FileView from './File.vue'
import PreferenceView from './Preference.vue'
import StyleView from './Style.vue'
import ThreadView from './Thread.vue'
import useIpc from '../../ipc/useIpc'
import { Setting, StyleConfig } from '../../../electron/config'

const {loadConfig, saveConfig} = useIpc()

interface IConfig {
  setting: Setting,
  style: StyleConfig
}
const setting = ref<IConfig>()
onMounted(()=>{
  loadConfig().then(resp =>{
    setting.value = resp
    selectMenu.value = 'preference'
    onSelectMenu('preference')
  })
})

const selectMenu = ref()
const currentComponent = shallowRef()
const config = ref()

const menuOptions = ref([
  {
    label: '偏好',
    key: 'preference'
  },
  {
    label: '主题',
    key: 'style'
  },
  {
    label: '文件',
    key: 'file'
  },
  {
    label: '线程',
    key: 'thread'
  }
])

function onSelectMenu(item: string) {
  switch (item) {
    case 'preference':
    currentComponent.value = PreferenceView
    config.value = setting.value?.setting.preference
      break;
    case 'style':
    currentComponent.value = StyleView
    config.value = setting.value?.style
      break;
    case 'file':
    currentComponent.value = FileView
    config.value = setting.value?.setting.fileConfig
      break;
    case 'thread':
    currentComponent.value = ThreadView
    config.value = setting.value?.setting.threadConfig
      break;
  }
}
</script>

<template>
  <div class="setting-container">
    <n-layout has-sider style="widows: 100%;height: 100%;">
      <n-layout-sider bordered collapse-mode="width" :width="100" :collapsed="false">
        <n-menu :value="selectMenu" :collapsed="false" :options="menuOptions" :on-update:value="onSelectMenu" />
      </n-layout-sider>
      <n-layout>
        <div class="setting-content">
          <component :is="currentComponent" v-model="config" />
        </div>
        <n-layout-footer bordered position="absolute" style="padding: 10px 20px;">
          <div style="display: flex;flex-direction: row-reverse;">
            <n-button size="tiny" type="primary">应用</n-button>
            <n-button size="tiny" style="margin-right: 10px;">取消</n-button>
          </div>
        </n-layout-footer>
      </n-layout>

    </n-layout>
  </div>

</template>

<style scoped>
.setting-container {
  width: 100%;
  height: 100%;
}
.setting-content{
  padding: 10px 10px;
}
</style>
