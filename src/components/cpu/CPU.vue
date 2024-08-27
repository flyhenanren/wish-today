<script setup lang="ts">
import {ref, computed, onMounted, nextTick} from 'vue'
import useCpuTab from './hooks/useCpuTab';
import { useRouter, useRoute } from 'vue-router'
import {useCheck} from '../../api/api'
const {tabs} = useCpuTab() 

const router = useRouter()

const currentMenu = ref(tabs[0].key)
router.push(tabs[0].route)

function selectMenu(name:string) {
  const find = tabs.find(e => e.key === name)
  if(find) {
    router.push({name: find.route})
  }
}


const isCollapsed = ref(false)

const menuitemClasses = computed(()=>{  
  return [
            'menu-item',
            isCollapsed.value ? 'collapsed-menu' : ''
        ] 
}) 

function testClick(){
    useCheck().then(resp => {
        console.log(resp)
    })
}

</script>

<template>
   <div class="cpu-layout" ref="layout">
        <Button @click="testClick">click</Button>
        <Layout>
            <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed" >
                <Menu  theme="dark" width="auto" :class="menuitemClasses"
                  :active-name="currentMenu"
                  @on-select="selectMenu">
                    <MenuItem v-for="item in tabs" :name="item.key">
                        <Icon :type="item.icon" />
                        <span>{{ item.name }}</span>
                    </MenuItem>
                </Menu>
                <template #trigger></template>
            </Sider>
            <Layout>
                <Content class="content" :style="{margin: '20px', background: '#fff', minHeight: '220px', height:'820px' }">
                  <RouterView />
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<style scoped>
.cpu-layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: auto;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 120px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    .dev-run-preview .dev-run-preview-edit{ display: none }
</style>
