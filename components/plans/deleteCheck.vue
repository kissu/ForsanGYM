<template>
  <div id="deleteCheckPage">
    <div class="modal fade" id="DeleteCheckModal" tabindex="-1"  data-backdrop="static" data-keyboard="false" aria-labelledby="DeleteCheckModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="DeleteCheckModalLabel">Are You Sure You Want to Delete This plan ? </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p><b>Name : </b>{{plan.name}}</p>
            <p><b>Description : </b>{{plan.description}}</p>
            <p><b>Price : </b>{{plan.price}}</p>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger" @click="$('#DeleteCheckModal').modal('dispose')">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "deleteCheck",
  props:{
    plan:{}
  }
}
</script>

<style scoped>

</style>
