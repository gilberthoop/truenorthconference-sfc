import VueRouter from 'vue-router'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Participants from './pages/Participants'

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
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;