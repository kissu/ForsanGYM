<template>
  <div id="app">
    <app-header />
    <app-sidebar />
    <main class="app-content">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import AppHeader from "../components/layout/appHeader";
import AppSidebar from "../components/layout/appSidebar";
export default {
  components: {AppSidebar, AppHeader},
  mounted() {
    this.$axios.$get('activity/').then(activities => {
      this.$store.commit('SetActivities', activities)
    })

    document.querySelector('body').classList.add('app','sidebar-mini')
  },
}
</script>

<style>

</style>
