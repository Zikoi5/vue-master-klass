function init() {
  console.log("Modul ishga tushganda chaqiriladi")
}

// eslint-disable-next-line no-unused-vars
function fetchUsers({ commit }, params) {
  return this.$axios
    .get("/users", {
      params
    })
    .then(res => {
      // if (res && res.data) {
      // commit("SET_USERS_LIST", res.data)
      // }
      return (res && res.data) || {}
    })
}

export default {
  fetchUsers,
  init
}
