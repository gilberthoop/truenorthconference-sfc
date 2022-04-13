import VueRouter from 'vue-router'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Participants from './pages/Participants'
import PortalHome from './pages/portal/PortalHome'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/register',
    component: Register,
    name: 'register'
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/participants',
    component: Participants,
    name: 'participants'
  },
  {
    path: '/portal/home',
    component: PortalHome,
    name: 'portal-home'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;