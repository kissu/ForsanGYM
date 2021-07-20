<template>
  <div id="plan">
    <page-title title="Plans" icon="fa fa-bar-chart"
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
            <tbody v-if="$store.state.plans.length && plan.isActivated">
            <tr v-for="(plan) in $store.state.plans" :key="plan.id">
              <td>{{ plan.id }}</td>
              <td>{{ plan.name }}</td>
              <td>{{ plan.description }}</td>
              <td>{{ plan.price }}</td>
              <td>
                <button class="btn btn-danger mr-2" type="button"
                        @click="deletePlan(plan)" data-toggle="modal"
                        :data-target="'#DeleteCheckModal'+ClickedPlan.id">Delete
                </button>

                <!--TODO ask about Edit button in plans -->
                <!--                <button class="btn btn-warning " type="button">Edit</button>-->
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div v-if="ClickedPlan.id" id="deleteSection">
      <DeleteCheck :action-name="'deletePlan'" :header-msg="'Are You Sure You Want to Delete This Plan ?'" :item-id="ClickedPlan.id"
                   delete_url="/plans/:id">
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
      console.log(`Deleting ${plan.name} plan from Database `)
      this.ClickedPlan = plan
      // this.deleteArr[id] = true
      // console.log(this.deleteArr)
    }
  }
};
</script>

<style>
</style>
