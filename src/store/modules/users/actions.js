function init() {
  console.log("Modul ishga tushganda chaqiriladi")
}

function fetchUsers({ commit }, params) {
  return this.$axios
    .get("/users", {
      params
    })
    .then(res => {
      if (res && res.data) {
        commit("SET_USERS_LIST", res.data)
      }

      return (res && res.data) || {}
    })
}

export default {
  fetchUsers,
  init
}
