import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "@/store"
import axios from "@/plugins/axios"

import "@/assets/css/main.css"

Vue.config.productionTip = false

// this.$axios
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
