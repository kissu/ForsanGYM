<template>
<div id="deleteserviceCom">

  <CollapseComponent btns-class="btn btn-danger" head-btn-text="Delete A Service" foot-btn-text="Delete" CollapseName="DeleteService">
    <div class="form-group">
      <label for="ServiceSelect">Select The Service</label>
      <select class="form-control" id="ServiceSelect">
        <option>Service 1</option>
        <option>Service 2</option>
        <option>Service 3</option>
        <option>Service 4</option>
        <option>Service 5</option>
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
  methods:{
    DeleteService: function (){
      // Delete service from all databases
    }
  }
}
</script>

<style scoped>

</style>
