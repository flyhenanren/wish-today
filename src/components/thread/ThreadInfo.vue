<script setup lang="ts">
import { nextTick, onMounted, ref, defineProps, watch, reactive, toRaw } from "vue"
import { ThreadCount } from "./types";
import * as echarts from 'echarts';
import useColor from "./hooks/useColor";
import useIpc from "../../ipc/useIpc"
import useChart from "./detail/useChart";
import { PoolThreads, useDump } from "../../api/api";
import ProcessItem from "./component/ProcessItem.vue";
import { ThreadStatus } from "../../types";


const {listThreadsPool} = useDump()

const { getBackground, getForeground } = useColor()

export interface IProps {
  file: any | undefined
}

const props = defineProps<IProps>()
const emit = defineEmits(["back"])
watch(() => props.file,
  (value) => {
    if(value){
      queryData()
    }
  },{immediate:true})

function queryData(){
  listThreadsPool(props.file.file_id!).then((resp) => {
    if(resp.code === 200) {
      resetParam()
      buildRow(resp.data)
    }
  })
}

const runnable = {
  count: 0,
  status: ThreadStatus.RUNNABLE,
  icon: 'ios-cog'
}
const timedWaiting = {
  count: 0,
  status: ThreadStatus.TIMED_WAITING,
  icon: 'ios-time'
}
const waiting = {
  count: 0,
  status: ThreadStatus.WAITING,
  icon: 'ios-pause'
}
const blocked = {
  count: 0,
  status: ThreadStatus.BLOCKED,
  icon: 'ios-lock'
}

const threadTotal = ref(0)
const threadPoolData = reactive<{value: number, name: string}[]>([])
const threadStatus = reactive<ThreadCount[]>([])
const tableData = reactive<PoolThreads[]>([])

function resetParam(){
  threadTotal.value = 0
  runnable.count = 0
  timedWaiting.count = 0
  waiting.count = 0
  blocked.count = 0
  threadPoolData.splice(0, threadPoolData.length)
  threadStatus.splice(0, threadStatus.length)
  tableData.splice(0, tableData.length)
}
function buildRow(rows: PoolThreads[]) {
  rows.sort((a, b) => b.count - a.count).forEach(e =>{
    runnable.count += e.runnable
    timedWaiting.count += e.time_waitting
    waiting.count += e.waitting
    blocked.count += e.block
    threadTotal.value += 1
    threadPoolData.push({
      value: e.count,
      name: e.count === 1 ? e.source_name : e.name
    })
  })
  threadStatus.push(runnable)
  threadStatus.push(timedWaiting)
  threadStatus.push(waiting)
  threadStatus.push(blocked)
  threadPoolData.splice(0, threadPoolData.length, ...threadPoolData.slice(0,6))
  buildGraph()
  tableData.splice(0, rows.length, ...rows)
}


const threadChart = ref(null);
let threadGraph: any = null;

const threadPoolChart = ref(null);
let theadPollGraph: any = null;
const {buildThreadGraph,buildThreadPoolGraph} = useChart()

function buildGraph(){
    threadGraph = echarts.init(threadChart.value)
    theadPollGraph = echarts.init(threadPoolChart.value)
    threadGraph.setOption(buildThreadGraph(threadStatus));
    theadPollGraph.setOption(buildThreadPoolGraph(threadPoolData))
}


function getStyle(status: ThreadStatus) {
  return {
    background: getBackground(status),
    color: getForeground(status)
  }
}
function getFontColor(status: ThreadStatus) {
  return {
    color: getForeground(status)
  }
}

const tableColumns = ref([
  {
    title: '线程名称',
    slot: 'name',
  },
  {
    title: '数量',
    key: 'count',
    width: 100
  },
  {
    title: '活跃占比',
    slot: 'percent',
    width: 250,
    align: 'center'
  }
])


const { createWindow} = useIpc();


function openWindow(status: ThreadStatus, ids: string[]) {
    createWindow({ isMainWin: false, route: `/threadDetail`, data: {
      file: props.file.file_id,
      status,
      ids:toRaw(ids)
    }})
};


function handleBack(){
  emit('back')
}

</script>

<template>
    <n-page-header :subtitle="props.file.file_name" @back="handleBack">
      <div :class="$style.viewContainer">
      <div :class="$style.title">
        <span>Total Threads count: {{ threadTotal }} </span>
      </div>
      <div :class="$style.threadView">
        <div :class="$style.threadList">
          <div :class="[$style.panel, $style.newPanel]" v-for="item in threadStatus" :key="item.status">
            <div :class="[$style.threadRunnable, $style.textCenter]" :style="getStyle(item.status)">
              <Icon :type="item.icon" :class="$style.threadIcon" />
            </div>
            <div :class="[$style.threadNum, $style.textCenter]">{{ item.count }}</div>
            <div :class="[$style.threadStatus, $style.textCenter]">{{ item.status }}</div>
            <div :class="[$style.theadDetail, $style.textCenter, $style.panelNewFooter]" :style="getStyle(item.status)">
              <span @click="() => openWindow(item.status,[])">ViewDetail</span>
            </div>
          </div>
        </div>
        <div class="thread-count" style="width: 400px;height: 300px;">
          <div ref="threadChart" style="width: 100%;height: 100%;"></div>
        </div>
      </div>
    </div>
    <div :class="$style.viewContainer">
      <div :class="$style.title">
        <span>Thread Pools </span>
      </div>
      <div :class="$style.poolContainer">
        <div class="thread-pool-count" style="width: 550px;height: 370px; margin-right: 20px;">
          <div ref="threadPoolChart" style="width: 100%;height: 100%;"></div>
        </div>
        <div :class="$style.threadPoolTable">
          <Table border :columns="tableColumns" :data="tableData" height="350">
            <template #name="{ row }">
              <span>{{ row.count === 1 ? row.source_name :  row.name}}</span>
            </template>
            <template #percent="{ row, index }">
                <ProcessItem  
                :runnable="row.runnable" 
                :waitting="row.waitting"
                :timeWaitting="row.time_waitting"
                :blocked="row.block"
                @open="(status)=>openWindow(status, row.thread_ids)"
                />
            </template>
          </Table>
        </div>
      </div>
    </div>
    </n-page-header>
</template>

<style scoped module>
.viewContainer {
  border-bottom: 1px solid #E8E8E8;
  padding: 0px 10px;
}

.title {
  color: #1A1A1A;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 37px;
}

.threadIcon {
  padding: 10px;
  border-radius: 50%;
  text-align: center;
  font-size: 20px;
}

.threadNum {
  font-size: 45px;
  font-weight: bold;
  color: #292929;
  line-height: normal;
}

.threadStatus {
  color: #4F4F4F;
  font-size: 15px;
}

.textCenter {
  text-align: center;
}

.threadList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.threadView {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.panel {
  margin: 4px 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}

.newPanel {
  width: 170px;
  padding: 10px;
  border-radius: 10px !important;
  background-color: #FFFFFF !important;
  border-color: transparent !important;
  box-shadow: 0 8px 14px 0 rgba(216, 221, 230, 0.5);
}

.panelNewFooter {
  padding: 5.5px 16px;
  border-radius: 5px;
  margin-top: 5px;
  cursor: pointer;
}

.threadPoolTable {
  width: 100%;
}

.poolContainer {
  display: flex;
  justify-content: space-between;
}
</style>
