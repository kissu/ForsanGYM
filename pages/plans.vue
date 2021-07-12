<template>
  <div id="plan">
    <page-title title="Plans" icon="fa fa-bar-chart" />
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
            </tr>
            </thead>
            <tbody >
            <tr v-for="(plan, index) in $store.state.plans" :key="index" >
              <td>{{ plan.id }}</td>
              <td>{{ plan.name }}</td>
              <td>{{ plan.description}}</td>
              <td>{{ plan.price }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="row">
      <div id="col-md-3">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button class="btn btn-success" type="button">Add Plan</button>
        &nbsp;
        <button class="btn btn-warning" type="button">Edit Plans</button>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/layout/pageTitle";
export default {
  async asyncData ({ $axios,store }) {
    const req = await $axios.$get('/plans')
    store.commit("setPlans",req)
  },
  mounted() {

  },
  components: {PageTitle},
  data() {},
};
</script>

<style>
</style>
