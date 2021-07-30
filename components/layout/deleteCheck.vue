<template>
  <div id="deleteModal">
    <div :id="'deleteCheckPage' + itemId">
      <div class="modal fade" :id="'DeleteCheckModal'+itemId" tabindex="-1"  data-backdrop="static" data-keyboard="false" :aria-labelledby="'DeleteCheckModalLabel'+itemId" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" :id="'DeleteCheckModalLabel'+itemId">{{HeaderMsg}}</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-danger" @click="deleteItem">Delete</button>
            </div>
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
    HeaderMsg:{required:true},
    itemId:{required: true},
    delete_url: {required: true},
    commitAction: {required: true},
  },
  methods: {
    deleteItem: function () {
      this.$axios.$delete(this.delete_url.replace(':id',this.itemId)).then(res => {
        // delete this item from the store
        this.$store.commit(this.commitAction,this.itemId);

        $(`#DeleteCheckModal${this.itemId}`).modal('hide')
      }).catch( err => {
        this.$swal.fire({
          icon: 'error',
          title: "Deleting Operation FAILED",
          text: err.response.data.message
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
