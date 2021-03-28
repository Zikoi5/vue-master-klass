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
        component: lazyload("index"),
        meta: {
          auth: true
        }
      },

      {
        path: "about",
        name: "about",
        component: lazyload("about"),
        meta: {
          auth: true
        }
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

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  const requireAuth = !!(to.meta && to.meta.auth)
  const token = localStorage.getItem("token")

  // console.log("beforeEach", to)
  // console.log("token", token)

  if (requireAuth && token) {
    if (to.name == "login") {
      next({ name: "home" })
      return
    }

    next()
    return
  }

  if (token) {
    if (to.name == "login") {
      next({ name: "home" })
      return
    }
  } else {
    if (to.name != "login") {
      next({ name: "login" })
      return
    }
  }
  next()
})

export default router
