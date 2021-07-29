<template>
  <div class="modal fade" id="resubscribeModal" tabindex="-1" aria-labelledby="resubscribeModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="resubscribeModalLabel">Resubscribe</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group row">
            <label class="control-label col-md-3">Plan</label>
            <div class="col-md-8">
              <select @change="PickPlan" v-model="InputPlayer.plan" class="form-control col-md-8" id="plansList">
                <option :value="null" disabled selected>Choose a plan</option>
                <option v-for="plan in activatedPlans" :value="plan" :key="plan.id">{{plan.name}}</option>
              </select>
            </div>
          </div>

          <div class="form-group row">
            <label class="control-label col-md-3">Begin Date</label>
            <div class="col-md-8">
              <input v-bind:value="InputPlayer.beginDate"
                     @input="InputPlayer.beginDate = $event.target.value" class="form-control col-md-8" type="date">
            </div>
          </div>

          <div class="form-group row">
            <label class="control-label col-md-3">End Date</label>
            <div class="col-md-8">
              <input v-bind:value="InputPlayer.endDate"
                     @input="InputPlayer.endDate = $event.target.value" class="form-control col-md-8" type="date">
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "resubscribe"
}
</script>

<style scoped>

</style>
