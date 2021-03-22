<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" v-for="(item, index) in navbarRoutes" :key="index">
        <router-link class="nav-link" :to="{ name: item.name }">{{
          item.title
        }}</router-link>
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
  }
}
</script>
