import Vue from 'vue'
import Vuex from 'vuex'
import { isLoggedIn, logOut } from '../utils/auth';

Vue.use(Vuex)

const store = new Vuex.Store({
  state () {
    return {
      step: 1,
      name: null,
      email: null,
      password: null,
      region: null,
      area: null,
      inPerson: null,
      workshop: null,
      loggedIn: false,
      user: null
    }
  },

  mutations: {
    setStep (state, value) {
      state.step = value
    },

    setName (state, value) {
      state.name = value
    },

    setEmail (state, value) {
      state.email = value
    },

    setPassword (state, value) {
      state.password = value
    },

    setRegion (state, value) {
      state.region = value
    },

    setArea (state, value) {
      state.area = value
    },

    setInPerson (state, value) {
      state.inPerson = value
    },

    setWorkshop (state, value) {
      state.workshop = value
    },

    setLoggedIn (state, value) {
      state.loggedIn = value
    },

    setUser (state, value) {
      state.user = value
    }
  },

  actions: {
    async loadUser ({ commit, dispatch }) {
      if (isLoggedIn()) {
        try {
          // Fetch user upon successful login
          const user = (await axios.get("/user")).data
          commit('setUser', user)
          commit('setLoggedIn', true)
        } catch (error) {
          console.log(error)
          dispatch('logout')
        }
      }
    },

    logout({ commit }) {
      commit('setUser', {})
      commit('setLoggedIn', false)
      logOut()
    }
  }
})

export default store