<template>
<div id="weightTablePage">

  <div class="tile">
    <div class="tile-title-w-btn">
      <h2 data-toggle="dropdown" class="title">
        <span class="mdi mdi-weight-kilogram"></span>
        Weight Table
      </h2>
        <button class="btn btn-outline-primary "><i class="mdi mdi-plus-box"></i> Add Entry</button>
    </div>
    <div class="col tile-body">
      <table class=" table table-striped ">
        <thead>
        <tr>
          <th class="col-md-1">#</th>
          <th class="col-md-3">Date</th>
          <th class="col-md-3">Weight</th>
          <th class="col-md-5">Options</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(weight, index) in player.weights" :key="index">
          <td>{{index+1}}</td>
          <td>{{weight.date}}</td>
          <td>{{weight.weight}}</td>
          <td>
            <div class="btn-group ">
              <button class="btn btn-outline-danger mx-2" v-on:click="deleteWeight(weight)"><i class="mdi mdi-minus-box"></i> Delete</button>
              <button class="btn btn-outline-warning"><i class="mdi mdi-pencil-box" v-on:click="editWeight(weight)"></i> Edit</button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "weightTable",
  props:{
    player:{
      required:true
    }
  },
  methods:{
    deleteWeight: function (playerWeight){
      if(this.player.weights.length === 1){
        this.$swal.fire({
          icon:"warning",
          title:"Player Must Have at least 1 Entry",
        })
        return
      }
      this.$axios.$delete('playerWeight/delete/'+playerWeight.id).then(()=>{
        this.$store.commit('deletePlayerWeight', playerWeight)
      }).catch(err=>{
        this.$swal.fire({
          icon:"error",
          title:"An Error Occurred",
          text: err.response.data.message
        })
      })
    },
    editWeight: function (playerWeight){

    },
  }
}
</script>

<style scoped>

</style>
