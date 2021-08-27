<template>
  <div id="player-activity-table">
    <div class="accordion" id="accordionExample">
      <div class="card col-lg-6 col-md-12 col-12 px-0">
        <div class="card-header col" id="headingOne">
          <h2 class="mb-0">
            <button
              class="btn btn-info text-center col-12"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Add New Player
            </button>
          </h2>
        </div>
        <div
          id="collapseOne"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="tile">
                  <div class="tile-body">
                    <form class="form-horizontal">
                      <div class="form-group row">
                        <label class="control-label col-md-4">Name</label>
                        <div class="col-md-8">
                          <input
                            v-model="activityPlayer.name"
                            :class="[
                              { 'form-control': true },
                              { 'is-invalid': errors.name },
                            ]"
                            type="text"
                            placeholder="Enter full name"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="control-label col-md-4">phoneNumber</label>
                        <div class="col-md-8">
                          <input
                            v-model="activityPlayer.phoneNumber"
                            :class="[
                              { 'form-control': true },
                              { 'is-invalid': errors.name },
                            ]"
                            type="number"
                            placeholder="Enter phoneNumber"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="control-label col-md-4">Price</label>
                        <div class="col-md-4">
                          <input
                            v-model="activityPlayer.price"
                            :class="[
                              { 'form-control': true },
                              { 'is-invalid': errors.name },
                            ]"
                            type="text"
                            placeholder="Price"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label
                          class="control-label col-md-4"
                          for="activitySelect"
                        >Select Activity</label
                        >
                        <div class="col-md-8">
                          <div class="form-group">
                            <select
                              v-model="activityPlayer.activity"
                              :class="[
                                { 'form-control': true },
                                { 'is-invalid': errors.activity },
                              ]"
                              @change="computeDate"
                              id="activitySelect"
                            >
                              <option
                                v-for="item in $store.state.activities"
                                :key="item.id"
                                :value="item.id"
                              >
                                {{ item.name }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="control-label col-md-4">Begin Date</label>
                        <div class="col-md-8">
                          <input
                            v-model="activityPlayer.beginDate"
                            :class="[
                              { 'form-control col-md-8': true },
                              { 'is-invalid': errors.beginDate },
                            ]"
                            type="date"
                          />
                        </div>
                      </div>

                      <div class="form-group row">
                        <label class="control-label col-md-4">End Date</label>
                        <div class="col-md-8">
                          <input
                            v-model="activityPlayer.endDate"
                            :class="[
                              { 'form-control col-md-8': true },
                              { 'is-invalid': errors.endDate },
                            ]"
                            type="date"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="tile-footer">
                    <div class="row">
                      <div class="col-md-8">
                        <button
                          class="btn btn-primary"
                          type="button"
                          @click="addActivityPlayer"
                        >
                          <i class="mdi mdi-check-circle"></i>
                          Add Player
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
    <div class="tile my-3">
      <div class="row" id="tile-Head">
        <div class="col text-center">
          <h3 class="tile-title mb-0">Activities Players</h3>
        </div>
      </div>

      <div class="row justify-content-center mt-2">
        <div class="form-group col-3 mx-2">
          <select
            v-model="selectedActivity"
            class="form-control"
            id="activitySearch"
            @change="searchByActivity"
          >
            <option :value="null" selected disabled key="activitySearch-2">Search by Activity</option>
            <option :value="null" key="activitySearch-1">Get All</option>
            <option
              v-for="item in activities"
              :value="item.id"
              v-bind:key="item.id+'acSearch'"
            >
              {{ item.name }}
            </option>
          </select>
        </div>

        <div class="input-group col-3 form-group p-0 border-0">
          <div class="input-group-prepend"><span class="input-group-text">ID</span></div>
          <input class="form-control" v-model="inputId" @input='resetSearchById' id="exampleInputAmount" type="text" placeholder="Search BY ID">
          <div class="input-group-append">
            <button class=" btn btn-primary" @click="searchById">Search</button>
          </div>
        </div>
        <div class="form-group col-auto mx-2">
          <select
            v-model="selectedEndedSubscription"
            class="form-control"
            id="endedSubscriptionChoose"
            @change="searchForEndedSubscriptions"
          >
            <option :value="null" selected disabled>Show Ended Subscriptions</option>
            <option :value="null">Get All</option>
            <option
              v-for="activity in activities"
              :value="activity.id"
              :key="activity.id+'endedSubs'"
            >
              {{ activity.name }}
            </option>
          </select>
        </div>


      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="tile-body">
            <table class="table table-bordered" id="playerDataTable">
              <thead>
              <tr>
                <th >#</th>
                <th>id</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Activity</th>
                <th>Begin Date</th>
                <th>End Date</th>
                <th>Options</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(playerActivity, index) in activityPlayers" v-bind:key="playerActivity.id+'activityPlayer'">
                <td>{{ index+1 }}</td>
                <td>{{ playerActivity.id }}</td>
                <td>{{ playerActivity.name }}</td>
                <td>{{ playerActivity.phoneNumber }}</td>
                <td>{{ playerActivity.subscription.activity.name }}</td>
                <td>{{ moment(playerActivity.subscription.beginDate).format('yyyy-MM-DD') }}</td>
                <td>{{ moment(playerActivity.subscription.endDate).format('yyyy-MM-DD') }}</td>
                <td>
                  <button
                    class="btn btn-primary"
                    type="button"
                    @click="viewActivityPlayer(playerActivity.id)"
                  >
                    View
                  </button>
                  <button
                    v-if="$auth.user.role == 'SuperAdmin'"
                    class="btn btn-danger"
                    type="button"
                    @click="DeleteActivityPlayer(playerActivity)"
                  >
                    Delete
                  </button>
                  <button class="btn btn-success" type="button" data-toggle="modal" data-target="#reSubscribeModal1"
                          @click="reSubscribe(playerActivity)">
                    Resubscribe
                  </button>

                  <button
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#staticBackdropEditActivityPlayerModal"
                    type="button"
                    @click="AssignActivityPlayer(playerActivity)"
                  >
                    Edit
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row justify-content-start mx-1">
        <div class="col">
          <cleint-only>
          <paginate
            :page-count="Math.ceil($store.state.activityPlayers.count/10)"
            :click-handler="loadDataOfPage"
            :container-class="'pagination'"
            :prev-class="'page-item'"
            :prev-link-class="'page-link'"
            :page-class="'page-item'"
            :page-link-class="'page-link'"
            :next-class="'page-item'"
            :next-link-class="'page-link'"
          ></paginate>
          </cleint-only>
        </div>
      </div>

    </div>
    <div v-if="activityPlayerInfo">
      <reSubscribe :activityPlayer="activityPlayerInfo"/>
    </div>
    <div id = "editActivityPlayer" v-if="editClickedPlayer">
      <editActivityPlayer :activity_Player="editClickedPlayer"/>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import reSubscribe from './reSubscribe.vue'
