<template>
  <div>working fine</div>
</template>

<script>
export default {
  name: "login",
  layout: "empty",
  // mounted() {
  //   if (this.$auth.loggedIn)
  //     this.$router.push('/')
  // },
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
