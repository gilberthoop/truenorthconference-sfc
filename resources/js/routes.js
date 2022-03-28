import VueRouter from 'vue-router'
import ExampleComponent from './components/ExampleComponent'
import Register from './pages/Register.vue'
import Participants from './pages/Participants.vue'

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