<template>
  <div id="HomePage">
    <page-title icon="fa fa-home" title='Dashboard'/>
    <div class="row">
      <div class="col-md-6 col-lg-3">
        <!-- TODO: Make this a reusable component @Ahmedgamal77823 -->
        <div class="widget-small primary coloured-icon">
          <i class="icon fa fa-users fa-3x"></i>
          <div class="info">
            <h4>Players</h4>
            <p><b>{{ $store.state.players.length }}</b></p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="widget-small primary coloured-icon">
          <i class="icon fa fa-usd fa-3x"></i>
          <div class="info">
            <h4>Income</h4>
            <p><b>{{ totalDailyIncome }}</b></p>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="tile">
          <h3 class="tile-title">Summary of today's subscriptions</h3>
          <table style="font-size:17px" class="table table-striped">
            <thead>
            <tr>
              <th>#</th>
              <th>Type of subscription</th>
              <th>Number of new Subscriptions</th>
              <th>Total income</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(subscriptionIncome, index) in computedSubscriptionsIncome" :key="subscriptionIncome.id">
              <td>{{ index + 1 }}</td>
              <td>{{ subscriptionIncome.plan.name }}</td>
              <td>{{ subscriptionIncome.numberOfSubscriptions }}</td>
              <td>{{ subscriptionIncome.payedMoney * subscriptionIncome.numberOfSubscriptions }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="col-md-6">
        <div class="tile">
          <h3 class="tile-title">Summary of other services</h3>
          <services-summary-table/>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 px-0">
        <purchaseService/>
      </div>
      <div class="col-md-4 px-0">
        <AddNewService/>
      </div>
      <div class="col-md-4 px-0">
        <DeleteService/>
      </div>
    </div>

  </div>
</template>

<script>
import ServicesSummaryTable from "../components/dashboard/servicesSummaryTable";
import PageTitle from "../components/layout/pageTitle";
import AddNewService from "../components/dashboard/services/addNewService";
import CollapseComponent from "../components/layout/Collapse";
import DeleteService from "../components/dashboard/services/DeleteService";
import PurchaseService from "../components/dashboard/services/purchaseService";

export default {
  components: {
    PurchaseService,
    DeleteService,
    CollapseComponent,
    AddNewService,
    PageTitle,
    ServicesSummaryTable
  },
  methods: {},
  async asyncData({store, $axios}) {

    if (!store.state.isActivityPlayerSubscriptionsIncomeLoaded) {
      // the true case of this if means that subscriptionsIncome is not loaded
      try {
        const res = await $axios.$get('activityPlayerSubscription/today')
        await store.commit('setActivityPlayerSubscriptionsIncome', res)
      } catch (err) {
        console.log('error on today\'s Activity player subscriptions income set (dashboard) :')
        console.log(err)
      }
    }

    if (store.state.subscriptionsIncome.length === 0) {
      // the true case of this if means that subscriptionsIncome is not loaded
      try {
        const res = await $axios.$get('subscription/today')
        await store.commit('setSubscriptionsIncome', res)
      } catch (err) {
        console.log('error on today\'s subscriptions income set (dashboard) :')
        console.log(err)
      }
    }

    if(store.state.services.length === 0){// the true case of this if means that services is not loaded
      try{
        const res = await $axios.$get('service/')
        await store.commit('SetServices', res)
      }catch (err){
        console.log('error on service load (dashbaord/index) :')
        console.log(err)
      }
    }

    if (store.state.servicesIncome.length === 0) { // the true case of this if means that serviceIncome is not loaded
      try {
        const res = await $axios.$get('serviceIncome/')
        await store.commit('setServicesIncome', res)
      } catch (err) {
        console.log('error on today\'s services income set (dashboard) :')
        console.log(err)
      }
    }

  },

  computed: {
    computedSubscriptionsIncome: function () {
      return this.$store.state.subscriptionsIncome
    },
    totalDailyIncome: function () {
      return this.$store.state.totalIncome
    }

  }
};
</script>
