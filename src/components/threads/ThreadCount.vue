<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue"
import { ThreadCount } from "./types";
import { ThreadStatus } from "../../types";
import * as echarts from 'echarts';
import useColor from "./hooks/useColor";

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

const percentChart = ref(null);
let percentGraph: any = null;

onMounted(() => {
  nextTick(() => {
    percentGraph = echarts.init(percentChart.value)
    const data: any[] = []
    threadStatus.value.forEach(e => {
      data.push({
        value: e.count,
        name: e.status,
        itemStyle: {color: getForeground(e.status)}
      })
    })
    const option = {
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

    percentGraph.setOption(option);
  })
})

function getIconStyle(status: ThreadStatus) {
  return {
    background: getBackground(status),
    color: getForeground(status)
  }
}

function getActionStyle(status: ThreadStatus) {
  return {
    background: getBackground(status)
  }
}

</script>

<template>
  <div>
    <div :class="$style.threadCountContainer">
      <span>Total Threads count: {{ threadTotal }} </span>
    </div>
    <div :class="$style.threadView">
      <div :class="$style.threadList">
        <div :class="[$style.panel, $style.newPanel]" v-for="item in threadStatus" :key="item.status">
          <div :class="[$style.threadRunnable, $style.textCenter]" :style="getIconStyle(item.status)">
            <Icon :type="item.icon" :class="$style.threadIcon" />
          </div>
          <div :class="[$style.threadNum, $style.textCenter]">{{ item.count }}</div>
          <div :class="[$style.threadStatus, $style.textCenter]">{{ item.status }}</div>
          <div :class="[$style.theadDetail, $style.textCenter, $style.panelNewFooter]"
            :style="getActionStyle(item.status)">
            <span>ViewDetail</span>
          </div>
        </div>
      </div>
      <div class="thread-count" style="width: 740px;height: 350px;">
        <div ref="percentChart" style="width: 100%;height: 100%;"></div>
      </div>
    </div>
  </div>
</template>

<style scoped module>
.threadCountContainer {
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
  font-size: 70px;
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
  width: 340px;
  padding: 10px;
  border-radius: 10px !important;
  background-color: #FFFFFF !important;
  border-color: transparent !important;
  box-shadow: 0 8px 14px 0 rgba(216, 221, 230, 0.5);
}

.panelNewFooter {
  padding: 5.5px 16px;
  border-radius: 5px;
  margin-top: 35px;
  cursor: pointer;
}
</style>
