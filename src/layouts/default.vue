<template>
  <div class="default__wrapper">
    <navbar />

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue"
export default {
  components: {
    navbar
  }
}
</script>
