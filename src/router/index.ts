import { createMemoryHistory, createRouter } from 'vue-router'

import CpuView from '../components/cpu'
import CpuProfiling from '../components/cpu/CpuProfiling.vue'
import ThreadView from '../components/threads'
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
      { path: '/cpuProfiling', name: 'cpuProfiling',  component: CpuProfiling }
    ]},
  { path: '/thread', name:'thread',component: ThreadView },
  { path: '/memory', name:'memory',component: MemoryView },
  { path: '/summary', name:'summary',component: SummaryView },
  { path: '/about', name:'about',component: AboutView },
  { path: '/error', name:'error',component: ErrorView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router