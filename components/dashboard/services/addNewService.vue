<template>

<div id="addNewService-Component">
<CollapseComponent head-btn-text="Add A Service" foot-btn-text="Add" btns-class="btn btn-success" CollapseName="AddService">

  <form class="form-horizontal">
    <div class="form-group row">
      <label class="control-label col-md-4">Name</label>
      <div class="col-md-8">
        <input v-model="service.name" class="form-control" type="text" placeholder="Service Name">
      </div>
    </div>

    <div class="form-group row">
      <label class="control-label col-md-4">Price</label>
      <div class="col-md-8">
        <input v-model="service.price" class="form-control" type="text" placeholder="Service Price">
      </div>
    </div>
  </form>
  <div class="tile-footer">
    <div class="row">
      <div class="col-md-8 ">
        <button class="btn btn-success" type="button" data-toggle="collapse" data-target="#AddServicecollapse" v-on:click="AddService">
          <i class="fa fa-fw fa-lg fa-check-circle"></i>
          Add</button>
      </div>
    </div>
  </div>

</CollapseComponent>

</div>

</template>

<script>
import CollapseComponent from "../../layout/Collapse";
export default {
  name: "addNewService",
  components: {CollapseComponent},
  data(){
    return {
      service:{
        name:"",
        price:0
      }
    }
  },
  methods:{
    AddService:function (){
      // add the new service to the database (store and backend )
      this.service.price = Number(this.service.price)
      //Add to database it self
      this.$axios.post('/services/new', this.service).then(res=>{
        // Add to store datatabse
        this.$store.commit('AddService', res.data.service)

        //resetting the valuse of the Selected Object
        this.service.name=""
        this.service.price=0
      }).catch(err=>{
        alert("There was an error while adding the service.")
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
