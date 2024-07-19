import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from '../components/home'
import ThreadView from '../components/thread'
import MemoryView from '../components/memory'
import ErrorView from '../view/Error.vue'
import AboutView from '../view/About.vue'


const routes = [
  { path: '/', name:'home',component: HomeView },
  { path: '/thread', name:'thread',component: ThreadView },
  { path: '/memory', name:'memory',component: MemoryView },
  { path: '/about', name:'about',component: AboutView },
  { path: '/error', name:'error',component: ErrorView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router