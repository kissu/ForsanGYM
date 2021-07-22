<template>
  <div id="addPlayer">
    <div class="row">
      <div class="accordion col-6" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-info text-center col-12" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Add New Player
              </button>
            </h2>
          </div>
          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <div class="tile">
                    <h3 class="tile-title card-header mb-4">Add new player</h3>
                    <div class="tile-body">
                      <form class="form-horizontal">
                        <div class="form-group row">
                          <label class="control-label col-md-3">Name</label>
                          <div class="col-md-8">
                            <input v-model="InputPlayer.name"  class="form-control" type="text" placeholder="Enter full name" >
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="control-label col-md-3">Phone</label>
                          <div class="col-md-8">
                            <input v-model="InputPlayer.phoneNumber"  class="form-control col-md-8" type="tel" placeholder="Enter the phone number">
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="control-label col-md-3">height</label>
                          <div class="col-md-8">
                            <input v-model="InputPlayer.height"  class="form-control col-md-8" type="number" step="any" placeholder="Enter the player height">
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="control-label col-md-3">weight</label>
                          <div class="col-md-8">
                            <input v-model="InputPlayer.weight"  class="form-control col-md-8" type="number" step="any" placeholder="Enter the player weight">
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="control-label col-md-3">Plan</label>
                          <div class="col-md-8">
                            <select @change="PickPlan" v-model="InputPlayer.plan" class="form-control col-md-8" id="plansList">
                              <option :value="null" disabled selected>Choose a plan</option>
                              <option v-for="plan in activatedPlans" :value="plan.id">{{plan.name}}</option>
                            </select>
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="control-label col-md-3">Begin Date</label>
                          <div class="col-md-8">
                            <input v-model="InputPlayer.beginDate" class="form-control col-md-8" type="date">
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="control-label col-md-3">End Date</label>
                          <div class="col-md-8">
                            <input v-model="InputPlayer.endDate" class="form-control col-md-8" type="date">
                          </div>
                        </div>

                          <div class="form-group row">
                            <label class="control-label col-md-3">Photo</label>
                            <div class="col-md-8">
                              <input ref='UploadedFile' class="form-control" type="file">
                            </div>
                          </div>
                      </form>
                    </div>
                    <div class="tile-footer">
                      <div class="row">
                        <div class="col-md-8 ">
                          <button v-on:click="addPlayer" class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseOne">
                            <i class="fa fa-fw fa-lg fa-check-circle"></i>
                            Register</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import moment from 'moment';


export default {
  data(){
    return{
      InputPlayer:{
        name:null,
        phoneNumber:null,
        weight:null,
        height:null,
        plan:null,
        beginDate:null,
        endDate:null
      }
    }
  },
methods:{
  addPlayer: async function () {

    let ok2Go = true
    for (let i = 0, arr=Object.keys(this.InputPlayer); i < arr.length; i++) {
      if (!this.InputPlayer[arr[i]]) {
        this.$swal.fire({
          icon: "error",
          title: "Input Error",
          text: `${arr[i]} Should not be Empty`
        })
        ok2Go = false
        break;
      }
    }
    // TODO  Use Sweetalert
    if (ok2Go) {
      let formData = new FormData()
      formData.append('photo', this.$refs.UploadedFile.files[0])
      Object.keys(this.InputPlayer).forEach(key => {
        formData.append(key, this.InputPlayer[key])
      })


      try {
        const player = await this.$axios.$post('/players/newPlayer', formData);
        // player added then make subscribe request
        // subscribe request
        await this.$axios.$post('/subscriptions/subscribe', {
          player_id: player.id,
          plan_id: this.InputPlayer.plan.id,
          beginDate: this.InputPlayer.beginDate,
          endDate: this.InputPlayer.endDate
        })

        const storePlayer = {
          ...player,
          beginDate: this.InputPlayer.beginDate,
          endDate: this.InputPlayer.endDate,
          plan: this.InputPlayer.plan.name,
          price: this.InputPlayer.plan.price
        }

        await this.$store.commit('addPlayer', storePlayer)

      } catch (e) {
        this.$swal.fire({
          icon: 'error',
          title: "Adding Operation FAILED",
          text: e.response.data.message
        })
        return false;
      }
      // ....
    }
  },
  PickPlan:function (){
    const plan = this.InputPlayer.plan;
    this.InputPlayer.beginDate = moment().format("yyyy-MM-DD")
    this.InputPlayer.endDate = moment().add("months",plan.months).format('yyyy-MM-DD')
  },

},
  computed:{
    activatedPlans : function () {
      return this.$store.state.plans.filter(plan => plan.isActivated )
    },
  }
}
</script>

<style>

</style>
