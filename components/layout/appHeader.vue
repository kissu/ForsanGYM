<template>
  <header class="app-header">
    <router-link class="app-header__logo" to="/" style="font-family:sans-serif">Forsan GYM</router-link>
    <!-- Sidebar toggle button-->
    <router-link class="app-sidebar__toggle mdi mdi-dots-horizontal-circle mdi-24px" to="#" data-toggle="sidebar" aria-label="Hide Sidebar"></router-link>
    <!-- Navbar Right Menu-->
    <ul class="app-nav">

      <!-- User Menu-->
      <li class="dropdown">
        <router-link class="app-nav__item" to="/" data-toggle="dropdown" aria-label="Open Profile Menu"><i
          class="mdi mdi-account"></i></router-link>
        <ul class="dropdown-menu settings-menu dropdown-menu-right">
          <li><a @click.prevent="logout" class="dropdown-item" href="page-login.html"><i class="mdi mdi-logout"></i> Logout</a></li>
        </ul>
      </li>
    </ul>
  </header>

</template>

<script>
export default {
  name: "appHeader",
  methods: {
    logout: function () {
      this.$auth.logout();
    }
  }
}
</script>

<style scoped>

</style>
