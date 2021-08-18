<template>
<div id="addNewAdminCom">
  <div class="modal fade" id="AddAdminModal" tabindex="-1" aria-labelledby="AddAdminModalLabel"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="AddAdminModalLabel">Add New Admin</h5>
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
                     type="text" placeholder="Enter Admin Name">
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

          <div class="form-group row">
            <label class="control-label col-md-3">password</label>
            <div class="col-md-8">
              <input v-bind:value="adminData.password"
                     @input="adminData.password = $event.target.value" class="form-control col-md-8" type="password"
                    placeholder="Enter password">
            </div>
          </div>

          <div class="form-group row">
            <label class="control-label col-md-3">Admin Role</label>
            <div class="col-md-8">
              <select v-model="adminData.role" class="form-control col-md-8">
                <option value="Admin" selected >Admin</option>
                <option value="SuperAdmin" >Super Admin</option>
              </select>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-success" v-on:click="addAdmin">Add Admin</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "addNewAdmin",
  data(){
    return{
      adminData:{}
    }
  },
  methods:{
    addAdmin: function (){
      console.log(this.adminData)
    }
  }
}
</script>

<style scoped>

</style>
