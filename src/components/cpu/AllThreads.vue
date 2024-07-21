<script setup lang="ts">
import {ref,onMounted,onUnmounted,nextTick} from 'vue'
import {MergedCallee, CalleeList} from '../stackTrace'

const split= ref(0.4)
const splitMin = ref('100px')

</script>

<template>
  <div :class="$style.container">
    <Split v-model="split" mode="vertical" :min="splitMin" >
            <template #top>
                <div >
                    <MergedCallee/>
                </div>
            </template>
            <template #bottom>
                <div >
                  <CalleeList/>
                </div>
            </template>
        </Split>
  </div>
</template>

<style scoped module>
.container{
  height: 100%;
}
</style>
