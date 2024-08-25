import {reactive} from 'vue'
import { Sheet } from '../../../types'
import { CommonSheet } from '../../../model'

export default function(){
    const tabs = reactive<Sheet[]>([])
    const threadCount = new CommonSheet('threadCount','线程总览','ios-home')
    const threadPools = new CommonSheet('ThreadPools','线程池','ios-home')
    const identicalStackTrace = new CommonSheet('identicalStackTrace','热点堆栈','ios-home')
    const blockingThreads = new CommonSheet('blockingThreads','阻塞线程','ios-home')
    const deadLock = new CommonSheet('deadLock','死锁线程','ios-home')
    tabs.push(threadCount)
    tabs.push(threadPools)
    tabs.push(identicalStackTrace)
    tabs.push(blockingThreads)
    tabs.push(deadLock)
    return {
        tabs
    }
}
