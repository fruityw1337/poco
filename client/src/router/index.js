import { createRouter, createWebHistory } from 'vue-router'
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
  const user = localStorage.getItem('user')

  if (authRequired && !user) {
    return next('/login')
  }

  next()
})

export default router
