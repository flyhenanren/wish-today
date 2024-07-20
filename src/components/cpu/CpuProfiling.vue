<script setup lang="ts">
import {ref,onMounted,onUnmounted,nextTick} from 'vue'
import * as echarts from 'echarts';

const split= ref(0.4)
const splitMin = ref('100px')
const splitMax = ref('300px')

const chartDom = ref(null);
let chartInstance:any = null;
// 初始化ECharts实例并设置配置项（这里以折线图为例，但可灵活替换）
onMounted(() => {
  nextTick(()=>{
    chartInstance = echarts.init(chartDom.value);
    const option = {
      // 这里是ECharts的配置项，可以根据需要绘制不同类型的图表
      title: {
        text: 'ECharts '
      },
      tooltip: {},
      xAxis: {
        data: ["类别1", "类别2", "类别3", "类别4", "类别5"]
      },
      yAxis: {},
      series: [{
        name: '数据系列',
        type: 'line', // 这里可以是'line'、'bar'、'pie'等，根据图表类型选择
        data: [120, 200, 150, 80, 70]
      }]
    };
    chartInstance.setOption(option);
  })
});

// 销毁ECharts实例
onUnmounted(() => {
  if (chartInstance != null && chartInstance.dispose) {
    chartInstance.dispose();
  }
});

</script>

<template>
  <div :class="$style.container">
    <Split v-model="split" mode="vertical" :min="splitMin" :max="splitMax">
            <template #top>
                <div>
                  <div ref="chartDom" style="width: 300px; height: 400px;"></div>
                </div>
            </template>
            <template #bottom>
                <div class="demo-split-pane">
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
