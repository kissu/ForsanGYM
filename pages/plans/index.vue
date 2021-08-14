<template>
  <div id="plan">
    <page-title title="Plans" icon="mdi mdi-chart-bar"
                :addBtn="{to:{name:'newPlan'}, text:'Add New Plan'}"/>
    <div class="row">
      <div class="col-md-12">
        <div class="tile">
          <h3 class="tile-title">Plans</h3>
          <table class="table table-striped">
            <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Options</th>
            </tr>
            </thead>
            <tbody v-if="$store.state.plans.length">
            <tr v-for="(plan) in activatedPlans" :key="plan.id">
              <td>{{ plan.id }}</td>
              <td>{{ plan.name }}</td>
              <td>{{ plan.description }}</td>
              <td>{{ plan.price }}</td>
              <td>
                <button class="btn btn-danger mr-2" type="button"
                        @click="deletePlan(plan)" data-toggle="modal"
                        :data-target="'#DeleteCheckModal'+ClickedPlan.id">Delete
                </button>

                <!--TODO  -->
                <!--                <button class="btn btn-warning " type="button">Edit</button>-->
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div v-if="ClickedPlan.id" id="deleteSection">
      <DeleteCheck :header-msg="'Are You Sure You Want to Delete This Plan ?'" :item-id="ClickedPlan.id"
                   delete_url="/plan/delete/:id" commit-action="deletePlan">
        <p><b>Name : </b>{{ ClickedPlan.name }}</p>
        <p><b>Description : </b>{{ ClickedPlan.description }}</p>
        <p><b>Price : </b>{{ ClickedPlan.price }}</p>
      </DeleteCheck>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../components/layout/pageTitle";
import Default from "../../layouts/default";
import DeleteCheck from "../../components/layout/deleteCheck";

export default {
  components: {DeleteCheck, Default, PageTitle},
  data() {
    return {
      ClickedPlan: {}
    }
  },
  methods: {
    deletePlan: function (plan) {
      this.ClickedPlan = plan
    }
  },
  computed: {
    activatedPlans: function () {
      return this.$store.state.plans.filter(plan => plan.isActivated)
    },
  },
};
</script>

<style>
</style>
