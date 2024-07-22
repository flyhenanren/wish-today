<script setup lang="ts">
import {ref,onMounted,onUnmounted,nextTick} from 'vue'
import {CalleeList} from '../stackTrace'
import * as echarts from 'echarts';
import useHeapGraph  from './hooks/useHeapGraph';



const split= ref(0.4)
const splitMin = ref('300px')

const heapChart = ref(null)
let heapGraph:any = null

const GCChart = ref(null)
let GCGraph:any = null

const noHeapChart = ref(null)
let noHeapGraph:any = null

const garbageChart = ref(null)
let garbageGraph:any = null


onMounted(()=>{
  nextTick(()=>{
    heapGraph = echarts.init(heapChart.value)
    const {heapOption} = useHeapGraph()
    heapGraph.setOption(heapOption)

    GCGraph = echarts.init(GCChart.value)
    GCGraph.setOption(heapOption)

    noHeapGraph = echarts.init(noHeapChart.value)
    noHeapGraph.setOption(heapOption)

    garbageGraph = echarts.init(garbageChart.value)
    garbageGraph.setOption(heapOption)
  })
})
</script>

<template>
  <div class="memoryContainer" style="height: 800px;">
    <Split v-model="split" mode="vertical" :min="splitMin">
            <template #top>
                <div :class="$style.graph">
                  <div ref="heapChart" style="width: 500px; height: 250px;"></div>
                  <div ref="GCChart" style="width: 500px; height: 250px;"></div>
                  <div ref="noHeapChart" style="width: 500px; height: 250px;"></div>
                  <div ref="garbageChart" style="width: 500px; height: 250px;"></div>
                </div>
            </template>
            <template #bottom>
                <div style="height: 400px;">
                  <CalleeList/>
                </div>
            </template>
        </Split>
  </div>
</template>

<style scoped module>
.container{
  height: 800px;
}
.graph{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
