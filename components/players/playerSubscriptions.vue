<template>
  <div id="subscriptionsHistory">

    <div class="tile">
      <div class="tile-title-w-btn">
        <h3 class="mdi mdi-table-clock"> Subscriptions History </h3>
      </div>

      <div class="tile-body">
        <table class="table table-striped ">
          <thead>
          <tr>
            <th>#</th>
            <th>Plan</th>
            <th>Price</th>
            <th>Begin Date</th>
            <th>End Date</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="(subscription, index) in playerSubscriptions" :key="subscription.id">
            <td>{{ index + 1 }}</td>
            <td v-if="subscription.plan">{{ subscription.plan.name }}</td>
            <td v-else>Deleted Plan</td>
            <td>{{ subscription.payedMoney }}</td>
            <td>{{ subscription.beginDate }}</td>
            <td>{{ subscription.endDate }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <paging per-page="10" :count="$store.state.playerSubscriptions.count"  v-on:getDataAtPage="loadDataOfPage" />
    </div>

  </div>
</template>

<script>
import Paging from "../paging";
export default {
  name: "playerSubscriptions.vue",
  components: {Paging},
  props:{
    playerId:{
      required : true
    }
  },
  methods:{
    loadDataOfPage:function (page){
      this.$axios.$get('subscription/' + this.playerId + '?limit=10&page='+page).then(res=>{
        this.$store.commit('setPlayerSubscriptions', res)
      })
    },
  },
  computed: {
    playerSubscriptions: function () {
      return this.$store.state.playerSubscriptions.items
    },
  }
}
</script>

<style scoped>

</style>
