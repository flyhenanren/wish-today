<script setup lang="ts">

import {ref,onMounted,onUnmounted,nextTick} from 'vue'
import * as echarts from 'echarts';
import useStackTrace from './hooks/useStackTrace';
import { StackTrace } from '../../types';

import {
  CustomSeriesRenderItem,
  CustomSeriesRenderItemAPI,
  CustomSeriesRenderItemParams,
  CustomSeriesRenderItemReturn
} from 'echarts';

const {stackTrace} = useStackTrace()
declare function structuredClone(value: any, options?: any): any;


const ColorTypes = {
  root: '#8fd3e8',
  genunix: '#d95850',
  unix: '#eb8146',
  ufs: '#ffb248',
  FSS: '#f2d643',
  namefs: '#ebdba4',
  doorfs: '#fcce10',
  lofs: '#b5c334',
  zfs: '#1bca93'
} as const;

const filterJson = (json: StackTrace, id?: string): StackTrace => {
  if (id == null) {
    return json;
  }

  const recur = (item: StackTrace, id?: string): StackTrace | undefined => {
    if (item.id === id) {
      return item;
    }

    for (const child of item.children || []) {
      const temp = recur(child, id);
      if (temp) {
        item.children = [temp];
        item.value = temp.value; // change the parents' values
        return item;
      }
    }
  };

  return recur(json, id) || json;
};

const recursionJson = (jsonObj: StackTrace, id?: string): any[] => {
  const data: any[] = [];
  const filteredJson = filterJson(structuredClone(jsonObj), id);
  const rootVal = filteredJson.value;

  const recur = (item: StackTrace, start = 0, level = 0) => {
    const temp = {
      name: item.id,
      // [level, start_val, end_val, name, percentage]
      value: [
        level,
        start,
        start + item.value,
        item.name,
        (item.value / rootVal) * 100
      ],
      itemStyle: {
        color: ColorTypes[item.name.split(' ')[0] as keyof typeof ColorTypes]
      }
    };
    data.push(temp);

    let prevStart = start;
    for (const child of item.children || []) {
      recur(child, prevStart, level + 1);
      prevStart = prevStart + child.value;
    }
  };

  recur(filteredJson);
  return data;
};

const heightOfJson = (json: StackTrace): number => {
  const recur = (item: StackTrace, level = 0): number => {
    if ((item.children || []).length === 0) {
      return level;
    }

    let maxLevel = level;
    for (const child of item.children!) {
      const tempLevel = recur(child, level + 1);
      maxLevel = Math.max(maxLevel, tempLevel);
    }
    return maxLevel;
  };

  return recur(json);
};

const renderItem: CustomSeriesRenderItem = (
  params: CustomSeriesRenderItemParams,
  api: CustomSeriesRenderItemAPI
) => {
  const level = api.value(0);
  const start = api.coord([api.value(1), level]);
  const end = api.coord([api.value(2), level]);
  const height = (((api.size && api.size([0, 1])) || [0, 20]) as number[])[1];
  const width = end[0] - start[0];

  return {
    type: 'rect',
    transition: ['shape'],
    shape: {
      x: start[0],
      y: start[1] - height / 2,
      width,
      height: height - 2 /* itemGap */,
      r: 2
    },
    style: {
      fill: api.visual('color')
    },
    emphasis: {
      style: {
        stroke: '#000'
      }
    },
    textConfig: {
      position: 'insideLeft'
    },
    textContent: {
      style: {
        text: api.value(3),
        fontFamily: 'Verdana',
        fill: '#000',
        width: width - 4,
        overflow: 'truncate',
        ellipsis: '..',
        truncateMinChar: 1
      },
      emphasis: {
        style: {
          stroke: '#000',
          lineWidth: 0.5
        }
      }
    }
  } as CustomSeriesRenderItemReturn;
};


function getOption(levelOfOriginalJson: number){
    
    return {
        backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0.05,
            color: '#eee'
          },
          {
            offset: 0.95,
            color: '#eeeeb0'
          }
        ]
      },
      tooltip: {
        formatter: (params: any) => {
          const samples = params.value[2] - params.value[1];
          return `${params.marker} ${
            params.value[3]
          }: (${echarts.format.addCommas(
            samples
          )} samples, ${+params.value[4].toFixed(2)}%)`;
        }
      },
      title: [
        {
          text: 'Flame Graph',
          left: 'center',
          top: 10,
          textStyle: {
            fontFamily: 'Verdana',
            fontWeight: 'normal',
            fontSize: 20
          }
        }
      ],
      toolbox: {
        feature: {
          restore: {}
        },
        right: 20,
        top: 10
      },
      xAxis: {
        show: false
      },
      yAxis: {
        show: false,
        max: levelOfOriginalJson
      },
      series: [
        {
          type: 'custom',
          renderItem,
          encode: {
            x: [0, 1, 2],
            y: 0
          },
          data: recursionJson(stackTrace)
        }
      ]
    }
}

const flameChart = ref(null)
let flameGraph:any = null

onMounted(() => {
    nextTick(()=>{
        flameGraph = echarts.init(flameChart.value)
        flameGraph.showLoading()
        flameGraph.hideLoading();
        const levelOfOriginalJson = heightOfJson(stackTrace);
        const option = getOption(levelOfOriginalJson)
        flameGraph.setOption(option);
        flameGraph.on('click', (params: any) => {
            const data = recursionJson(stackTrace, params.data.name);
            const rootValue = data[0].value[2];
            flameGraph.setOption({
                xAxis: { max: rootValue },
                series: [{ data }]
            })
        })
    })
})


</script>

<template>
  <div :class="$style.container">
    <div ref="flameChart" style="width: 1000px; height: 500px;"></div>
  </div>
</template>

<style scoped module>
.container{
  height: 100%;
}
</style>
