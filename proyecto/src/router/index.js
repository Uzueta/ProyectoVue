import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import VisualizarCategorias from '../views/VisualizarCategorias.vue'
import VisualizarTickets from '../views/VisualizarTickets.vue'
import VisualizarPersonal from '../views/VisualizarPersonal.vue'
import AgregarCategorias from '../views/AgregarCategorias.vue'
import EliminarCategorias from '../views/EliminarCategorias.vue'
import AgregarPersonal from '../views/AgregarPersonal.vue'

Vue.use(VueRouter)

const routes = [
  {
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
    path: '/EliminarCategorias',
    name: 'EliminarCategorias',
    component: EliminarCategorias
  },
  {
    path: '/AgregarPersonal',
    name: 'AgregarPersonal',
    component: AgregarPersonal
  }
]

const router = new VueRouter({
  routes
})

export default router
