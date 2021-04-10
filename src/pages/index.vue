<template>
  <div class="index__page">
    1
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("users/fetchUsers").then(res => {
      console.log("Done", res)
    })
  }
}
</script>
