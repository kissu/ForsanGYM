<template>
  <div id="View">
    <page-title :title="player.name" icon="fa fa-user" />
    <div class="row align-items-center flex-md-row-reverse">
      <div class="col-md-3 mb-3 mb-md-0">
        <div class="img mx-auto text-center">
          <img
            class="rounded-circle"
            :src="'localhost:3000/'+player.photo"
            alt=""
          />
        </div>
        <div class="d-flex actions  text-center mt-3 mx-auto w-100" >
          <button
            type="button"
            class="btn btn-primary mx-auto w-100"
            data-toggle="modal"
            data-target="#staticBackdrop"
          >
            Edit
          </button>
          <edit :playerData='player' />
          <!-- End of popup window -->
        </div>
      </div>
      <div class="col-md-9">
        <div class="tile">
          <div class="tile-title-w-btn">
            <h2 data-toggle="dropdown" class="title">
              <span class="mdi mdi-account-circle"></span>
              Player Info
            </h2>
          </div>
          <div class="tile-body">
            <div class="row mb-2">
              <div class="col-md-3">
                <h5 class="mb-0">
                  <span class="mb-0 mdi mdi-phone"></span> Phone Number
                </h5>
              </div>

              <div class="col-md-9">
                <h5 class="mb-0 font-weight-normal">{{player.phoneNumber}}</h5>
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
                <h5 class="mb-0 font-weight-normal">{{player.subscription.endDate}}</h5>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-md-3">
                <h5 class="mb-0">
                  <span class="mb-0 mdi mdi-weight-kilogram"></span> Weight
                </h5>
              </div>
              <div class="col-md-9">
                <h5 class="mb-0 font-weight-normal">{{player.weight}}</h5>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-md-3">
                <h5 class="mb-0">
                  <span class="mb-0 mdi mdi-human-male-height-variant"></span> Height
                </h5>
              </div>
              <div class="col-md-9">
                <h5 class="mb-0 font-weight-normal">{{player.height}}</h5>
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
                  {{player.trainingPlan}}
                  <br />
                </h5>
                <h5 class="mb-0 font-weight-normal" v-else>
                  {{player.name}} has no training plan.
                  <br />
                </h5>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-md-3">
                <h5 class="mb-0">
                  <span class="mb-0 mdi mdi-dumbbell"></span>Diet
                </h5>
              </div>
              <div class="col-md-7">
                <h5 class="mb-0 font-weight-normal" v-if="player.dietPlan">
                  {{player.dietPlan}}
                  <br />
                </h5>
                <h5 class="mb-0 font-weight-normal" v-else>
                  {{player.name}} has no diet plan.
                  <br />
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../components/layout/pageTitle";
import Edit from '../../components/players/edit.vue';

export default {
  components: { PageTitle, Edit },
  data(){
    return{
      player: {},

    }
  },
  methods:{

    },
  created() {
    const id = this.$route.params.id
    this.player =   this.$store.state.players.find(player=>{
      return player.id === id
    })
  },
  computed:{

  },


};
</script>

<style>
</style>
