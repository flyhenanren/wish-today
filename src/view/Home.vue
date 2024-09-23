<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import useSheet from '../hook/useSheet';
import { Sheet } from '../types';

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

</script>

<template>
  <div :class="$style.rootContainer">
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
