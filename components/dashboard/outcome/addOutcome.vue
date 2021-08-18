<template>

  <div id="addOutcome-Component">
    <CollapseComponent head-btn-text="Add Outcome" btns-class="btn btn-secondary"
                       CollapseName="AddOutcome" icon="mdi mdi-plus-box" >
      <form class="form-horizontal">
        <div class="form-group row">
          <label class="control-label col-md-4">Price</label>
          <div class="col-md-8">
            <input v-bind:value="outcome.price"
                   @input="outcome.price = $event.target.value" class="form-control" type="text"
                   placeholder="Outcome Price">
          </div>
        </div>

        <div class="form-group row">
          <label class="control-label col-md-4">Description</label>
          <div class="col-md-8">
            <textarea
              class="form-control"
              rows="2"
              type="text"
              v-bind:value="outcome.description"
              @input="outcome.description = $event.target.value"
              placeholder="Outcome Description"
            ></textarea>
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
    addOutcome:function (){// add outcome to db

    },
  },
}
</script>

<style scoped>

</style>
