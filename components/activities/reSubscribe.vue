<template>
  <div class="modal fade" id="reSubscribeModal1" tabindex="-1" aria-labelledby="resubscribeModalLabel1"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="resubscribeModalLabel1">Resubscribe</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group row">
            <label class="control-label col-md-3">Activity</label>
            <div class="col-md-8">
              <select @change="computeDate" v-model="pickedActivity" class="form-control col-md-8" id="activitiesList">
                <option selected :value="null" disabled>Choose an activity</option>
                <option v-for="activity in this.$store.state.activities" :value="activity" :key="activity.id">
                  {{ activity.name }}
                </option>
              </select>
            </div>
          </div>

          <div class="form-group row">
            <label class="control-label col-md-3">Begin Date</label>
            <div class="col-md-8">
              <input v-bind:value="InputActivityPlayer.beginDate"
                     @input="InputActivityPlayer.beginDate = $event.target.value" class="form-control col-md-8"
                     type="date">
            </div>
          </div>

          <div class="form-group row">
            <label class="control-label col-md-3">End Date</label>
            <div class="col-md-8">
              <input v-bind:value="InputActivityPlayer.endDate"
                     @input="InputActivityPlayer.endDate = $event.target.value" class="form-control col-md-8"
                     type="date">
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" v-on:click="subscribe">Save changes</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import moment from "moment/moment";

export default {
  name: "reSubscribe",
  data() {
    return {
      pickedActivity: null,
      InputActivityPlayer: {},
      done: true
    }
  },
  props: {
    activityPlayer: {
      type:Object
    },
  },
  async asyncData(context){
    console.log(context)

  },
  methods: {
    computeDate: function () {
      this.InputActivityPlayer.beginDate = moment().format("YYYY-MM-DD")
      this.InputActivityPlayer.endDate = moment().add(1, 'month').format("YYYY-MM-DD")
    },
    subscribe: function () {
      // console.log(this.activityPlayer);
      // console.log(this.pickedActivity);
      for(let i = 0, arr=this.$store.state.activityPlayerSubscriptions.items ; i < arr.length; i++){
        if(arr[i].activity.id === this.pickedActivity.id && this.isEndedSubscription(arr[i])){
            this.done = false
        }
      }
      if (!this.done) {
        this.$swal.fire({
          title: "Error",
          text: "This player already has a subscription in this activity!!",
          icon: "error"
        })
      } else {
        this.$axios.$post('activityPlayerSubscription/new', {
          player_id: this.activityPlayer.id,
          activity_id: this.pickedActivity.id,
          beginDate: this.InputActivityPlayer.beginDate,
          endDate: this.InputActivityPlayer.endDate
        }).then(res => {
          this.$store.commit('editActivityPlayer', {
            ...this.activityPlayer,
            subscription: {
              ...res,
              activityPlayer: undefined
            }
          })
          $(`#reSubscribeModal1`).modal('hide')
        }).catch(err => {
          console.log("Error is : ")
          console.log(err)
          this.$swal.fire({
            icon: "error",
            title: "An Error Occurred",
            text: err.response.data.message

          })
        })
      }
    },
    isEndedSubscription: function (subscription) {
      return moment(subscription.endDate).isAfter(moment())
    }
  },
  computed: {},
}
</script>

<style scoped>

</style>
