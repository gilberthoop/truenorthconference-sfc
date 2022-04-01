import VueRouter from 'vue-router'
import Register from './pages/Register'
import Login from './pages/Login'
import Participants from './pages/Participants'

const routes = [
  {
    path: '/',
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
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;