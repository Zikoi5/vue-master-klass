<template>
  <div class="default__wrapper login__page">
    <pre>{{ form }}</pre>
    <form class="login__form" @submit.prevent="login">
      <div class="form-group">
        <label for="exampleInputEmail1">Elektron pochta manzili</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="E-Mail kiriting"
          v-model="form.email"
          required
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Parol</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Parol kiriting"
          v-model="form.password"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Kirish</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      localStorage.setItem("token", "bu_token")

      this.$router.replace({
        name: "home"
      })
    }
  }
}
</script>
