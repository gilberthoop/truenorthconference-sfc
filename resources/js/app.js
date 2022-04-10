require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from './plugins/vuetify'
import VeeValidate from 'vee-validate'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import router from './routes'
import store from './store'
import Index from './index'

Vue.use(VueRouter)
Vue.use(Vuetify)

const app = new Vue({
    el: '#app',
    vuetify: Vuetify,
    VeeValidate,
    router,
    store,
    components: {
      'index': Index
    },

    async beforeCreate () {
      this.$store.dispatch("loadUser");
    }
});
