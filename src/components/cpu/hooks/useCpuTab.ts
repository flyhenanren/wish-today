import {reactive} from 'vue'
import { Sheet } from '../../../types'
import { CommonSheet } from '../../../model'

export default function(){
    const tabs = reactive<Sheet[]>([])
    const cpuProfiling = new CommonSheet('cpuProfiling','cpu分析','ios-home')
    const allTheads = new CommonSheet('allTheads','调用树-所有线程','ios-pulse')
    const byThreads = new CommonSheet('byThreads','调用树-按线程','ios-trending-down')
    const flameGraph = new CommonSheet('flameGraph','火焰图','ios-stats')
    const hotSpots = new CommonSheet('hotSpots','热点方法','ios-speedometer')
    const methodsList = new CommonSheet('methodsList','方法列表','ios-list-box-outline')

    tabs.push(cpuProfiling)
    tabs.push(allTheads)
    tabs.push(byThreads)
    tabs.push(flameGraph)
    tabs.push(hotSpots)
    tabs.push(methodsList)
    return {
        tabs
    }
}
