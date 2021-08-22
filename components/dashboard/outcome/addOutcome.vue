<template>

  <div id="addOutcome-Component">
    <CollapseComponent head-btn-text="Add Outcome" btns-class="btn btn-secondary"
                       CollapseName="AddOutcome" icon="mdi mdi-plus-box" >
      <form class="form-horizontal">
        <div class="form-group row">
          <label class="control-label col-md-4">Price</label>
          <div class="col-md-12">
            <input v-bind:value="outcome.price"
                   @input="outcome.price = $event.target.value" class="form-control" type="number"
                   placeholder="Outcome Price">
          </div>
        </div>

        <div class="form-group row">
          <label class="control-label col-md-5">Description</label>
          <div class="col-md-12">
            <input
              class="form-control"
              type="text"
              v-bind:value="outcome.description"
              @input="outcome.description = $event.target.value"
              placeholder="Outcome Description"
            >
          </div>
        </div>
      </form>
      <div class="tile-footer">
        <div class="row">
          <div class="col-md-8 ">
            <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#AddOutcomecollapse"
                    v-on:click="addOutcome">
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
  name: "addOutcome",
  components: {CollapseComponent},
  data(){
    return{
      outcome:{}
    }
  },
  methods:{
    resetForm:function (){
      this.outcome = {}
    },
    addOutcome:function (){// add outcome to db
      this.outcome.price = Number(this.outcome.price)
      const outcome = {...this.outcome}
      this.$axios.$post('outCome/new', outcome).then(()=>{
        this.$store.commit("addOutcome", outcome)
        this.resetForm()
      }).catch(err =>{
        this.$swal.fire({
          title:"Adding Outcome operation Failed.",
          icon: "error",
        })
        console.log("Error in adding outcome: ")
        console.log(err)
        this.resetForm()
        return false
      })
    },
  },
}
</script>

<style scoped>

</style>
