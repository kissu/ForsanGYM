<template>
<div id="addNewAdminCom" >
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
              <select class="form-control col-md-8" @change="adminData.role = $event.target.value" id="adminRole">
                <option disabled selected>Choose Admin Role</option>
                <option value='Admin'>Admin</option>
                <option value='SuperAdmin'>Super Admin</option>
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
      const admin = Object.assign({}, this.adminData)
        this.$axios.$post('auth/register', admin).then(res=>{
        this.$store.commit('addAdmin', res)
      }).catch(err=>{
        this.$swal.fire({
          title:"Error While Adding the Admin",
          icon:"error"
        })
        console.log("Error in add new Admin")
        console.log(err)
      })
      this.adminData = Object.assign({},{})
      $(`#AddAdminModal`).modal('hide')
      document.getElementById('adminRole').selectedIndex = 0

    }
  }
}
</script>

<style scoped>

</style>
