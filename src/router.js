import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        icon: 'home', title: 'Home'
      },
      component: () => import(/* webpackChunkName: "home" */ './pages/home/Home')
    },
    {
      name: 'expenses-list',
      path: '/expenses-list',
      meta: {
        icon: 'list-ul', title: 'Lista Gastos'
      },
      component: () => import(
        /* webpackChunkName: "expenses-list" */
        './pages/expenses-list/ExpensesList'
      )
    },
    {
      name: 'login',
      path: '/login',
      meta: { title: 'Login' },
      component: () => import(/* webpackChunkName: "login" */ './pages/login/Login')
    },
    {
      name: 'register',
      path: '/register',
      meta: { title: 'Register' },
      component: () => import(/* webpackChunkName: "register" */ './pages/register/Register')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Expenses`

  if (!window.uid && to.name !== 'login' && to.name !== 'register') {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
