<template>
  <div id="deleteOutcomeCom" >

    <CollapseComponent btns-class="btn btn-danger" head-btn-text="Delete Outcome"
                       CollapseName="DeleteOutcome" icon="mdi mdi-minus-box" >
      <div class="form-group">
        <label for="outcomeSelect">Select The Outcome</label>
        <select class="form-control" id="outcomeSelect" @change="SelectedOutcome = outcomes[$event.target.value]">
          <option :value="null" disabled selected>Choose the Outcome</option>
          <option v-for="(outcome, index) in outcomes" :value="index" :key="outcome.id">{{ outcome.description }} --
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
      SelectedOutcome: {},
    }
  },

  methods: {
    resetForm: function (){
      document.getElementById('outcomeSelect').selectedIndex = 0
      this.SelectedOutcome = {}
    },
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
          this.SelectedOutcome.price = Number(this.SelectedOutcome.price)
          const SelectedOutcome = {...this.SelectedOutcome}
          this.$axios.$delete('outcome/delete/' + SelectedOutcome.id).then(() => {
            this.$store.commit('deleteOutcome', SelectedOutcome)
            this.resetForm()
            this.$swal.fire('Outcome Deleted!', '', 'success')
          }).catch(err => {
            this.$swal.fire({
              title: "Delete Outcome FAILED",
              icon: "error",
            })
            console.log(err)
            this.resetForm()
            return false
          })
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
