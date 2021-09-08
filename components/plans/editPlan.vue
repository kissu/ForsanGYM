<template>
<div id="editPlanPage" >
  <div class="modal fade" :id="`editPlan${planData.id}Modal`" tabindex="-1" :aria-labelledby="`editAdmin${planData.id}ModalLabel`"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="`editAdmin${planData.id}ModalLabel`">Edit {{ planData.name }} plan</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group row">
            <label class="control-label col-md-3">Plan Name</label>
            <div class="col-md-8">
              <input v-bind:value="planData.name"
                     @input="planData.name = $event.target.value" class="form-control col-md-8"
                     type="text" placeholder="Enter Admin Name" >
            </div>
          </div>

          <div class="form-group row">
            <label class="control-label col-md-3">Description</label>
            <div class="col-md-8">
              <textarea v-bind:value="planData.description"
                     @input="planData.description = $event.target.value" class="form-control col-md-8"
                        type="text" placeholder="Describe the plan"></textarea>
            </div>
          </div>

          <div class="form-group row">
            <label class="control-label col-md-3">price</label>
            <div class="col-md-8">
              <input v-bind:value="planData.price"
                     @input="planData.price = $event.target.value" class="form-control col-md-8"
                     type="number" placeholder="Plan Price">
            </div>
          </div>

          <div class="form-group row">
            <label class="control-label col-md-3">Freeze Days</label>
            <div class="col-md-8">
              <input v-bind:value="planData.freezeDays"
                     @input="planData.freezeDays = $event.target.value" class="form-control col-md-8"
                     type="text" placeholder="Freeze Day...">
            </div>
          </div>

          <div class="form-group row">
            <label class="control-label col-md-3">invitations</label>
            <div class="col-md-8">
              <input v-bind:value="planData.invites"
                     @input="planData.invites = $event.target.value" class="form-control col-md-8"
                     type="text" placeholder="Invitations...">
            </div>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-warning"  data-dismiss="modal" @click="editPlan" >Submit</button>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "editPlan",
  props:{
    planData:{
      required:true
    }
  },
  data(){
    return{

    }
  },
  methods:{
    editPlan:function (){
      this.$store.commit("editPlan", this.planData)
      this.$axios.$post("plan/edit/"+this.planData.id, this.planData).catch(err=>{
        this.$swal.fire({title:"Error Happened in edit plan", icon:"error"})
        console.log("error happened in edit plan")
        console.log(err)
        return false
      })
    },
  }
}
</script>

<style scoped>

</style>
