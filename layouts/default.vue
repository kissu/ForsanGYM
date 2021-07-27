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
    this.$axios.$get('players/').then(res => {
      this.$store.commit('setPlayers',res)
    }).catch(err => {
      console.log('error on Players load (layout/Default) :')
      console.log(err)
    })

    // get plans
    this.$axios.$get('plans/').then(res => {
      this.$store.commit('setPlans',res)
    }).catch(err => {
      console.log('error on plans load (layout/Default) :')
      console.log(err)
    })
    // get services
    this.$axios.$get('services/').then(res=>{
      this.$store.commit('SetServices', res)
    }).catch(err=>{
      console.log('error on service load (layout/Default) :')
      console.log(err)
    })

    // get players w activities
    this.$axios.$get('activityPlayer/').then(res => {
      this.$store.commit('setActivityPlayers', res)
    }).catch(err =>{
      console.log('error on Activity Players load (layout/Default) :')
      console.log(err)
    })
    // get activities
    this.$axios.$get('activities/').then(res => {
      this.$store.commit('SetActivities', res)
    }).catch(err => {
      console.log('error on activities load (layout/Default) :')
      console.log(err)
    })
    // getServicesIncome
    this.$axios.$get('servicesIncome/').then(res => {
      this.$store.commit('setServicesIncome', res)
    }).catch(err =>{
      console.log('error on service income load (layout/Default) :')
      console.log(err)
    })

    // get plansIncome
    this.$axios.$get('plansIncome/').then(res=>{
      this.$store.commit('setPlansIncome', res)
    }).catch(err => {
      console.log('error on plan income load (layout/Default) :')
      console.log(err)
    })
  }
}
</script>

<style>

</style>
