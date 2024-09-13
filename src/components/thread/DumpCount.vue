<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import * as echarts from 'echarts';
import { ThreadStatus } from '../../types';

const fileCount = ref(0)
const startTime = ref('2024-04-04 04:04:04')
const endTime = ref('2024-04-04 04:04:04')
const dumpPercentChart = ref(null)
let dumpPercentGraph: any = null
const dumpLiveChart = ref(null)
let dumpLiveGraph: any = null
onMounted(() => {
  nextTick(() => {

    dumpPercentGraph = echarts.init(dumpPercentChart.value)
    const percentOption = {
      title: {
        text: '状态总览'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: [ThreadStatus.RUNNABLE, ThreadStatus.TIMED_WAITING, ThreadStatus.WAITING, ThreadStatus.BLOCKED]
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: ThreadStatus.TIMED_WAITING,
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: ThreadStatus.RUNNABLE,
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: ThreadStatus.WAITING,
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: ThreadStatus.BLOCKED,
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320]
        }
      ]
    };
    dumpPercentGraph.setOption(percentOption);

    dumpLiveGraph = echarts.init(dumpLiveChart.value)
    const liveOption = {
      title: {
        text: '线程统计'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: ['JOB_BI_JOB_THREAD_176', 'clientOutboundChannel-595', 'clientOutboundChannel-590', 'MessageBroker-30', 'IMMEDIATELY_ASYNCTASKPOOL-1-thread-3', 'pool-6-thread-36', 'Sun']
      },
      series: [
        {
          name: ThreadStatus.TIMED_WAITING,
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
          name: ThreadStatus.RUNNABLE,
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: ThreadStatus.WAITING,
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: ThreadStatus.BLOCKED,
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [150, 212, 201, 154, 190, 330, 410]
        }
      ]
    };
    dumpLiveGraph.setOption(liveOption);

  })
})
</script>

<template>
  <div class="dump-count-container">
    <div class="title container">
      <span>文件总数: {{ fileCount }}</span>
      <br />
      <span>开始时间：{{ startTime }},结束时间:{{ endTime }} </span>
    </div>
    <div class="dump-percent-container container">
      <div ref="dumpPercentChart" style="width: 100%; height: 250px;" />
    </div>
    <div class="dump-live-container">
      <div ref="dumpLiveChart" style="width: 100%; height: 400px;" />
    </div>
  </div>
</template>

<style scoped>

.dump-list {
  /* padding: 10px; */
}

.dump-live-container{
  padding: 15px 10px;
}


.title {
  color: #1A1A1A;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 37px;

}

.container {
  border-bottom: 1px solid #E8E8E8;
  padding: 15px 10px;
}
</style>
