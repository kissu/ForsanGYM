<template>
<div id="login-page">
  <section class="material-half-bg">
    <div class="cover"></div>
  </section>
  <section class="login-content">
    <div class="logo">
      <h1>Forsan GYM</h1>
    </div>
    <div class="login-box">
      <form @submit.prevent="login" class="login-form">
        <h3 class="login-head"><i class="mdi mdi-account"></i>SIGN IN</h3>
        <div class="form-group">
          <label class="control-label">USERNAME</label>
          <input v-model="user.username" class="form-control" type="text" placeholder="Username" autofocus>
        </div>
        <div class="form-group">
          <label class="control-label">PASSWORD</label>
          <input v-model="user.password" class="form-control" type="password" placeholder="Password">
        </div>
        <div class="form-group">
          <div class="utility">
          </div>
        </div>
        <div class="form-group btn-container">
          <button type="submit" class="btn btn-primary btn-block"><i class="mdi mdi-login mr-1"></i>SIGN IN</button>
        </div>
      </form>
    </div>
  </section>

</div>
</template>

<script>
export default {
  name: "login",
  layout: "empty",
  mounted() {
    if (this.$auth.loggedIn)
      this.$router.push('/')
  },
  head() {
    return {
      title: "Login"
    }
  },
  data() {
    return {
      user: {
        username: null,
        password: null,
      }
    }
  },
  auth: false,
  methods: {
    login: function () {
      this.$auth.loginWith('local', {data: this.user}).then(() => {
        this.$router.push('/')
      }).catch((e) => {
        console.log(e)
        this.$swal.fire("Invalid Credentials","","error")
      })
    }
  }
}
</script>

<style scoped>

</style>
