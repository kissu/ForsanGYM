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
              <th v-if="$auth.user.role == 'SuperAdmin'" style="width:30%">Options</th>
            </tr>
            </thead>
            <tbody v-if="$store.state.plans.length">
            <tr v-for="(plan) in activatedPlans" :key="plan.id">
              <td>{{ plan.id }}</td>
              <td>{{ plan.name }}</td>
              <td>{{ plan.description }}</td>
              <td>{{ plan.price }}</td>
              <td >
                <button class="btn btn-danger mr-2" type="button"
                        @click="deletePlan(plan)"
                        v-if="$auth.user.role == 'SuperAdmin'"
                >Delete
                </button>

                <button class="btn btn-info mr-2" type="button"
                        @click="deActivatePlan(plan)"
                        v-if="$auth.user.role == 'SuperAdmin'"
                >De-activate
                </button>

                <button class="btn btn-warning mr-2" type="button"
                      @click="ClickedPlan = plan" data-toggle="modal"
                        :data-target="`#editPlan${plan.id}Modal`"
                >Edit</button>

                <!--TODO  -->
                <!--                <button class="btn btn-warning " type="button">Edit</button>-->
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="row" v-if="$auth.user.role== 'SuperAdmin'">
      <div class="col-md-12">
        <div class="tile">
          <h3 class="tile-title">Deactivated Plans</h3>
          <table class="table table-striped">
            <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th style="width:30%">Options</th>
            </tr>
            </thead>
            <tbody v-if="$store.state.plans.length">
            <tr v-for="(plan) in deactivatedPlans" :key="plan.id">
              <td>{{ plan.id }}</td>
              <td>{{ plan.name }}</td>
              <td>{{ plan.description }}</td>
              <td>{{ plan.price }}</td>
              <td v-if="$auth.user.role == 'SuperAdmin'">
                <button class="btn btn-danger mr-2" type="button"
                        @click="deletePlan(plan)"
                        >Delete
                </button>
                <button class="btn btn-info mr-2" type="button"
                        @click="activatePlan(plan)">activate
                </button>
                <button class="btn btn-warning mr-2" type="button"
                        @click="ClickedPlan = plan" data-toggle="modal"
                        :data-target="`#editPlan${plan.id}Modal`"
                >Edit</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div v-if="ClickedPlan">
      <edit-plan :plan-data="Object.assign({},ClickedPlan)"/>
    </div>

  </div>
</template>

<script>
import PageTitle from "../../components/layout/pageTitle";
import Default from "../../layouts/default";
import DeleteCheck from "../../components/layout/deleteCheck";
import EditPlan from "../../components/plans/editPlan";

export default {
  components: {EditPlan, DeleteCheck, Default, PageTitle},
  async asyncData({$axios, store}) {
    try {
      const plans = await $axios.$get('plan/')
      store.commit('setPlans',plans)

    } catch (e) {
      console.log(e);
    }
  },
  data() {
    return {
      ClickedPlan: {}
    }
  },
  methods: {
    deletePlan: function (plan) {
      this.$swal.fire({
        title:`Are you sure ypu want to delete ${plan.name} plan`,
        icon:'question',
        showCancelButton:true,
        cancelButtonText:"No",
        confirmButtonText:"yes"
      }).then(res=>{
        if(res.isConfirmed){
          this.$axios.$delete('plan/delete/'+plan.id).then(()=>{
            this.$store.commit('deletePlan', plan.id)
            this.$swal.fire({title:"plan deleted successfully", icon:"success"})
          }).catch(err=>{
            this.$swal.fire({title:"error while deleting the plan", icon:"error", text:err.response.data.message})
            console.log("error in deleting a plan : ")
            console.log(err)
            return false
          })
        }
      })
    },
    activatePlan: async function (plan){
      if(this.$auth.user.role =='SuperAdmin'){
        try {
          await this.$axios.$get(`plan/activate/${plan.id}`)
          await this.$store.commit('activatePlan', plan)
        } catch (err) {
          this.$swal.fire({
            icon: 'error',
            title: "activating Operation FAILED",
            text: "check the log for more info"
          })
          console.log(err)
        }
      }
    },
    deActivatePlan: async function (plan){
      if(this.$auth.user.role =='SuperAdmin'){
        try {
          await this.$axios.$get(`plan/de-activate/${plan.id}`)
          await this.$store.commit('deActivatePlan', plan)
        } catch (err) {
          this.$swal.fire({
            icon: 'error',
            title: "activating Operation FAILED",
            text: "check the log for more info"
          })
          console.log(err)
        }
      }
    },
  },
  computed: {
    activatedPlans: function () {
      return this.$store.state.plans.filter(plan => plan.isActivated)
    },
    deactivatedPlans: function (){
      return this.$store.state.plans.filter(plan => !plan.isActivated)
    }
  },
};
</script>

<style>
</style>
