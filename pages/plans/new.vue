<template>
  <div id="newPlanPage">
    <pageTitle title="New Plan" icon="mdi mdi-plus"/>
    <div class="row mt-2 justify-content-center">
      <div class="col-md-8">
        <div class="tile">
          <h3 class="tile-title card-header text-center">Add New Plan</h3>
          <div class="tile-body">
            <form class="form-horizontal">
              <div class="form-group row">
                <label class="control-label col-md-3 text-center">Plan Name</label>
                <div class="col-md-8">
                  <input v-model="plan.name" class="form-control" type="text" placeholder="Plan">
                </div>
              </div>

              <div class="form-group row">
                <label class=" control-label col-md-3 text-center" for="descriptionTextarea">Description</label>
                <div class="col-md-8">
                <textarea v-model="plan.description"
                          class="form-control col-md-10" id="descriptionTextarea" rows="2"
                          placeholder="Plan Description here..."
                ></textarea>
                </div>
              </div>
              <div class="form-group row">
                <label class="control-label col-md-3 text-center">Duration in Months </label>
                <div class="col-md-8">
                  <input v-model="plan.months" class="form-control col-md-8" type="number" placeholder="Months">
                </div>
              </div>

              <div class="form-group row">
                <label class="control-label col-md-3 text-center">Price </label>
                <div class="col-md-8">
                  <input v-model="plan.price" class="form-control col-md-8" type="number" placeholder="EGP">
                </div>
              </div>

              <div class="form-group row">
                <label class="control-label col-md-3 text-center">Freezing Days </label>
                <div class="col-md-8">
                  <input v-model="plan.freezeDays" class="form-control col-md-8" type="number"
                         placeholder="Allowed Freezing Days ">
                </div>
              </div>

              <div class="form-group row">
                <label class="control-label col-md-3 text-center">Invitations </label>
                <div class="col-md-8">
                  <input v-model="plan.invites" class="form-control col-md-8" type="number"
                         placeholder="Allowed Invitations">
                </div>
              </div>

              <div class="form-group">
                <div class="toggle-flip">
                  <div class="row justify-content-center">
                    <label> Avtivate Plan</label>
                  </div>
                  <div class="row justify-content-center">
                    <label>
                      <input v-model="plan.isActivated" type="checkbox"><span class="flip-indecator "
                                                                              data-toggle-on="ON"
                                                                              data-toggle-off="OFF"></span>
                    </label>
                  </div>
                </div>
              </div>

            </form>
          </div>
          <div class="tile-footer">
            <div class="row justify-content-around">
              <div class="col-md-3 ">
                <button :disabled="dis" @click="addPLan" class="btn btn-primary " type="button">
                  <i class="mdi mdi-check-circle"></i>
                  Add Plan
                </button>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import pageTitle from "../../components/layout/pageTitle";

export default {
  components: {pageTitle},
  data() {
    return {
      plan: {
        name: null,
        description: null,
        price: 0,
        months: 1,
        isActivated: 0,
        invites: null,
        freezeDays: null
      },
      dis: false
    }
  },
  methods: {
    addPLan: function () {
      // this.dis = true;
      this.plan.invites = Number(this.plan.invites)
      this.plan.freezeDays = Number(this.plan.freezeDays)

      this.$axios.$post('/plan/new', this.plan).then(res => {
        this.$store.commit('addPlan', res);
        this.dis = false
        this.$router.push({
          name: "allPlans"
        })
      }).catch(err => {
        console.log(err)
        alert("There was an error while adding the plan ")
      });
    }
  }
}
</script>
