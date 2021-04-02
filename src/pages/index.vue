<template>
  <div class="index__page">
    <div>
      {{ $store.state.count }}
    </div>

    <button @click="$store.commit('SET_COUNT', $store.state.count + 1)">
      increment
    </button>

    <div>{{ appName }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    appName() {
      return process.env.VUE_APP_NAME
    }
  }
}
</script>
