import VueRouter from 'vue-router'
import ExampleComponent from './components/ExampleComponent'
import Register from './pages/Register'
import Login from './pages/Login'
import Participants from './pages/Participants'

const routes = [
  {
    path: '/',
    component: ExampleComponent,
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