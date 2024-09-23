<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts';
import { ThreadStatus } from '../../types';
import { DumpInfo, StatusCount, StatusQuery, useDump } from '../../api/api';
const dumpApi = useDump()
interface IProps {
  selected: DumpInfo[]
}

const props = defineProps<IProps>()

const fileCount = ref(0)
const startTime = ref<string>("1970-01-01 00:00:00")
const endTime = ref<string>("9999-01-01 00:00:00")

watch(() => props.selected,
  (value) => {
    initCountInfo(value)
    initDumpStatus(value)
    initThreadStatus(value)
  },
  { deep: true })

function initCountInfo(rows: DumpInfo[]) {
  fileCount.value = rows.length
  startTime.value = rows[0].time
  endTime.value = rows[rows.length - 1].time
}
function initDumpStatus(rows: DumpInfo[]) {
  const queryParam: StatusQuery = {
    files: rows.map(e => e.file_name)
  }
  dumpApi.countDumpStatus(queryParam).then((resp: StatusCount[]) => {
    resp.forEach(e => {
      percentColumns.value.push(e.name)
      percentData.value[0].data.push(e.time_watting)
      percentData.value[1].data.push(e.runnable)
      percentData.value[2].data.push(e.waitting)
      percentData.value[3].data.push(e.block)
    })
    drawPercentGraph()
  })
}

function initThreadStatus(rows: DumpInfo[]) {
  const queryParam: StatusQuery = {
    files: rows.map(e => e.file_name),
    total: 10
  }
  dumpApi.countThreadStatus(queryParam).then((resp: StatusCount[]) => {
    resp.forEach(e => {
      liveColumns.value.push(e.name)
      liveData.value[0].data.push(e.time_watting)
      liveData.value[1].data.push(e.runnable)
      liveData.value[2].data.push(e.waitting)
      liveData.value[3].data.push(e.block)
    })
    drawLiveGraph()
  })
}


const percentData = ref<{
  name: ThreadStatus,
  type: string,
  symbol: string,
  smooth: boolean,
  data: number[]
}[]>(
  [{
    name: ThreadStatus.TIMED_WAITING,
    type: 'line',
    symbol: "none",
    smooth: true,
    data: []
  },
  {
    name: ThreadStatus.RUNNABLE,
    type: 'line',
    symbol: "none",
    smooth: true,
    data: []
  },
  {
    name: ThreadStatus.WAITING,
    type: 'line',
    symbol: "none",
    smooth: true,
    data: []
  },
  {
    name: ThreadStatus.BLOCKED,
    type: 'line',
    symbol: "none",
    smooth: true,
    data: []
  }])

const percentColumns = ref<string[]>([])
const dumpPercentChart = ref(null)
let dumpPercentGraph: any = null

function drawPercentGraph() {
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
      data: percentColumns.value
    },
    yAxis: {
      type: 'value'
    },
    series: percentData.value
  };
  dumpPercentGraph.setOption(percentOption);
}

const liveData = ref<{
  name: ThreadStatus,
  type: string,
  stack: string,
  label: {
    show: boolean
  },
  emphasis: {
    focus: string
  },
  data: number[]
}[]>([
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
    data: []
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
    data: []
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
    data: []
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
    data: []
  }
])
const liveColumns = ref<String[]>([])
const dumpLiveChart = ref(null)
let dumpLiveGraph: any = null
function drawLiveGraph() {
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
      data: liveColumns.value
    },
    series: liveData.value
  };
  dumpLiveGraph.setOption(liveOption);
}

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

.dump-live-container {
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
