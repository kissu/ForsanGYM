<template>
  <div id="deleteOutcomeCom" >

    <CollapseComponent btns-class="btn btn-danger" head-btn-text="Delete Outcome"
                       CollapseName="DeleteOutcome" icon="mdi mdi-minus-box" >
      <div class="form-group">
        <label for="outcomeSelect">Select The Outcome</label>
        <select class="form-control" id="outcomeSelect" @change="SelectedOutcome = outcomes[$event.target.value]">
          <option :value="null" disabled selected>Choose the Outcome</option>
          <option v-for="outcome in outcomes" :value="outcome.index" :key="outcome.id">{{ outcome.description }} --
            {{ outcome.price }}
          </option>
        </select>
      </div>
      <p>Warning : Delete Operation is <b style="color: #96000e">IRREVERSIBLE</b>.</p>

      <div class="tile-footer">
        <div class="row">
          <div class="col-md-8 ">
            <button class="btn btn-danger" type="button" data-toggle="collapse" data-target="#DeleteOutcomecollapse"
                    v-on:click="DeleteOutcome"
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
  name: "DeleteOutcome",
  components: {CollapseComponent},
  data() {
    return {
      SelectedOutcome: null,
    }
  },

  methods: {
    DeleteOutcome: function () {
      // console.log(this.SelectedOutcome)
      // return
      this.$swal.fire({
        title: 'Are you sure you want to delete this outcome ? ',
        showDenyButton: true,
        icon: 'question',

        showCancelButton: false,
        confirmButtonText: `Yes`,
        denyButtonText: `cancel`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          // Delete service from all database
          this.$axios.$delete('outcome/delete/' + this.SelectedOutcome.id).then(() => {
            this.$store.commit('deleteOutcome', this.SelectedOutcome)
          }).catch(err => {
            this.$swal.fire({
              title: "Delete Outcome FAILED",
              icon: "error",
              text: err.response.data.message
            })
            console.log(err)

            return false
          })
          this.$swal.fire('Outcome Deleted!', '', 'success')
          document.getElementById('outcomeSelect').selectedIndex = 0
        }
      })


    }
  },
  computed:{
    outcomes: function (){
      return this.$store.state.outcome.items
    }
  }
}
</script>

<style scoped>

</style>
