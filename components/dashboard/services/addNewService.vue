<template>

  <div id="addNewService-Component">
    <CollapseComponent head-btn-text="Add A Service" btns-class="btn btn-success"
                       CollapseName="AddService" icon="mdi mdi-plus-box">

      <form class="form-horizontal">
        <div class="form-group row">
          <label class="control-label col-md-4">Name</label>
          <div class="col-md-8">
            <input v-bind:value="service.name"
                   @input="service.name = $event.target.value" class="form-control" type="text"
                   placeholder="Service Name" id="serviceName">
          </div>
        </div>

        <div class="form-group row">
          <label class="control-label col-md-4">Price</label>
          <div class="col-md-8">
            <input v-bind:value="service.price"
                   @input="service.price = $event.target.value" class="form-control" type="text"
                   placeholder="Service Price" id="servicePrice">
          </div>
        </div>
      </form>
      <div class="tile-footer">
        <div class="row">
          <div class="col-md-8 ">
            <button class="btn btn-success" type="button" data-toggle="collapse" data-target="#AddServicecollapse"
                    v-on:click="AddService">
              <i class="mdi mdi-check-circle"></i>
              Add
            </button>
          </div>
        </div>
      </div>

    </CollapseComponent>

  </div>

</template>

<script>
import CollapseComponent from "../../layout/Collapse";

export default {
  name: "addNewService",
  components: {CollapseComponent},
  data() {
    return {
      service: {}
    }
  },
  methods: {
    resetForm: function (){
      document.getElementById('servicePrice').value = ''
      document.getElementById('serviceName').value = ''
      this.service= {}
    },
    AddService: function () {
      // add the new service to the database (store and backend )
      this.service.price = Number(this.service.price)
      //Add to database it self
      this.$axios.$post('/service/new', {...this.service}).then(res => {
        // Add to store database
        this.$store.commit('AddService', res)

        //resetting the values of the Selected Object
        this.resetForm()

      }).catch(err => {
        this.$swal.fire({
          title: "Adding Service FAILED",
          icon: "error",
        })
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
