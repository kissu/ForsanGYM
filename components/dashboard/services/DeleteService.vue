<template>
<div id="deleteserviceCom">

  <CollapseComponent btns-class="btn btn-danger" head-btn-text="Delete Service" foot-btn-text="Delete" CollapseName="DeleteService">
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
  </CollapseComponent>

</div>
</template>

<script>
import CollapseComponent from "../Collapse";
export default {
  name: "DeleteService",
  components: {CollapseComponent}
}
</script>

<style scoped>

</style>
