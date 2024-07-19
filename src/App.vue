<script setup lang="ts">
import type { Component } from 'vue'
import { h, ref } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { useRouter, useRoute } from 'vue-router'

import {
  BookOutline as BookIcon,
  Settings as SettingIcon,
  Fish as FishIcon,
  BarChart as ChartIcon,
  Menu as MenuIcon
} from '@vicons/ionicons5'



function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: '线程',
    key: 'thread',
    route:'thread',
    icon: renderIcon(FishIcon)
  },
  {
    label: '内存',
    key: 'memory',
    route:'memory',
    icon: renderIcon(ChartIcon) 
  },
  {
    label: '设置',
    key: 'setting',
    icon: renderIcon(MenuIcon),
    children: [
      {
        label: '其他',
        key: 'other',
        route: 'about',
        icon: renderIcon(SettingIcon)
      }
    ]
  }
]

const router = useRouter()

function selectedMenu(key: string, item: MenuOption){
  router.push({
    name: item.route as string
  })
}

function toHome() {
  router.push({name: 'home'})
}

</script>

<template>
  <n-space vertical>
    <n-layout >
      <n-layout-header bordered>
        <n-button type="primary" @click="toHome">
          首页
        </n-button>
      </n-layout-header>
      <n-layout has-sider>
        <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        show-trigger
      >
        <n-menu
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
           @update:value="selectedMenu"
        />
      </n-layout-sider>
      <n-layout>
        <RouterView />
      </n-layout>
      </n-layout>
    
    </n-layout>
  </n-space>
</template>

<style scoped module>

</style>
