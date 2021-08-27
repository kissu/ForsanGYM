<template>
<div id="editAdminPage" >

  <div class="modal fade" :id="`editAdmin${adminData.id}Modal`" tabindex="-1" :aria-labelledby="`editAdmin${adminData.id}ModalLabel`"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="`editAdmin${adminData.id}ModalLabel`">Edit {{adminData.name}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group row">
            <label class="control-label col-md-3">Admin Name</label>
            <div class="col-md-8">
              <input v-bind:value="adminData.name"
                     @input="adminData.name = $event.target.value" class="form-control col-md-8"
                     type="text" placeholder="Enter Admin Name" >
            </div>
          </div>

          <div class="form-group row">
            <label class="control-label col-md-3">Username</label>
            <div class="col-md-8">
              <input v-bind:value="adminData.username"
                     @input="adminData.username = $event.target.value" class="form-control col-md-8"
                     type="text" placeholder="Enter Username">
            </div>
          </div>

<!--          <div class="form-group row">-->
<!--            <label class="control-label col-md-3">password</label>-->
<!--            <div class="col-md-8">-->
<!--              <input v-bind:value="adminData.password"-->
<!--                     @input="adminData.password = $event.target.value" class="form-control col-md-8" type="password"-->
<!--                     placeholder="Enter password">-->
<!--            </div>-->
<!--          </div>-->

          <div class="form-group row">
            <label class="control-label col-md-3">Admin Role</label>
            <div class="col-md-8">
              <select v-model="adminData.role" class="form-control col-md-8">
                <option :value="adminData.role" selected>{{adminData.role}}</option>
                <option value="Admin" v-if="adminData.role==='SuperAdmin'">Admin</option>
                <option value="SuperAdmin" v-else >Super Admin</option>
              </select>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-warning"  data-dismiss="modal" v-on:click="editAdmin">Submit</button>
        </div>
      </div>
    </div>
  </div>


</div>
</template>

<script>
export default {
  name: "editAdmin",
  props:{
    adminData:{
      type:Object,
      required:true
    }
  },
  methods:{
    editAdmin: function (){
      const adminData = {...this.adminData}
      this.$axios.$post('auth/editAdmin', adminData).then(()=>{
        this.$store.commit('editAdmin', adminData)
      }).catch(err=>{
        this.$swal.fire({
          title:"Error in editing the Admin",
          icon:"error"
        })
        console.log("Error in edit admin")
        console.log(err)
        return false
      })
    }
  }
}
</script>

<style scoped>

</style>
