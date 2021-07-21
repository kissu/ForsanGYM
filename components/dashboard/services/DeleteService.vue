<template>
<div id="deleteserviceCom">

  <CollapseComponent btns-class="btn btn-danger" head-btn-text="Delete A Service" foot-btn-text="Delete" CollapseName="DeleteService">
    <div class="form-group">
      <label for="ServiceSelect">Select The Service</label>
      <select class="form-control" id="ServiceSelect" v-model="SelectedService">
        <option value="" disabled>Choose A Service</option>
        <option v-for="service in $store.state.services" :value="service.id" >{{service.name}} -- {{service.price}}</option>
      </select>
    </div>
    <p >Warning : Delete Operation is <b style="color: #96000e">IRREVERSIBLE</b>.</p>

    <div class="tile-footer">
      <div class="row">
        <div class="col-md-8 ">
          <button class="btn btn-danger" type="button" data-toggle="collapse" data-target="#DeleteServicecollapse" v-on:click="DeleteService">
            <i class="fa fa-fw fa-lg fa-check-circle"></i>
            Delete</button>
        </div>
      </div>
    </div>
  </CollapseComponent>

</div>
</template>

<script>
import CollapseComponent from "../../layout/Collapse";
export default {
  name: "DeleteService",
  components: {CollapseComponent},
  data(){
    return{
      SelectedService:null,
    }
  },
  methods:{
    DeleteService: function (){
      // Delete service from all database
      this.$axios.$delete('services/delete/:id'.replace(':id', this.SelectedService)).then(res=>{
        this.$store.commit('DeleteService', this.SelectedService)
        this.SelectedService=null
      }).catch(err=>{
        alert("An error occurred while deleting the service .")
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
