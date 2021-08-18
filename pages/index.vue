<template>
  <div id="HomePage">
    <page-title icon="mdi mdi-home" title='Dashboard'/>
    <div class="row">
      <div class="col-md-6 col-lg-3">
        <!-- TODO: Make this a reusable component @Ahmedgamal77823 -->
        <div class="widget-small primary coloured-icon">
          <i class="icon mdi mdi-account"></i>
          <div class="info">
            <h4>Players</h4>
            <p><b>{{ numberOfPlayers }}</b></p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="widget-small primary coloured-icon">
          <i class="icon mdi mdi-account"></i>
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
              <td>{{ subscriptionIncome.payedMoney }}</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="tile">
          <h3 class="tile-title">Summary of other services</h3>
          <services-summary-table/>
        </div>
        <div class="tile">
          <h3 class="tile-title">Outcome Table</h3>
          <table style="font-size:17px" class="table table-striped">
            <thead>
            <tr>
              <th>#</th>
              <th>Outcome Description</th>
              <th>Price</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(outcome, index) in outcomes" :key="outcome.id">
              <td>{{index + 1 }}</td>
              <td>{{ outcome.description }}</td>
              <td>{{outcome.price}}</td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>

      <div class="col-md-6">

        <div class="py-1">
          <add-outcome/>
        </div>

        <div class="py-1">
          <delete-outcome/>
        </div>

        <br>
        <div class="py-1">
          <purchaseService/>
        </div>
        <div class="py-1">
          <AddNewService/>
        </div>
        <div class='py-1' v-if="$auth.user.role == 'SuperAdmin'">
          <DeleteService/>
        </div>
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
import AddOutcome from "../components/dashboard/outcome/addOutcome";
import DeleteOutcome from "../components/dashboard/outcome/deleteOutcome";

export default {
  components: {
    DeleteOutcome,
    AddOutcome,
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
        console.log('Load ActivityPlayerSubscriptionsIncome')
        const res = await $axios.$get('activityPlayerSubscription/today')
        await store.commit('setActivityPlayerSubscriptionsIncome', res)
      } catch (err) {
        console.log('error on today\'s Activity player subscriptions income set (dashboard) :')
        console.log(err)
      }
    }

    if(store.state.players.number===0){
      try{
        const playersNumber = await $axios.$get('player/number')
        store.commit('setPlayersNumber', playersNumber)
      }catch (err){
        console.log('error on players number set (dashboard) :')
        console.log(err)
      }
    }

    if (!store.state.subscriptionsIncome.isLoaded) {
      // the true case of this if means that subscriptionsIncome is not loaded
      try {
        console.log('Load subscriptionsIncome')
        const res = await $axios.$get('subscription/today')
        await store.commit('setSubscriptionsIncome', res)
      } catch (err) {
        console.log('error on today\'s subscriptions income set (dashboard) :')
        console.log(err)
      }
    }

    if(!store.state.services.isLoaded){// the true case of this if means that services is not loaded
      try{
        console.log('Load services')
        const res = await $axios.$get('service/')
        await store.commit('SetServices', res)
      }catch (err){
        console.log('error on service load (dashbaord/index) :')
        console.log(err)
      }
    }

    if (!store.state.servicesIncome.isLoaded) { // the true case of this if means that serviceIncome is not loaded
      try {
        console.log('Load servicesIncome')
        const res = await $axios.$get('serviceIncome/')
        await store.commit('setServicesIncome', res)
      } catch (err) {
        console.log('error on today\'s services income set (dashboard) :')
        console.log(err)
      }
    }
    if(!store.state.outcome.isLoaded){
      try{
        console.log("load outcomes")
        const res = await $axios.$get('outCome/')
        await store.commit('setOutcome', res)
      }catch (err){
        console.log('error on today\'s services income set (dashboard) :')
        console.log(err)
      }
    }

  },

  computed: {
    computedSubscriptionsIncome: function () {
      return this.$store.state.subscriptionsIncome.items
    },
    totalDailyIncome: function () {
      return this.$store.state.totalIncome
    },
    numberOfPlayers: function (){
      return this.$store.state.players.number
    },
    outcomes: function (){
      return this.$store.state.outcome.items
    }

  }
};
</script>
