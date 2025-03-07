import {Reactive} from 'vue'
import { ThreadCount } from '../types';
import useColor from '../hooks/useColor';

export default function(){
  const {getForeground}  = useColor()
  
  function buildThreadGraph(threadStatus: Reactive<ThreadCount[]>){
    const data: any[] = []
    threadStatus.forEach(e => {
      data.push({
        value: e.count,
        name: e.status,
        itemStyle: { color: getForeground(e.status) }
      })
    })

    return  {
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
          radius: '40%',
          data: data,
          top: 50,
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
  }
  function buildThreadPoolGraph(data: any[]){
    return {
      legend: {
        top: 'bottom'
      },
      series: [
        {
          name: 'Nightingale Chart',
          type: 'pie',
          radius: [20, 80],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 8
          },
          data: data
        }
      ]
    }
  }
  return {
    buildThreadGraph,
    buildThreadPoolGraph
  }
}