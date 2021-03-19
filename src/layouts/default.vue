<template>
  <div class="container defaul__wrapper">
    Bu default layout
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">
          Index
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about' }">
          About
        </router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>