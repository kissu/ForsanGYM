<template>
  <div id="View">
    <page-title title="Player Info" icon="fa fa-user"/>
    <div class="row align-items-center flex-md-row-reverse">
      <div class="col-md-3 mb-3 mb-md-0">
        <div class="img mx-auto text-center">
          <img
            class="rounded-circle my-2"
            :src="'http://localhost:4000/photo'+player.photo"
            alt=""
            style="width: 15rem; height:auto"
          />
        </div>
        <div class="d-flex actions  text-center my1 mx-auto w-100">
          <button type="button" class="btn btn-warning mx-auto w-100" data-toggle="modal"
                  data-target="#staticBackdrop" >Edit
          </button>
          <edit :playerId='player.id'/>
          <!-- End of popup window -->
        </div>

        <div class="d-flex actions  text-center my-1 mx-auto w-100">
          <button type="button" class="btn btn-outline-primary mx-auto w-100"
                  v-if="!player.subscription.plan.id || player.invited > 0 " disabled>Freeze
          </button>
          <button type="button" class="btn btn-outline-primary mx-auto w-100" v-else v-on:click="freeze()">Freeze
          </button>
        </div>

        <div class="d-flex actions  text-center my-1 mx-auto w-100">
          <button type="button" class="btn btn-outline-secondary mx-auto w-100"
                  v-if="!player.subscription.plan.id || player.freeze !==0" disabled>Invite Friend
          </button>
          <button type="button" class="btn btn-outline-secondary mx-auto w-100" v-else v-on:click="addInvite()">Invite
            Friend
          </button>
        </div>

      </div>
      <div class="col-md-9 text-break">
        <div class="tile">
          <div class="tile-title-w-btn">
            <h2 data-toggle="dropdown" class="title">
              <span class="mdi mdi-account-circle"></span>
              {{ player.name }}
            </h2>
          </div>
          <div class="tile-body">

            <div class="row mb-2">
              <div class="col-md-3">
                <h5 class="mb-0">
                  <span class="mb-0 mdi mdi-id-card"></span> ID
                </h5>
              </div>

              <div class="col-md-9">
                <h5 csubscriptionlass="mb-0 font-weight-normal">{{ player.id }}</h5>
              </div>
            </div>

            <div class="row mb-2">
              <div class="col-md-3">
                <h5 class="mb-0">
                  <span class="mb-0 mdi mdi-phone"></span> Phone Number
                </h5>
              </div>

              <div class="col-md-9">
                <h5 class="mb-0 font-weight-normal">{{ player.phoneNumber }}</h5>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-md-3">
                <h5 class="mb-0">
                  <span class="mb-0 mdi mdi-road"></span> Plan
                </h5>
              </div>

              <div class="col-md-9">
                <h5 class="mb-0 font-weight-normal" v-if="player.subscription.plan.id">
                  {{ player.subscription.plan.name }}</h5>
                <h5 class="mb-0 font-weight-normal" v-else style="color: #ea051c">Deleted Plan</h5>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-md-3">
                <h5 class="mb-0">
                  <span class="mb-0 mdi mdi-calendar"></span> BeginDate
                </h5>
              </div>
              <div class="col-md-9">
                <h5 class="mb-0 font-weight-normal">{{ player.subscription.beginDate }}</h5>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-md-3">
                <h5 class="mb-0">
                  <span class="mb-0 mdi mdi-calendar-remove-outline"></span> EndDate
                </h5>
              </div>
              <div class="col-md-9">
                <h5 class="mb-0 font-weight-normal">{{ player.subscription.endDate }}</h5>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-md-3">
                <h5 class="mb-0">
                  <span class="mb-0 mdi mdi-weight-kilogram"></span> Weight
                </h5>
              </div>
              <div class="col-md-9">
                <h5 class="mb-0 font-weight-normal">{{ player.weights[player.weights.length - 1].weight }}</h5>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-md-3">
                <h5 class="mb-0">
                  <span class="mb-0 mdi mdi-human-male-height-variant"></span> Height
                </h5>
              </div>
              <div class="col-md-9">
                <h5 class="mb-0 font-weight-normal">{{ player.height }}</h5>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-md-3">
                <h5 class="mb-0">
                  <span class="mb-0 mdi mdi-dumbbell"></span> Training Plan
                </h5>
              </div>
              <div class="col-md-7">
                <h5 class="mb-0 font-weight-normal" v-if="player.trainingPlan">
                  {{ player.trainingPlan }}
                  <br/>
                </h5>
                <h5 class="mb-0 font-weight-normal" v-else>
                  {{ player.name }} has no training plan.
                  <br/>
                </h5>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-md-3">
                <h5 class="mb-0">
                  <span class="mb-0 mdi mdi-food-apple"></span>Diet
                </h5>
              </div>

              <div class="col-md-7">
                <h5 class="mb-0 font-weight-normal" v-if="player.dietPlan">
                  {{ player.dietPlan }}
                  <br/>
                </h5>
                <h5 class="mb-0 font-weight-normal" v-else>
                  {{ player.name }} has no diet plan.
                  <br/>
                </h5>
              </div>
            </div>

            <div class="row mb-2" v-if="player.invited === 0 ">
              <div class="col-md-3">
                <h5 class="mb-0">
                  <span class="mb-0 mdi mdi-snowflake"></span> Freezing
                </h5>
              </div>
              <div class="col-md-9">
                <h5 class="mb-0 font-weight-normal" v-if="player.subscription.plan.id">
                  {{ player.subscription.plan.freezeDays }} ({{ player.subscription.plan.freezeDays - player.freeze }}
                  Left)</h5>
                <h5 class="mb-0 font-weight-normal" v-else style="color: #ea051c"> No freezing days (Deleted Plan)</h5>
              </div>
            </div>

            <div class="row mb-2" v-if="player.freeze === 0">
              <div class="col-md-3">
                <h5 class="mb-0">
                  <span class="mb-0 mdi mdi-account-arrow-right"></span> Invitation
                </h5>
              </div>
              <div class="col-md-9">
                <h5 class="mb-0 font-weight-normal" v-if="player.subscription.plan.id">
                  {{ player.subscription.plan.invites }} ({{ player.subscription.plan.invites - player.invited }}
                  Left)</h5>
                <h5 class="mb-0 font-weight-normal" v-else style="color: #ea051c">No invites (Deleted Plan)</h5>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="row ">

      <div class="col-md-7">
        <PlayerSubscriptions/>
      </div>

      <div class="col-md-5">
        <WeightTable :player="player"/>
      </div>

    </div>
  </div>
