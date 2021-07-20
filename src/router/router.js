import VueRouter from 'vue-router'

import Duvidas from './../components/Duvidas.vue'
import SobreMim from './../components/SobreMim.vue'

const routes = [
  {
    path: '/duvidas',
    name: 'Duvidas',
    component: Duvidas
  },
  {
    path: '*',
    name: 'Sobre Mim',
    component: SobreMim
  }
]

const router = new VueRouter({
  linkExactActiveClass: '',
  routes
})

export default router