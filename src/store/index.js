import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: -1
  },

  getters: {},

  mutations: {
    SET_COUNT(state, payload) {
      state.count = payload
    }
  },

  actions: {}
})

export default store
