<template>
<div id="deleteserviceCom">

  <CollapseComponent btns-class="btn btn-danger" head-btn-text="Delete Service" foot-btn-text="Delete" CollapseName="DeleteService">
    <div class="form-group">
      <label for="ServiceSelect">Select Service</label>
      <select class="form-control" id="ServiceSelect">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
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
