<template>
  <div>
      <h1> {{activityPlayer}} </h1>
  </div>
</template>

<script>
export default {
data(){
    return{
        activityPlayer: null,
    }
},
created(){
    const activityPlayerId = this.$route.params.id
    this.activityPlayer = this.$store.state.activityPlayerSubscriptions.filter( actPlayer => {
        return actPlayer.activityPlayer.id === activityPlayerId
    })
    
}
}
</script>

<style>

</style>