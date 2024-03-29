import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import VisualizarCategorias from '../views/VisualizarCategorias.vue'
import VisualizarTickets from '../views/VisualizarTickets.vue'
import VisualizarPersonal from '../views/VisualizarPersonal.vue'
import AgregarCategorias from '../views/AgregarCategorias.vue'
import AgregarPersonal from '../views/AgregarPersonal.vue'
import AgregarTickets from '../views/AgregarTickets.vue'
import EditarPersonal from '../views/EditarPersonal.vue'
import EditarTickets from '../views/EditarTickets.vue'
import CambiarEstatus from '../views/CambiarEstatus.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Inicio',
        component: Inicio
    },
    {
        path: '/VisualizarCategorias',
        name: 'VisualizarCategorias',
        component: VisualizarCategorias
    },
    {
        path: '/VisualizarTickets',
        name: 'VisualizarTickets',
        component: VisualizarTickets
    },
    {
        path: '/VisualizarPersonal',
        name: 'VisualizarPersonal',
        component: VisualizarPersonal
    },
    {
        path: '/AgregarCategorias',
        name: 'AgregarCategorias',
        component: AgregarCategorias
    },
    {
        path: '/AgregarPersonal',
        name: 'AgregarPersonal',
        component: AgregarPersonal
    },
    {
        path: '/AgregarTickets',
        name: 'AgregarTickets',
        component: AgregarTickets
    },
    {
        path: '/EditarPersonal',
        name: 'EditarPersonal',
        component: EditarPersonal
    },
    {
        path: '/EditarTickets',
        name: 'EditarTickets',
        component: EditarTickets
    },
    {
        path: '/cambiarEstatus',
        name: 'CambiarEstatus',
        component: CambiarEstatus
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router