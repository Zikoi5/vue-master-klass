import Vue from "vue"
import Vuex from "vuex"
import axios from "@/plugins/axios"
import modules from "@/store/modules"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules
})

// Автоматически запустить действие `init` для каждого существующего модуля
for (const moduleName of Object.keys(modules)) {
  if (modules[moduleName].actions && modules[moduleName].actions.init) {
    store.dispatch(`${moduleName}/init`)
  }
}

store.$axios = axios

export default store
