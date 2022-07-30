import { createRouter, createWebHistory } from 'vue-router'
import jwtDecode from 'jwt-decode'

import store from '../store/index'

import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import CreatePost from '../views/CreatePost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Dashboard },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/create',
      name: 'new post',
      component: CreatePost,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/']
  const authRequired = !publicPages.includes(to.path)
  const user = JSON.parse(localStorage.getItem('user'))

  // const decodedToken = jwtDecode(user.token, { complete: true })
  // const dateNow = new Date()

  // if (parseInt(decodedToken.exp.toString() + '000', 10) < dateNow.getTime()) {
  //   store.dispatch('user/logout')
  // }

  if (authRequired && !user) {
    return next('/login')
  }

  next()
})

export default router
