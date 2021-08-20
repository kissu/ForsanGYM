<template>
  <div id="addPlayer">
    <div class="row">
      <div class="accordion col-6" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-info text-center col-12" type="button" data-toggle="collapse"
                      data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
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
                            <input v-bind:value="InputPlayer.name"
                                   @input="InputPlayer.name = $event.target.value" class="form-control" type="text"
                                   placeholder="Enter full name">
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="control-label col-md-3">Phone</label>
                          <div class="col-md-8">
                            <input v-bind:value="InputPlayer.phoneNumber"
                                   @input="InputPlayer.phoneNumber = $event.target.value" class="form-control col-md-8"
                                   type="tel" placeholder="Enter the phone number">
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="control-label col-md-3">height</label>
                          <div class="col-md-8">
                            <input v-bind:value="InputPlayer.height"
                                   @input="InputPlayer.height = $event.target.value" class="form-control col-md-8"
                                   type="number" step="any" placeholder="Enter the player height">
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="control-label col-md-3">weight</label>
                          <div class="col-md-8">
                            <input v-bind:value="InputPlayer.weight"
                                   @input="InputPlayer.weight = $event.target.value" class="form-control col-md-8"
                                   type="number" step="any" placeholder="Enter the player weight">
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="control-label col-md-3">Plan</label>
                          <div class="col-md-8">
                            <select @change="PickPlan" v-model="InputPlayer.plan" class="form-control col-md-8"
                                    id="plansList">
                              <option :value="null" disabled selected>Choose a plan</option>
                              <option v-for="plan in activatedPlans" :value="plan" :key="plan.id">{{ plan.name }}
                              </option>
                            </select>
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="control-label col-md-3">Price</label>
                          <div class="col-md-8">
                            <input v-bind:value="InputPlayer.payedMoney"
                                   @input="InputPlayer.payedMoney = $event.target.value" class="form-control col-md-8"
                                   type="number">
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="control-label col-md-3">Begin Date</label>
                          <div class="col-md-8">
                            <input v-bind:value="InputPlayer.beginDate"
                                   @input="InputPlayer.beginDate = $event.target.value" class="form-control col-md-8"
                                   type="date">
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="control-label col-md-3">End Date</label>
                          <div class="col-md-8">
                            <input v-bind:value="InputPlayer.endDate"
                                   @input="InputPlayer.endDate = $event.target.value" class="form-control col-md-8"
                                   type="date">
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="control-label col-md-3">Photo</label>
                          <div class="col-md-8">
                            <input ref='UploadedFile' class="form-control" type="file" >
                          </div>
                        </div>

                        <div class="form-group">
                          <label class="control-label">Player's Diet</label>
                          <textarea
                            class="form-control"
                            rows="4"
                            type="text"
                            v-bind:value="InputPlayer.dietPlan"
                            @input="InputPlayer.dietPlan = $event.target.value"
                          ></textarea>
                        </div>

                        <div class="form-group">
                          <label class="control-label">Player's Training Plan</label>
                          <textarea
                            class="form-control"
                            rows="4"
                            type="text"
                            v-bind:value="InputPlayer.trainingPlan"
                            @input="InputPlayer.trainingPlan = $event.target.value"
                          ></textarea>
                        </div>

                      </form>
                    </div>
                    <div class="tile-footer">
                      <div class="row">
                        <div class="col-md-8 ">
                          <button v-on:click="addPlayer" class="btn btn-primary" type="button" data-toggle="collapse"
                                  data-target="#collapseOne">
                            <i class="mdi mdi-check-circle"></i>
                            Register
                          </button>
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
import axios from "axios";


export default {
  data() {
    return {
      InputPlayer: {},
      MEDIA_API:process.env.MEDIA_API
    }
  },
  methods: {
    // test: function (msg){
    //   console.log(this.$refs.UploadedFile.files[0])
    // },
    addPlayer: async function () {
      let formData = new FormData()
      if (this.isFormOk()) {
        formData.append('file', this.$refs.UploadedFile.files[0])
        if(this.$refs.UploadedFile.files[0]){ // because photo is optional
          this.InputPlayer.photo = `/${this.InputPlayer.phoneNumber}.${this.$refs.UploadedFile.files[0].type.split('/')[1]}`
        }
        try {
          const player = await this.$axios.$post('/player/new', this.InputPlayer);
          // player added then make subscribe request
          // subscribe request
          const sub = await this.$axios.$post('/subscription/new', {
            player_id: player.id,
            plan_id: this.InputPlayer.plan.id,
            beginDate: this.InputPlayer.beginDate,
            endDate: this.InputPlayer.endDate,
            payedMoney: Number(this.InputPlayer.payedMoney),
            creationDate: moment().format("yyyy-MM-DD")
          })

          let weights = await this.$axios.$post('playerWeight/new', {
            date: moment().format('yyyy-MM-DD'),
            weight: this.InputPlayer.weight,
            player_id: player.id
          })
          weights = [weights]
          // subscribe request is done
          const storePlayer = {
            // creating store object
            ...player,
            subscription: sub,
            weights: weights
          }
          if(this.$refs.UploadedFile.files[0]){ // because photo is optional
              await axios.post(`${this.MEDIA_API}/photo/upload?phone=${this.InputPlayer.phoneNumber}`, formData)
          }
          await this.$store.commit('addPlayer', storePlayer)

          await this.$store.commit('addSubscriptionIncome', sub)
          this.InputPlayer = {
            name: null,
            phoneNumber: null,
            weight: null,
            height: null,
            plan: null,
            payedMoney:0,
            beginDate: null,
            endDate: null,
            dietPlan: "",
            trainingPlan: "",
          }

        } catch (e) {
           await axios.delete(`${this.MEDIA_API}/photo/delete/${this.InputPlayer.photo}`)
          this.InputPlayer.photo = "";
          this.$swal.fire({
            icon: 'error',
            title: "Adding Operation FAILED",
            text: e.response.data.message
          })
          this.InputPlayer = {
            name: null,
            phoneNumber: null,
            weight: null,
            height: null,
            plan: null,
            payedMoney:0,
            beginDate: null,
            endDate: null,
            dietPlan: "",
            trainingPlan: "",
          }
          return false;
        }
        // ....
        this.$swal.fire({
          title:"Player Added Successfully",
          icon:'success'
        })
      }
    },
    PickPlan: function () {
      this.InputPlayer.beginDate = moment().format("yyyy-MM-DD")
      this.InputPlayer.endDate = moment().add( this.InputPlayer.plan.months,"months").format('yyyy-MM-DD')
      this.InputPlayer.payedMoney = this.InputPlayer.plan.price
    },
    isFormOk: function () {
      for (let i = 0, arr = Object.keys(this.InputPlayer); i < arr.length; i++) {
        if (!this.InputPlayer[arr[i]]) {
          this.$swal.fire({
            icon: "error",
            title: "Input Error",
            text: `${arr[i]} Should not be Empty`
          })
          return false
        }
      }
      if(this.$store.state.players.items.find(player=> player.phoneNumber === this.InputPlayer.phoneNumber)){
        // duplicated phone number
        this.$swal.fire({
          icon: "error",
          title: "Input Error",
          text: `Phone number is already in use`
        })
        return false
      }
      return true
    }

  },
  computed: {
    activatedPlans: function () {
      return this.$store.state.plans.filter(plan => plan.isActivated)
    },
  }
}
</script>

<style>

</style>
