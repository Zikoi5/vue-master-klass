<template>
  <div class="index__page">
    <pre>{{ usersFields }}</pre>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex"

export default {
  mounted() {
    // this.$store.dispatch("users/fetchUsers").then(res => {
    //   console.log("Done", res)
    // })

    this.customFetchUsersMethod().then(res => {
      console.log("res", res)
      this.SET_USERS_LIST(res)
    })
  },

  computed: {
    // usersListFromState() {
    //   return this.$store.state.users.usersList || []
    // },
    ...mapState({
      usersFields: state => state.users.usersFields || {}
    })
  },

  methods: {
    // ...mapActions("users", ["fetchUsers"]),
    ...mapActions("users", {
      customFetchUsersMethod: "fetchUsers"
    }),
    ...mapMutations("users", ["SET_USERS_LIST"])
  }
}
</script>
