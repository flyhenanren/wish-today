<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue"
import { ThreadCount } from "./types";
import { ThreadStatus } from "../../types";
import * as echarts from 'echarts';
import useColor from "./hooks/useColor";
import useIpc from "../../ipc/useIpc"

const { getBackground, getForeground } = useColor()

let threadTotal = ref(0)

let threadStatus = ref<ThreadCount[]>([])
threadStatus.value.push({
  count: 25,
  status: ThreadStatus.RUNNABLE,
  icon: 'ios-cog'
})
threadStatus.value.push({
  count: 15,
  status: ThreadStatus.WAITING,
  icon: 'ios-pause'
})
threadStatus.value.push({
  count: 9,
  status: ThreadStatus.TIMED_WAITING,
  icon: 'ios-time'
})
threadStatus.value.push({
  count: 1,
  status: ThreadStatus.BLOCKED,
  icon: 'ios-lock'
})

threadTotal.value = threadStatus.value.reduce((pre, cur) => {
  return pre + cur.count
}, 0)

const threadChart = ref(null);
let threadGraph: any = null;

const threadPoolChart = ref(null);
let theadPollGraph: any = null;

onMounted(() => {
  nextTick(() => {
    threadGraph = echarts.init(threadChart.value)
    theadPollGraph = echarts.init(threadPoolChart.value)
    const data: any[] = []
    threadStatus.value.forEach(e => {
      data.push({
        value: e.count,
        name: e.status,
        itemStyle: { color: getForeground(e.status) }
      })
    })
    const threadOption = {
      title: {
        text: '线程百分比',
        subtext: '按状态',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '线程数量',
          type: 'pie',
          radius: '60%',
          data: data,
          label: {
            //echarts饼图内部显示百分比设置
            show: true,
            position: "outside", //outside 外部显示  inside 内部显示
            formatter: `{d}%`,
            fontSize: 15 //字体大小
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    const threadPoolOption = {
      legend: {
        top: 'bottom'
      },
      series: [
        {
          name: 'Nightingale Chart',
          type: 'pie',
          radius: [20, 100],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 8
          },
          data: [
            { value: 40, name: 'rose 1' },
            { value: 38, name: 'rose 2' },
            { value: 32, name: 'rose 3' },
            { value: 30, name: 'rose 4' },
            { value: 28, name: 'rose 5' },
            { value: 26, name: 'rose 6' },
            { value: 22, name: 'rose 7' },
            { value: 18, name: 'rose 8' }
          ]
        }
      ]
    }
    threadGraph.setOption(threadOption);
    theadPollGraph.setOption(threadPoolOption)
  })
})

function getStyle(status: ThreadStatus) {
  return {
    background: getBackground(status),
    color: getForeground(status)
  }
}
function getFontColor(status: ThreadStatus){
  return {
    color: getForeground(status)
  }
}

const tableColumns = ref([
  {
    title: '线程名称',
    slot: 'threadPool',
  },
  {
    title: '数量',
    key: 'number',
    width:100
  },
  {
    title: '占比',
    slot: 'percent',
    width: 250,
    align: 'center'
  }
])
const tableData = ref([])



const {createWindow} = useIpc();
function openWindow(status: ThreadStatus) {
    createWindow({ isMainWin: false, route: '/error'})
};

</script>

<template>
  <div>
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
              <span @click="() => openWindow(item.status)">ViewDetail</span>
            </div>
          </div>
        </div>
        <div class="thread-count" style="width: 550px;height: 300px;">
          <div ref="threadChart" style="width: 100%;height: 100%;"></div>
        </div>
      </div>
    </div>
    <div :class="$style.viewContainer">
      <div :class="$style.title">
        <span>Thread Pools </span>
      </div>
      <div :class="$style.poolContainer">
        <div class="thread-pool-count" style="width: 550px;height: 400px; margin-right: 20px;">
          <div ref="threadPoolChart" style="width: 100%;height: 100%;"></div>
        </div>
        <div :class="$style.threadPoolTable">
          <Table border :columns="tableColumns" :data="tableData">
            <template #threadPool="{ row }">
              <span>{{ row.threadName }}</span>
            </template>
            <template #percent="{ row, index }">
                <span v-show="row.runnable" :style="getFontColor(ThreadStatus.RUNNABLE)">{{ row.runnable }}</span>
                <span v-show="row.waiting" :style="getFontColor(ThreadStatus.RUNNABLE)"> {{ row.waiting }}</span>
                <span v-show="row.timedWaiting" :style="getFontColor(ThreadStatus.RUNNABLE)">{{ row.timedWaiting }}</span>
            </template>
          </Table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped module>
.viewContainer {
  border-bottom: 1px solid #E8E8E8;
  padding: 15px 10px;
}

.title {
  color: #1A1A1A;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 37px;
}

.threadIcon {
  padding: 20px;
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
.poolContainer{
  display: flex;
  justify-content: space-between;
}
</style>
