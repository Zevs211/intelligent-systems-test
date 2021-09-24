import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import ShipDetailPage from '../views/ShipDetailPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/ship/:id',
    name: 'ship-detail-page',
    component: ShipDetailPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
