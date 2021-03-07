import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const lazyload = componentPath => {
  return () =>
    import(/* webpackChunkName: "[request]" */ `@/pages/${componentPath}.vue`)
}

const routes = [
  {
    path: "/",
    name: "home",
    component: lazyload("index")
  },

  {
    path: "/about",
    name: "about",
    component: lazyload("about")
  }
]

const router = new VueRouter({
  routes
})

export default router