import editActivityPlayer from './editActivityPlayer.vue'
import login from "../../pages/auth/login";

export default {
  name: "playerActivity",
  components: {reSubscribe, editActivityPlayer},
  data() {
    return {
      activityPlayer: {
        name: null,
        phoneNumber: null,
        beginDate: null,
        endDate: null,
        activity: null,
        price: 0,
      },
      editClickedPlayer: {},
      inputId: null,
      selectedActivity: null,
      errors: {},
      selectedEndedSubscription: null,
      activityPlayerInfo: null,
    };
  },
  methods: {
    moment: (args) => moment(args),
    AssignActivityPlayer: function(player){
      this.editClickedPlayer = player
    },
    addActivityPlayer: function () {
      const validate = this.validateForm();
      if (!validate) return false;

      // 1. send request to create the just the player
      // 2. once the player created we now have it's id in the db
      // 3. then we now have to subscribe him to the activity
      // 4. send request to a subscribe method with the player_id we just got and the activity_id he wants to be part of  and the dates
      // 5. once the subscribe request is done we are done

      // 1

      // Re Check here with  ahmed about the return and the POST
      this.activityPlayer.price = Number(this.activityPlayer.price)
      this.$axios
        .$post("/activityPlayer/new", this.activityPlayer)
        .then((res) => {
          this.$axios
            .$post("activityPlayerSubscription/new", {
              player_id: res.id,
              activity_id: this.activityPlayer.activity,
              price:this.activityPlayer.price,
              beginDate:this.activityPlayer.beginDate,
              endDate:this.activityPlayer.endDate,
            })
            .then((res2) => {
              this.$store.commit('setActivityPlayers', res2)
              this.$swal.fire({
                icon: "success",
                title: "player added successfully!!",
              });
              $("#collapseOne").collapse("hide");
            });
        })
        .catch((err) => {
          let str = "";
          if (err.response.data.message.length) {
            if (typeof err.response.data.message === "object")
              str = err.response.data.message.join("<br>");
            else console.log(err.response.data.message);
          }
          console.log(err);
          this.$swal.fire({
            icon: "error",
            title: "Oops...",
            html: str,
          });
          // alert("There is an error while adding new activity player!");
        });
    },
    computeDate: function () {
      this.activityPlayer.beginDate = moment().format("YYYY-MM-DD");
      this.activityPlayer.endDate = moment()
        .add(1, "month")
        .format("YYYY-MM-DD");
    },
    validateForm: function () {
      this.errors = {};
      let inputs = Object.keys(this.activityPlayer);
      let pass = true;
      inputs.forEach((i) => {
        if (
          !this.activityPlayer[i] ||
          (!this.activityPlayer[i].length &&
            typeof this.activityPlayer[i] === "string")
        ) {
          pass = false;
          this.errors[i] = `${i} is required`;
        }
      });
      return pass;
    },
    DeleteActivityPlayer: function (playerActivity) {
      this.$swal.fire({
        title: `Are you sure you want to delete this player ${playerActivity.name} ? `,
        showDenyButton: true,
        icon: 'question',
        showCancelButton: false,
        confirmButtonText: `Yes`,
        denyButtonText: `cancel`,
      }).then((result) => {
        if (result.isConfirmed) {
          // Delete Player from databases
          this.$axios.$delete('activityPlayer/delete/' + playerActivity.id).then(res => {
            this.$store.commit('deleteActivityPlayer', playerActivity.id)
          }).catch(err => {
            //delete Failed
            this.$swal.fire({
              title: `Deleting player ${playerActivity.name} FAILED`,
              icon: "error",
              text: err.response.data.message
            })
            console.log(err)
            return false
          })
          this.$swal.fire('Player Deleted!', '', 'success')
        }
      })
    },
    viewActivityPlayer: function (item) {
      this.$router.push({
        name: "viewActivityPlayer",
        params: {id: item}
      })
    },
    reSubscribe: async function(activityPlayer){
      this.activityPlayerInfo = activityPlayer
      const activityPlayerId = activityPlayer.id
      const res = await this.$axios.$get('activityPlayerSubscription/' + activityPlayerId)
      await this.$store.commit('setAllActivityPlayersubscriptions', res)
    },
     loadDataOfPage: function (pageNum) {
      this.$axios.$get("/activityPlayer?page=" + pageNum + "&limit=10")
        .then(res => {
          this.$store.commit('setActivityPlayers', res)
        })
    },
    searchForEndedSubscriptions: async function (){
      try{
        if(!this.selectedEndedSubscription){
          await this.resetActivityPlayers()
          return
        }
        this.inputId = null
        this.selectedActivity = null
        const res = await this.$axios.$get("activityPlayer/search/endedSubscriptions/"+this.selectedEndedSubscription+"?limit=10&page=1")
        await this.$store.commit('setActivityPlayers', res)
      }catch (err){
        this.$swal.fire({title:"error happened while searching", icon:"error"})
        console.log("error in activity players (ended subscriptions search) ")
        console.log(err)
      }
    },
    searchById: async function (){
      try{
        if(!this.inputId){
          await this.resetActivityPlayers()
          return
        }
        this.selectedActivity = null
        this.selectedEndedSubscription = null
        const res = await this.$axios.$get("activityPlayer/search/id/"+this.inputId+"?limit=10&page=1")
        await this.$store.commit('setActivityPlayers', res)
      }catch (err){
        this.$swal.fire({title:"error happened while searching", icon:"error"})
        console.log("error in activity players (id search) ")
        console.log(err)
      }
    },
    searchByActivity: async function (){
      try{
        if(!this.selectedActivity){
          await this.resetActivityPlayers()
          return
        }
        this.inputId = null
        this.selectedEndedSubscription = null
        const res = await this.$axios.$get("activityPlayer/search/activity/"+this.selectedActivity+"?limit=10&page=1")
        await this.$store.commit('setActivityPlayers', res)
      }catch (err){
        this.$swal.fire({title:"error happened while searching", icon:"error"})
        console.log("error in activity players (activity search) ")
        console.log(err)
      }
    },
    resetSearchById: async function(){
      if(this.inputId === ""){
        try{
        const res = await this.$axios.$get("activityPlayer?limit=10&page=1")
        await this.$store.commit('setActivityPlayers', res)
      }catch (err){
        this.$swal.fire({title:"error happened while searching", icon:"error"})
        console.log("error in activity players reset ")
        console.log(err)
      }
      }
      
    },
    resetActivityPlayers: async function(){
      try{
        console.log("worked");
        const res = await this.$axios.$get("activityPlayer?limit=10&page=1")
        await this.$store.commit('setActivityPlayers', res)
      }catch (err){
        this.$swal.fire({title:"error happened while searching", icon:"error"})
        console.log("error in activity players reset ")
        console.log(err)
      }
    },
    
  },
  computed: {
    activityPlayers: function (){
      return this.$store.state.activityPlayers.items
    },
    activities:function (){
      return this.$store.state.activities
    },
  },
};
</script>

<style scoped>
</style>
