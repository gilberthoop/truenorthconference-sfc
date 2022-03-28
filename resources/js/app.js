require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from './plugins/vuetify'
import VeeValidate from 'vee-validate'

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
    }
});
