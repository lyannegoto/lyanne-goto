import { createWebHistory, createRouter } from 'vue-router'

import Inicio from './../components/Inicio.vue'
import SobreMim from './../components/SobreMim.vue'
import Duvidas from './../components/Duvidas.vue'
import Ensaios from './../components/Ensaios.vue'

const history = createWebHistory()
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Inicio
        },
        {
            path: '/inicio',
            component: Inicio
        },
        {
            path: '/sobre-mim',
            component: SobreMim
        },
        {
            path: '/duvidas',
            component: Duvidas
        },
        {
            path: '/ensaios',
            component: Ensaios
        },
    ]
})

export default router