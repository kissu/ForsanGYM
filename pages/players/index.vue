<template>
  <div id="PlayersPage">
    <page-title title="Players" icon="fa fa-user"/>

    <add-new-player/>

    <div class="row mt-3">
      <div class="col-md-12">
        <div class="tile">
          <h3 class="text-center card-header">Players Table</h3>
          <div class="tile-body">
            <div class="table-responsive">
              <div
                id="sampleTable_wrapper"
                class="
                  dataTables_wrapper
                  container-fluid
                  dt-bootstrap4
                  no-footer
                "
              >
                <div class="row mt-2 mb-0">
                  <div class="col-md-8 form-group " >
                    <div id="sampleTable_filter" class="dataTables_filter text-left" >
                      <label>Search :
                        <input
                        type="search"
                        class="form-control form-control-sm"
                        placeholder="Find a player by id "
                        aria-controls="sampleTable"
                        v-model="searchPlayerId"
                      /></label>
                    </div>
                  </div>

                  <div class="col-md-4 form-group">
                      <select
                        name="sampleTable_length"
                        aria-controls="sampleTable"
                        class="form-control form-control-sm"
                        v-model="pickedSearchOption"
                      >
                        <option :value="null" disabled selected>Search By Plan</option>
                        <option :value="null" >All</option>
                        <option v-for="plan in activatedPlans" :value="plan" :key="plan.id">{{plan.name}}</option>
                      </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <table
                      class="
                        table table-hover table-bordered
                        dataTable
                        no-footer
                      "
                      id="sampleTable"
                      role="grid"
                      aria-describedby="sampleTable_info"
                    >
                      <thead>
                      <tr>
                        <th>#</th>
                        <th>id</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Begin Date</th>
                        <th>End Date</th>
                        <th>Plan</th>
                        <th>Operations</th>
                      </tr>
                      </thead>
                      <tbody>
                      <!-- Start looping -->
                      <tr v-for="(item, index) in playersData" :key="item.id">
                        <td>{{ index+1 }}</td>
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.phoneNumber }}</td>
                        <td>{{ item.subscription.beginDate }}</td>
                        <td>{{ item.subscription.endDate }}</td>
                        <td>{{ item.subscription.plan.name }}</td>
                        <td>
                          <router-link :to="{name: 'singlePlayer', params: { id: item.id}}"  class="btn btn-primary" type="button">View</router-link>
                          <button class="btn btn-danger" type="button" @click="DeletePlayer(item)" data-toggle="modal"
                                  :data-target="'#DeleteCheckModal'+ChosenPlayer.id">Delete</button>
                          <button class="btn btn-primary" type="button" style="margin-left:5px">Subscriptions</button>
                        </td>
                      </tr>
                      </tbody>

                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 col-md-5"></div>
                  <div class="col-sm-12 col-md-7">
                    <div
                      class="dataTables_paginate paging_simple_numbers"
                      id="sampleTable_paginate"
                    >
                      <ul class="pagination">
                        <li
                          class="paginate_button page-item previous"
                          id="previous_btn"
                        >
                          <a
                            href="#"
                            aria-controls="sampleTable"
                            data-dt-idx="0"
                            tabindex="0"
                            class="page-link"
                          >Previous</a
                          >
                        </li>
                        <li class="paginate_button page-item active">
                          <a
                            href="#"
                            aria-controls="sampleTable"
                            data-dt-idx="1"
                            tabindex="0"
                            class="page-link"
                          >1</a
                          >
                        <li
                          class="paginate_button page-item previous disabled"
                          id="Next_btn"
                        >
                          <a
                            href="#"
                            aria-controls="sampleTable"
                            data-dt-idx="0"
                            tabindex="0"
                            class="page-link"
                          >Next</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="ChosenPlayer.id" id="DeleeSection">
    <DeleteCheck :action-name="'deletePlayer'" :item-id="ChosenPlayer.id"
                 :header-msg="'Are you sure you want to delete this player ?'"
                 delete_url="players/delete-player/:id" commit-action="deletePlayer">
      <p><b>Name : </b>{{ChosenPlayer.name}}</p>
      <p><b>Phone : </b>{{ChosenPlayer.phoneNumber}}</p>
      <p><b>Plan : </b>{{ChosenPlayer.plan}}</p>
    </DeleteCheck>
    </div>

  </div>
</template>

<script>
import PageTitle from "../../components/layout/pageTitle";
import AddNewPlayer from '../../components/players/addNewPlayer.vue';
import DeleteCheck from "../../components/layout/deleteCheck";

export default {
  components: {DeleteCheck, PageTitle, AddNewPlayer},
  data() {
    return {
      ChosenPlayer:{},
      pickedSearchOption:null,
      searchPlayerId:null
    }
  },
  methods: {
    DeletePlayer:function (item){
      this.ChosenPlayer = item
    },
  },
  computed:{
    activatedPlans: function (){
      return this.$store.state.plans.filter(plan => plan.isActivated )
    },
    playersData: function (){
      let returnArr = this.$store.state.players
      if(this.pickedSearchOption){
        returnArr = returnArr.filter(player=>{
          return player.subscription.plan.id === this.pickedSearchOption.id
        })
      }
      if(this.searchPlayerId){
        this.searchPlayerId = Number(this.searchPlayerId)
        console.log("Id : ")
        console.log(this.searchPlayerId)
        console.log(typeof this.searchPlayerId)
        returnArr = returnArr.filter(player=>{
          return player.id === this.searchPlayerId
        })
      }
      return returnArr
    }
  }
};
</script>

<style>
</style>
