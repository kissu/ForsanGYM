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
<!--      <paging per-page="10" :count="$store.state.playerSubscriptions.count"  v-on:getDataAtPage="loadDataOfPage" />-->
      <div class="row justify-content-center">
        <paginate
          :page-count="Math.ceil($store.state.playerSubscriptions.count/10)"
          :click-handler="loadDataOfPage"
          :container-class="'pagination'"
          :prev-class="'page-item'"
          :prev-link-class="'page-link'"
          :page-class="'page-item'"
          :page-link-class="'page-link'"
          :next-class="'page-item'"
          :next-link-class="'page-link'"
        ></paginate>
      </div>
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
