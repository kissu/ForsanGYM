<template>
  <div id="deleteserviceCom">

    <CollapseComponent btns-class="btn btn-danger" head-btn-text="Delete A Service"
                       CollapseName="DeleteService" icon="mdi mdi-trash-can" >
      <div class="form-group">
        <label for="ServiceSelect">Select The Service</label>
        <select class="form-control" id="ServiceSelect" v-bind:value="SelectedService"
                @input="SelectedService = $event.target.value">
          <option :value="null" disabled selected>Choose A Service</option>
          <option v-for="service in services" :value="service.id" :key="service.id">{{ service.name }} --
            {{ service.price }}
          </option>
        </select>
      </div>
      <p>Warning : Delete Operation is <b style="color: #96000e">IRREVERSIBLE</b>.</p>

      <div class="tile-footer">
        <div class="row">
          <div class="col-md-8 ">
            <button class="btn btn-danger" type="button" data-toggle="collapse" data-target="#DeleteServicecollapse"
                    v-on:click="DeleteService"
                    >
              <i class="mdi mdi-check-circle"></i>
              Delete
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
  name: "DeleteService",
  components: {CollapseComponent},
  data() {
    return {
      SelectedService: null,
    }
  },
  methods: {
    DeleteService: function () {
      this.$swal.fire({
        title: 'Are you sure you want to delete this service ? ',
        showDenyButton: true,
        icon: 'question',

        showCancelButton: false,
        confirmButtonText: `Yes`,
        denyButtonText: `cancel`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          // Delete service from all database
          this.SelectedService = Number(this.SelectedService)
          this.$axios.$delete('service/delete/' + this.SelectedService).then(() => {
            this.$store.commit('DeleteService', this.SelectedService)
            this.SelectedService = null
          }).catch(err => {
            this.$swal.fire({
              title: "Delete Service FAILED",
              icon: "error",
              text: err.response.data.message
            })
            console.log(err)
            return false
          })
          this.$swal.fire('Service Deleted!', '', 'success')
        }
      })


    }
  },
  computed:{
    services: function (){
      return this.$store.state.services.items
    }
  }
}
</script>

<style scoped>

</style>
