import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './pages/home/Home')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ './pages/login/Login')
    }
  ]
})