</template>

<script>
import PageTitle from "../../components/layout/pageTitle";
import Edit from '../../components/players/edit.vue';
import WeightTable from "../../components/players/weightTable";
import moment from "moment/moment";
import Swal from "sweetalert2";
import PlayerSubscriptions from "../../components/players/playerSubscriptions"
import axios from "axios";

export default {
  components: {PlayerSubscriptions, WeightTable, PageTitle, Edit},
  async asyncData({route, $axios, store}) {
    try{
      // to avoid duplications
      const player = await $axios.$get('player/'+route.params.id)
      await store.commit('setViewPlayer', player)
      const res = await $axios.$get('subscription/' + route.params.id)
      await store.commit('setPlayerSubscriptions', res)
    }catch(err){
      console.log("error form setting player subscriptions pages/players/view : ")
      console.log(err)
    }
  },
  methods: {
    // initPage: function (){
    //   console.log("init worked ")
    //   const id = this.$route.params.id
    //
    //   this.player = Object.assign({},this.$store.state.players.find(player=>{
    //     return player.id === id
    //   }))
    //
    //
    //
    // },

    freeze: function () {
      this.$swal.fire({
        title: "How many Days you want to freeze ? ",
        input: "text",
        icon: "question",
        iconColor: "#316aff",
        inputPlaceholder: `Enter a number from 1 to ${this.player.subscription.plan.freezeDays - this.player.freeze} `,
        showCancelButton: true
      }).then(res => {
        if (!res.isDismissed) {
          if (isNaN(Number(res.value)) || res.value === "") {
            // Validate the value is a number :D
            Swal.fire({
              icon: "error",
              title: "Weight must be a number"
            })
          } else {
            this.$axios.$post('player/freeze/' + this.player.id, {freezeDays: Number(res.value)}).then(() => {
              this.$axios.$post('subscription/updateDate/' + this.player.subscription.id, {
                beginDate: this.player.subscription.beginDate,
                endDate: moment(this.player.subscription.endDate).add(Number(res.value), 'day').format("YYYY-MM-DD")
              }).then(() => {
                this.$store.commit('setViewPlayer', {
                  ...this.player,
                  subscription: {
                    ...this.player.subscription,
                    endDate: moment(this.player.subscription.endDate).add(Number(res.value), 'day').format("YYYY-MM-DD")
                  },
                  freeze: this.player.freeze + Number(res.value)
                })
              }).catch(err => {
                this.$swal.fire({
                  title: `Freezing player Failed`,
                  icon: "error",
                  text: err.response.data.message
                })
              })
            }).catch(err => {
              this.$swal.fire({
                title: `Freezing player Failed`,
                icon: "error",
                text: err.response.data.message
              })
            })

          }

        }

      })

    },

    addInvite: function () {
      this.$swal.fire({
        title: `How many invitations you want to add ? `,
        icon: "question",
        input: 'text',
        inputPlaceholder: `Enter a number from 1 to ${this.player.subscription.plan.invites - this.player.invited} `,
        showCancelButton: true
      }).then(res => {
        if (!res.isDismissed) {
          if (isNaN(Number(res.value)) || res.value === "") {
            // Validate the value is a number :D
            Swal.fire({
              icon: "error",
              title: "Weight must be a number"
            })
          } else {
            this.$axios.$post('player/inviteFriend/' + this.player.id, {
              invites: Number(res.value)
            }).then(() => {
              this.$store.commit('setViewPlayer', {
                ...this.player,
                invited: this.player.invited + Number(res.value)
              })
            }).catch(err => {
              this.$swal.fire({
                title: `Inviting a friend Faild`,
                icon: "error",
                text: err.response.data.message
              })
            })
          }
        }
      })
    },

  },
  created() {
    console.log("Player : ", this.player)
    console.log("Type : ", typeof this.player.subscription.plan)
  },
  computed: {
    player: function () {
      return this.$store.state.players.viewPlayer
    },

  },
};
</script>

<style>
</style>
