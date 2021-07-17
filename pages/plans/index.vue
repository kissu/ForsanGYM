<template>
  <div id="plan">
    <page-title title="Plans" icon="fa fa-bar-chart"
    :addBtn="{to:{name:'newPlan'}, text:'Add New Plan'}"/>
    <div class="row">
      <div class="col-md-12">
        <div class="tile">
          <h3 class="tile-title">Plans</h3>
          <table class="table table-striped" >
            <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Options</th>
            </tr>
            </thead>
            <tbody >
            <tr v-for="(plan, index) in $store.state.plans" :key="index" v-if="plan.isActivated">
              <td>{{ plan.id }}</td>
              <td>{{ plan.name }}</td>
              <td>{{ plan.description}}</td>
              <td>{{ plan.price }}</td>
              <td>
                <button class="btn btn-danger mr-2" type="button" @click="deletePlan(plan.id)" data-toggle="modal"
                        data-target="#DeleteCheckModal" :key="index">Delete</button>
                <DeleteCheck :plan="plan"/>

                <!--TODO ask about Edit button in plans -->
<!--                <button class="btn btn-warning " type="button">Edit</button>-->
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../components/layout/pageTitle";
import Default from "../../layouts/default";
import DeleteCheck from "../../components/plans/deleteCheck";
export default {
  async asyncData ({ $axios,store }) {
    const req = await $axios.$get('/plans')
    store.commit("setPlans",req)
  },
  mounted() {

  },
  components: {DeleteCheck, Default, PageTitle},
  data() {
    return {
    }
  },
  methods:{
    deletePlan:function (id){
      console.log(`Deleteing plan ${id} from Database `)
      // this.deleteArr[id] = true
      // console.log(this.deleteArr)
    }
  }
};
</script>

<style>
</style>
