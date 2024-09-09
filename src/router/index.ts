import { createWebHashHistory, createRouter } from 'vue-router'

import CpuView from '../components/cpu'
import CpuProfiling from '../components/cpu/CpuProfiling.vue'
import AllThreads from '../components/cpu/AllThreads.vue'
import ByThreads from '../components/cpu/ByThreads.vue'
import FlameGraph from '../components/cpu/FlameGraph.vue'
import HotSpots from '../components/cpu/HotSpots.vue'
import MethodsList from '../components/cpu/MethodsList.vue'

import ThreadView from '../components/threads'
import ThreadCount from '../components/threads/ThreadCount.vue'
import IdenticalStackTrace from '../components/threads/IdenticalStackTrace.vue'
import BlockingThreads from '../components/threads/BlockingThreads.vue'
import DeadLock from '../components/threads/DeadLock.vue'

import MemoryView from '../components/memory'
import SummaryView from '../components/summary'
import ErrorView from '../view/Error.vue'
import AboutView from '../view/About.vue'
import HomeView from '../view/Home.vue'


const routes = [
  { path: '/', name:'home',component: HomeView },
  { 
    path: '/cpu',
    name: 'cpu', 
    component: CpuView ,
    children:[
      { path: '/cpuProfiling', name: 'cpuProfiling',  component: CpuProfiling },
      { path: '/allThreads', name: 'allThreads',  component: AllThreads},
      { path: '/byThreads', name: 'byThreads',  component: ByThreads },
      { path: '/flameGraph', name: 'flameGraph',  component: FlameGraph },
      { path: '/hotSpots', name: 'hotSpots',  component: HotSpots },
      { path: '/methodsList', name: 'methodsList',  component: MethodsList }
    ]},
  { path: '/thread', name:'thread',component: ThreadView,
    children:[
      { path: '/threadCount', name: 'threadCount',  component: ThreadCount },
      { path: '/identicalStackTrace', name: 'identicalStackTrace',  component: IdenticalStackTrace },
      { path: '/blockingThreads', name: 'blockingThreads',  component: BlockingThreads },
      { path: '/deadLock', name: 'deadLock',  component: DeadLock }
    ]
   },
  { path: '/memory', name:'memory',component: MemoryView },
  { path: '/summary', name:'summary',component: SummaryView },
  { path: '/about', name:'about',component: AboutView },
  { path: '/error', name:'error',component: ErrorView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router