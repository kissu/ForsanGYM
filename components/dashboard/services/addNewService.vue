<template>

<div id="addNewService-Component">
<CollapseComponent head-btn-text="Add A Service" foot-btn-text="Add" btns-class="btn btn-success" CollapseName="AddService">

  <form class="form-horizontal">
    <div class="form-group row">
      <label class="control-label col-md-4">Name</label>
      <div class="col-md-8">
        <input class="form-control" type="text" placeholder="Service Name">
      </div>
    </div>

    <div class="form-group row">
      <label class="control-label col-md-4">Price</label>
      <div class="col-md-8">
        <input class="form-control" type="text" placeholder="Service Price">
      </div>
    </div>

  </form>

</CollapseComponent>

</div>

</template>

<script>
import CollapseComponent from "../Collapse";
export default {
  name: "addNewService",
  components: {CollapseComponent}
}
</script>

<style scoped>

</style>
