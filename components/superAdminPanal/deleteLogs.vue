<template>
<div id="deleteLogsComponent">

  <div class="modal fade" id="deleteLogsModal" tabindex="-1" aria-labelledby="deleteLogsModalLabel"
       aria-hidden="true" >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteLogsModalLabel" style="color: #e00909">Delete Logs</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group row">
            <label class="control-label col-md-2">From</label>
            <div class="col-md-8">
              <input v-bind:value="pickedDate.begin"
                     @input="pickedDate.begin = $event.target.value" class="form-control col-md-8"
                     type="date">
            </div>
          </div>

          <div class="form-group row">
            <label class="control-label col-md-2">To</label>
            <div class="col-md-8">
              <input v-bind:value="pickedDate.end"
                     @input="pickedDate.end = $event.target.value" class="form-control col-md-8"
                     type="date">
            </div>
          </div>

        </div>
        <div class="modal-footer">
          <div class="btn-group">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="resetForm">Close</button>
            <button type="button" class="btn btn-warning" v-on:click="deleteSelectedLogs">Delete Selected</button>
            <button type="button" class="btn btn-danger" v-on:click="deleteAllLogs">Delete All Logs</button>

          </div>
        </div>
      </div>
    </div>
  </div>


</div>
</template>

<script>
export default {
  name: "deleteLogs",
  data(){
    return{
      pickedDate:{}
    }
  },
  methods:{
    resetForm:function (){
      this.pickedDate = {}
    },
    isFormOk:function (){
      if(!this.pickedDate.begin){
        this.$swal.fire({
          title:"Error",
          text:"'From' Date CANNOT be empty, please choose a date.",
          icon:"error"
        })
        return false
      }
      if(!this.pickedDate.end){
        this.$swal.fire({
          title:"Error",
          text:"'To' Date CANNOT be empty, please choose a date.",
          icon:"error"
        })
        return false
      }
      return true
    },
    deleteAllLogs: function (){
      this.$swal.fire({
        title:"Warning",
        text:"You are about to delete ALL Logs, Are you sure about that ? ",
        icon:'question',
        showCancelButton:true,
      }).then(res=>{
        if(res.isConfirmed){
          this.$axios.$delete('log/deleteAll').then(()=>{
            this.$swal.fire({
              title:"All Logs Deleted successfully",
              icon:'success'
            })
            this.resetForm()
            $('#deleteLogsModal').modal('hide')
          }).catch(err=>{
            this.$swal.fire({
              title:"Error while Deleting logs",
              icon:"error"
            })
            console.log("error in delete logs ")
            console.log(err)
            $('#deleteLogsModal').modal('hide')
            return false
          })
        }
      })
    },
    deleteSelectedLogs: function (){
      if(this.isFormOk()){
        this.$swal.fire({
          title:"Warning",
          text:`Are you sure you want to delete All Logs From ${this.pickedDate.begin} To ${this.pickedDate.end}?`,
          icon:'question',
          showCancelButton:true,
        }).then(res=>{
          if(res.isConfirmed){
            this.$axios.$delete('log/deleteAll').then(()=>{
              this.$swal.fire({
                title:"Selected Logs Deleted successfully",
                icon:'success'
              })
              this.resetForm()
              $('#deleteLogsModal').modal('hide')
            }).catch(err=>{
              this.$swal.fire({
                title:"Error while Deleting logs",
                icon:"error"
              })
              console.log("error in delete logs ")
              console.log(err)
              $('#deleteLogsModal').modal('hide')
              return false
            })
          }
        })
      }

    }
  }
}
</script>

<style scoped>

</style>
