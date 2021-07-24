<template>
  <table style="font-size:17px"  class="table table-striped">
    <thead>
    <tr>
      <th>#</th>
      <th>Type of service</th>
      <th>Number of paid items</th>
      <th>Total income</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in $store.state.servicesIncome" :key="item.id">
      <td>{{item.id}}</td>
      <td>{{item.service.name}}</td>
      <td>{{item.soldItems}}</td>
      <td>{{item.service.price * item.soldItems}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "servicesSummary",
  
}
</script>

<style scoped>

</style>
