<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" v-for="(item, index) in navbarRoutes" :key="index">
        <router-link
          class="nav-link"
          :class="{ active: $route.name == item.name }"
          :to="{ name: item.name }"
          >{{ item.title }}</router-link
        >
      </li>

      <li class="nav-item">
        <a class="nav-link" href="javascript:void(0)" @click="logout"
          >Chiqish</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navbarRoutes: [
        {
          name: "home",
          title: "Bosh sahifa"
        },

        {
          name: "about",
          title: "Biz haqimizda"
        }
      ]
    }
  },

  methods: {
    logout() {
      localStorage.removeItem("token")
      this.$router.push({ name: "login" })
    }
  }
}
</script>
