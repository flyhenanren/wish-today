<script setup lang="ts">
import {ref,onMounted,onUnmounted,nextTick} from 'vue'
import {MergedCallee} from '../stackTrace'
import * as echarts from 'echarts';
import useData from './hooks/useData';

const split= ref(0.4)
const splitMin = ref('300px')
const splitMax = ref('300px')

const cpuChart = ref(null);
let cpuGraph:any = null;

onMounted(() => {
  nextTick(()=> {
    cpuGraph = echarts.init(cpuChart.value)
    const {cpuData, threadData, xAxis} = useData()
    const cpuOption = {
      title: {
        text: 'CPU Usage'
      },
      dataZoom:{
        type:'slider'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xAxis
      },
      yAxis: {
        type: 'value'
      },
      series: cpuData
    }
    cpuGraph.setOption(cpuOption);
  })
})

// 销毁ECharts实例
onUnmounted(() => {
  if (cpuGraph != null && cpuGraph.dispose) {
    cpuGraph.dispose();
  }
})

</script>

<template>
  <div :class="$style.container">
    <Split v-model="split" mode="vertical" :min="splitMin" :max="splitMax">
            <template #top>
                <div style="display: flex;justify-content: space-between;">
                  <div ref="cpuChart" style="width: 800px; height: 250px;"></div>
                </div>
            </template>
            <template #bottom>
                <div >
                  <MergedCallee/>
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
