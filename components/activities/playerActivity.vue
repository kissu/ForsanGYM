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
                            class="form-control"
                            type="text"
                            placeholder="Enter full name"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="control-label col-md-4">Begin Date</label>
                        <div class="col-md-8">
                          <input
                            v-model="activityPlayer.beginDate"
                            class="form-control col-md-8"
                            type="date"
                          />
                        </div>
                      </div>

                      <div class="form-group row">
                        <label class="control-label col-md-4">End Date</label>
                        <div class="col-md-8">
                          <input
                            v-model="activityPlayer.endDate"
                            class="form-control col-md-8"
                            type="date"
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
                              class="form-control"
                              id="activitySelect"
                            >
                              <option
                                v-for="item in $store.state.activities"
                                :key="item.id"
                              >
                                {{ item.name }}
                              </option>
                            </select>
                          </div>
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
                          data-toggle="collapse"
                          data-target="#collapseOne"
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
            v-model="this.searchResult"
            class="form-control col-md-6"
            id="activitySelect"
          >
            <option v-for="item in $store.state.activities" :key="item.id">
              {{ item.name }}
            </option>
          </select>

        </div>

        <label class="control-label" for="generalSearch">Search : </label>
        <div class="col-3">
          <input
            class="form-control form-control-sm col-md-6"
            type="search"
            placeholder="Search Here"
            aria-controls="#playerDataTable"
            id="generalSearch"
          />
        </div>
        <div class="row">
        <div id="col-md-4">
          <button class="btn btn-info" type="button" style="margin-left: -100px">
            &nbsp;&nbsp;&nbsp; Search &nbsp;&nbsp;&nbsp;
          </button>
        </div>
        </div>
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
                <tr v-for="playerActivity in $store.state.activityPlayers" :key="playerActivity.id">
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
      searchResult: {
        activity: null, // search by activity
      },
    };
  },
  methods: {
    addActivityPlayer: function () {
      this.$axios
        .$post("/activity-player/new-Activity-player", this.activityPlayer)
        .then((res) => {
          this.$store.commit("addNewActivityPlayer", res);
        })
        .catch((err) => {
          console.log(err);
          alert("There is an error while adding new activity player!");
        });
    },
    
  },
};
</script>

<style scoped>
</style>
