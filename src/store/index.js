import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    overlay: false,
    drawer: false,
  },
  mutations: {
    SET_OVERLAY: (state, payload) => state.overlay = payload,
    SET_DRAWER: (state, payload) => state.drawer = payload,
  },
  actions: {
  },
  modules: {
  }
})
