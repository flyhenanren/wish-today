<script setup lang="ts">
import { useRouter } from 'vue-router'

import useSheet from '../hook/useSheet';
import { onMounted, ref } from 'vue';

const {sheets} = useSheet()

const router = useRouter()

const currentSheet = sheets[0].key

router.push({name: sheets[0].route})


function handleTabRemove(name) {
  
}

function handleClickTab(name: string) {
  const find = sheets.find(e => e.key === name)
  if(find) {
    router.push({name: find.route})
  }
}
const rootRef = ref()
onMounted(()=> {
  console.log(rootRef.value.height, rootRef.value.height) 
})
</script>

<template>
  <div :class="$style.rootContainer" ref="rootRef">
    <Tabs type="card"  closable  draggable
    v-model="currentSheet"
    @on-tab-remove="handleTabRemove"
    @on-click="handleClickTab">
        <TabPane v-for ="item in sheets" :name="item.key" :label="item.name" :v-if="item.show">
        </TabPane>
    </Tabs>
    <RouterView/>
  </div>
</template>

<style scoped module>
.rootContainer{
  width: 100%;
  height: 100%;
}
</style>
