<template>
  <div id="serviceSummaryTablepage">
    <table style="font-size:17px" class="table table-striped">
      <thead>
      <tr>
        <th>#</th>
        <th>Type of service</th>
        <th>Number of paid items</th>
        <th>Total income</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in servicesIncome" :key="item.id">
        <td>{{ index + 1 }}</td>
        <td>{{ item.serviceName }}</td>
        <td>{{ item.soldItems }}</td>
        <td>{{ item.payedMoney * item.soldItems }}</td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: "servicesSummary",
  computed:{
    servicesIncome: function (){
      return this.$store.state.servicesIncome.items
    }
  }

}
</script>

<style scoped>

</style>
