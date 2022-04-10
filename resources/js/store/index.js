import Vue from 'vue'
import Vuex from 'vuex'
// import { isLoggedIn, logOut } from "./utils/auth";

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
      workshop: null
    }
  },

  mutations: {
    setStep (state, step) {
      state.step = step
    },

    setName (state, name) {
      state.name = name
    },

    setEmail (state, email) {
      state.email = email
    },

    setPassword (state, password) {
      state.password = password
    },

    setRegion (state, region) {
      state.region = region
    },

    setArea (state, area) {
      state.area = area
    },

    setInPerson (state, inPerson) {
      state.inPerson = inPerson
    },

    setWorkshop (state, workshop) {
      state.workshop = workshop
    }
  },

  actions: {
    async loadUser ({ commit }) {
      // if (isLoggedIn()) {
      //   try {
      //     const user = (await axios.get("/user")).data
      //     commit('setName', user)
      //   } catch (error) {
      //     console.log(error)
      //   }
      // }
    }
  }
})

export default store