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
    document.querySelector('body').classList.add('app','sidebar-mini')
  },
  created() {
    // get player w subs
    this.$axios.$get('players/getAll').then(res => {
      this.$store.commit('setPlayers',res)
    }).catch(err => {

    })

    // get plans
    this.$axios.$get('plans').then(res => {
      this.$store.commit('setPlans',res)
    }).catch(err => {

    })
    //Get Active Plans
    this.$axios.get('plans/AllActive').then(res=>{
      this.$store.commit('setActivePlans', res)
    }).catch(err=>{

    })
    // TODO
    // get services
    this.$axios.$get('services').then(res=>{
      this.$store.commit('SetServices', res)
    }).catch(err=>{
      console.log(err)
    })

    // get players w activities
    this.$axios.$get('activity-player').then(res => {
      this.$store.commit('setActivityPlayers', res)
    }).catch(err =>{

    })
    // get activities
    this.$axios.$get('activities/getAll').then(res => {
      this.$store.commit('SetActivities', res)
    }).catch(err => {

    })

  }
}
</script>

<style>

</style>
