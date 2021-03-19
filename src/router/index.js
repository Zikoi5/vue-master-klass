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
    component: () => import("@/layouts/default"),
    children: [
      {
        path: "",
        name: "home",
        component: lazyload("index")
      },

      {
        path: "about",
        name: "about",
        component: lazyload("about")
      }
    ]
  },

  // login layout/page
  {
    path: "/login",
    name: "login",
    component: () => import("@/layouts/login")
  },

  // login layout/page
  {
    path: "/404",
    name: "404",
    component: () => import("@/layouts/404")
  },

  {
    path: "**",
    redirect: "/404"
  }
]

const router = new VueRouter({
  routes
})

export default router
