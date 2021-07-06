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
            <tr v-for="(plan, index) in plans" :key="index" >
              <td>{{ index+1 }}</td>
              <td>{{ plan.name }}</td>
              <td>{{ plan.description}}</td>
              <td>{{ plan.price}}</td>
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
  components: {PageTitle},
  data(){
    return {
      plans:[
        {name: "Daily", description: "1 Day of subscription.", price:40},
        {name: "Monthly (Groups)", description: "1 month of subscription with Groups.", price:300},
        {name: "Monthly", description: "1 month of subscription .", price:400},
        {name: "Quarterly", description: "3 months of subscription.", price:700},
        {name: "Half year", description: "6 months of subscription.", price:1250},
        {name: "Yearly", description: "12 months of subscription.", price:2200},

      ]
    }
  },
};
</script>

<style>
</style>
