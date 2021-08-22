<template>
<div id="deleteAdminPage">

  <div class="modal fade" id="deleteAdminModal" tabindex="-1" aria-labelledby="deleteAdminModalLabel"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteAdminModalLabel" style="color: #e00909">Delete Admin</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h4>Choose the Admin you want to Delete</h4>
          <div class="form-group row">
            <div class="col-md-8">
              <select  class="form-control col-md-8" id="adminList" @change="clickedAdmin = admins[$event.target.value]">
                <option disabled selected>Choose Admin</option>
                <option v-for="(admin,index) in admins" :key="admin.id" :value="index">
                  {{admin.username}} -- {{admin.name}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="resetForm">Close</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="deleteAdmin">Delete</button>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "deleteAdmin",
  data(){
    return{
      clickedAdmin: {}
    }
  },
  methods:{
    resetForm:function (){
      this.clickedAdmin = {}
      document.getElementById('adminList').selectedIndex = 0
    },
    deleteAdmin: function (){
      // console.log(this.clickedAdmin)
      // return
      const clickedAdmin = {...this.clickedAdmin}
      this.$axios.$delete(`auth/deleteAdmin/${clickedAdmin.id}`).then(()=>{
        this.$store.commit('deleteAdmin', clickedAdmin)
        this.resetForm()
      }).catch(err=>{
        this.$swal.fire({
          title:"Error happened while the deleting admin",
          icon:"error"
        })
        console.log("Error in delete admin")
        console.log(err)
        this.resetForm()
        return false
      })

    }
  },
  computed:{
    admins: function (){
      return this.$store.state.admins.items.filter(admin=> admin.username !== this.$auth.user.username)
    }
  }
}
</script>

<style scoped>

</style>
