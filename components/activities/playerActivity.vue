<template>
  <div id="player-activity-table">
    <div class="accordion" id="accordionExample">
      <div class="card col-6 px-0">
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
                            :class="[{'form-control':true},{'is-invalid':errors.name}]"
                            type="text"
                            placeholder="Enter full name"
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
                              :class="[{'form-control':true},{'is-invalid':errors.activity}]"
                              @change="computeDate"
                              id="activitySelect"
                            >
                              <option
                                v-for="item in $store.state.activities"
                                :key="item.id"
                                :value='item.id'
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
                            :class="[{'form-control col-md-8':true},{'is-invalid':errors.beginDate}]"
                            type="date"
                          />
                        </div>
                      </div>

                      <div class="form-group row">
                        <label class="control-label col-md-4">End Date</label>
                        <div class="col-md-8">
                          <input
                            v-model="activityPlayer.endDate"
                            :class="[{'form-control col-md-8':true},{'is-invalid':errors.endDate}]"
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
                          <i class="fa fa-fw fa-lg fa-check-circle"></i>
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
        <div class="col-4">
          <h3 class="tile-title">Activities Players</h3>
        </div>
        <label class="control-label" for="activitySearch"
          >Search By Activity :
        </label>
        <div class="form-group col-md-3">
          <select
            v-model="searchByActivity"
            class="form-control col-md-6"
            id="activitySearch"
          >
            <option v-for="item in $store.state.activities" :value="item.id" :key="item.id">
              {{ item.name }}
            </option>
          </select>
        </div>

        <label class="control-label" for="generalSearch">Search : </label>
        <div class="col-3">
          <input
            class="form-control form-control-sm col-md-6"
            type="search"
            placeholder="Find player by id"
            v-model="searchById"
            aria-controls="#playerDataTable"
            id="generalSearch"
          />
        </div>
        <div class="row"></div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="tile-body">
            <table class="table table-bordered" id="playerDataTable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Activity</th>
                  <th>Begin Date</th>
                  <th>End Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="playerActivity in searching" :key="playerActivity.id">
                  <td>{{ playerActivity.id }}</td>
                  <td>{{ playerActivity.name }}</td>
                  <td>{{ playerActivity.activity }}</td>
                  <td>{{ playerActivity.beginDate }}</td>
                  <td>{{ playerActivity.endDate }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
//import func from 'vue-editor-bridge';
export default {
  name: "playerActivity",
  data() {
    return {
      activityPlayer: {
        name: null,
        beginDate: null,
        endDate: null,
        activity: null,
      },
      searchById: null,
      searchByActivity: null,
      errors: {}
    };
  },
  methods: {
    addActivityPlayer: function () {
      const validate = this.validateForm();
      if (!validate) return false;

      // 1. send request to create the just the player
      // 2. once the player created we now have it's id in the db
      // 3. then we now have to subscribe him to the activity
      // 4. send request to a subscribe method with the player_id we just got and the activity_id he wants to be part of  and the dates
      // 5. once the subscribe request is done we are done

      // 1
      this.$axios.$post("/activityPlayer/new", this.activityPlayer)
        .then((res) => {
          return this.$axios.$post("activityPlayerSubscription/new",{
            player_id: res.id,
            activity_id: this.activityPlayer.activity,
            ...this.activityPlayer
          }).then(res => {
            this.$store.commit("addNewActivityPlayer", res);
            this.$swal.fire({
              icon: "success",
              title: "player added successfully!!"
            })
            $("#collapseOne").collapse('hide')
          })
        })
        .catch((err) => {
          let str = ""
          if(err.response.data.message.length){
            if (typeof err.response.data.message === 'object')
              str = err.response.data.message.join("<br>")
            else
              console.log(err.response.data.message);
          }
          console.log(err);
         this.$swal.fire({
          icon: "error",
          title: "Oops...",
          html: str
        })
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
      let inputs = Object.keys(this.activityPlayer)
      let pass = true;
      inputs.forEach(i => {
        if (!this.activityPlayer[i] || (!this.activityPlayer[i].length && typeof this.activityPlayer[i] === "string")) {
          pass = false
          this.errors[i] = `${i} is required`
        }
      })
      return pass
    },
  },
  computed:{
    searching: function(){
      let dataArray = this.$store.state.activityPlayers
      if(this.searchById){
        dataArray = dataArray.filter(holder => Number(this.searchById) === holder.id)
      }
      if(this.searchByActivity){
        dataArray = dataArray.filter(holder => this.searchByActivity === holder.activity_id)
      }
      return dataArray
    }
  }
};
</script>

<style scoped>
</style>
