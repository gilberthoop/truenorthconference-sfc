
import VueRouter from 'vue-router'
import { isLoggedIn } from './utils/auth'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Participants from './pages/Participants'
import PortalHome from './pages/portal/PortalHome'
import Competitions from './pages/portal/Competitions'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/register',
    component: Register,
    name: 'register',
    beforeEnter: (to, from, next) => {
      if (isLoggedIn()) {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
    beforeEnter: (to, from, next) => {
      if (isLoggedIn()) {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/participants',
    component: Participants,
    name: 'participants',
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      if (to.meta.requiresAuth && !isLoggedIn()) {
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/portal/home',
    component: PortalHome,
    name: 'portal-home',
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      if (to.meta.requiresAuth && !isLoggedIn()) {
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/portal/competitions',
    component: Competitions,
    name: 'portal-competitions',
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      if (to.meta.requiresAuth && !isLoggedIn()) {
        next('/login')
      } else {
        next()
      }
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;