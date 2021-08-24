<template>
  <div id="PlayersPage">
    <page-title title="Players" icon="mdi mdi-account" />

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
                <div class="row mt-2 mb-0 justify-content-center">
                  <div class="col-md-auto">
                    <select name="searchOptions" id="searchOptionsId" class="form-control form-control-sm"
                            v-model="pickedSearchOption">
                      <option :value="null" disabled selected>Choose search options</option>
                      <option :value="null">Default</option>
                      <option v-for="searchOption in searchOptions" :value="searchOption.value" :key="searchOption.id">
                        {{ searchOption.name }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-auto form-group ">
                    <div class=" text-left">
                      <input
                        type="search"
                        class="form-control form-control-sm"
                        placeholder="Search here"
                        aria-controls="sampleTable"
                        v-model="searchInput"
                      />
                    </div>
                  </div>

                  <div class="col-md-auto form-group">
                    <select
                      name="sampleTable_length"
                      class="form-control form-control-sm"
                      v-model="pickedPlan"
                    >
                      <option :value="null" disabled selected>Search By Plan</option>
                      <option :value="null">Default</option>
                      <option v-for="plan in activatedPlans" :value="plan" :key="plan.id">{{ plan.name }}</option>
                    </select>
                  </div>
                  <label for="endedSubscriptionsChoise">Ended Subscriptions</label>
                  <div class="col-auto">
                    <input type="checkbox" id="endedSubscriptionsChoise" v-model="endedSubsMarked">
                  </div>
                  <div class="col-auto">
                    <a :href="API_URL+'/csv'" target="_blank" class="btn btn-primary">
                      Download Excel Sheet
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <table
                      class="
                        table table-hover table-bordered
                        dataTable
                        no-footer
                        text-break
                      "
                      id="sampleTable"
                      role="grid"
                      aria-describedby="sampleTable_info"
                      width="100%"
                    >
                      <thead>
                      <tr>
                        <th>#</th>
                        <th>id</th>
                        <th width="20%">Name</th>
                        <th>Phone Number</th>
                        <th>Begin Date</th>
                        <th>End Date</th>
                        <th>Plan</th>
                        <th width="28%">Options</th>
                      </tr>
                      </thead>
                      <tbody>
                      <!-- Start looping -->
                      <tr v-for="(item, index) in playersData" :key="item.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.phoneNumber }}</td>
                        <td>{{ moment(item.subscription.beginDate).format('yyyy-MM-DD') }}</td>
                        <td>{{ moment(item.subscription.endDate).format('yyyy-MM-DD')}}</td>
                        <td v-if="item.subscription.plan!=null">{{ item.subscription.plan.name }}</td>
                        <td v-else>Deleted Plan</td>
                        <td>
                          <button class="btn btn-primary" type="button" @click="viewPlayer(item)">View</button>
                          <button v-if="$auth.user.role == 'SuperAdmin'" class="btn btn-danger" type="button" @click="DeletePlayer(item)">Delete</button>
                          <button class="btn btn-success " type="button" @click="clickedPlayer = item"
                                  data-toggle="modal" data-target="#resubscribeModal">Resubscribe
                          </button>
                        </td>
                      </tr>
                      </tbody>

                    </table>
                  </div>
                </div>
<!--                <paging :count="$store.state.players.count" per-page="10"  v-on:getDataAtPage="loadDataOfPage"/>-->
                <div class="row justify-content-center">
                  <paginate
                    :page-count="Math.ceil($store.state.players.count/10)"
                    :click-handler="loadDataOfPage"
                    :container-class="'pagination'"
                    :prev-class="'page-item'"
                    :prev-link-class="'page-link'"
                    :page-class="'page-item'"
                    :page-link-class="'page-link'"
                    :next-class="'page-item'"
                    :next-link-class="'page-link'"
                  ></paginate>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div v-if="clickedPlayer">
      <resubscribe :active-plans="activatedPlans" :player="clickedPlayer"/>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../components/layout/pageTitle";
import AddNewPlayer from '../../components/players/addNewPlayer.vue';
import DeleteCheck from "../../components/layout/deleteCheck";
import moment from "moment/moment";
import Resubscribe from "../../components/players/resubscribe";
import axios from "axios";
import Paging from "../../components/paging";

export default {
  components: {Paging, Resubscribe, DeleteCheck, PageTitle, AddNewPlayer},
  data() {
    return {
      API_URL: process.env.API_URL,
      pickedPlan: null,
      searchOptions: [
        {name: "By ID", value: 'id'},
        {name: "By begin Date", value: 'beginDate'},
        {name: "By endDate", value: 'endDate'},
        {name: "By Phone Number", value: 'phoneNumber'},
      ],
      endedSubsMarked: false,
      clickedPlayer: null,
      searchInput: null,
      pickedSearchOption: null,
      MEDIA_API:process.env.MEDIA_API
    }
  },
  async asyncData({$axios, store}){
    if(!store.state.players.isLoaded){
      try {
        const res = await $axios.$get('/player?limit=10&page=1')
        await store.commit('setPlayers', res)
      } catch (err) {
        console.log('error on Players load (pages/players/index) :')
        console.log(err)
      }
    }
  },
  methods: {
    DeletePlayer: function (item) {
      let text = ""
      if (item.subscription.plan === null) {
        // plan is deleted
        text = `ID : ${item.id}, Phone : ${item.phoneNumber}, Plan : Deleted Plan`
      } else {
        text = `ID : ${item.id}, Phone : ${item.phoneNumber}, Plan : ${item.subscription.plan.name}`
      }
      this.$swal.fire({
        title: `Are you sure you want to delete player ${item.name} ? `,
        showDenyButton: true,
        icon: 'question',
        text: text,
        showCancelButton: false,
        confirmButtonText: `Yes`,
        denyButtonText: `cancel`,
      }).then((result) => {
        if (result.isConfirmed) {
          // Delete Player from databases

          this.$axios.$delete('player/delete/' + item.id).then(() => {
            if(item.photo)
              axios.delete(`${this.MEDIA_API}/photo/delete/${item.photo}`).catch(err=>{
                this.$swal.fire({
                  title: `Deleting player ${item.name} FAILED`,
                  icon: "error",
                  text: err.response.data.message
                })
                console.log(err)
                return false
              })
            this.$store.commit('deletePlayer', item.id)
          }).catch(err => {
            //delete Failed
            this.$swal.fire({
              title: `Deleting player ${item.name} FAILED`,
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
    viewPlayer: function (player) {
      this.$router.push({
        name: 'singlePlayer',
        params: {
          id: player.id
        },
      })
    },
    loadDataOfPage: function (page){
      this.$axios.$get('/player?limit=10&page='+page).then(res=>{
        this.$store.commit('setPlayers', res)
      })
    },
    moment: (args) => moment(args),
  },
  computed: {
    activatedPlans: function () {
      return this.$store.state.plans.filter(plan => plan.isActivated)
    },
    playersData: function () {

      let returnArr = this.$store.state.players.items
      if (this.endedSubsMarked) {
        returnArr = returnArr.filter(player => {
          return moment(player.subscription.endDate).isBefore(moment())
        })
      }
      if (this.pickedPlan) {
        returnArr = returnArr.filter(player => {
          return player.subscription.plan.id === this.pickedPlan.id
        })
      }
      if (this.pickedSearchOption === null) {
        // no picked search
        return returnArr
      } else if (this.pickedSearchOption === 'beginDate' && this.searchInput) {
        return returnArr.filter(data => data.subscription.beginDate === this.searchInput)
      } else if (this.pickedSearchOption === 'endDate' && this.searchInput) {
        return returnArr.filter(data => data.subscription.endDate === this.searchInput)
      } else if (this.pickedSearchOption === 'id' && this.searchInput) {
        return returnArr.filter(data => data.id === Number(this.searchInput))
      } else if (this.pickedSearchOption === 'phoneNumber' && this.searchInput) {
        return returnArr.filter(data => data.phoneNumber === this.searchInput)
      }
      return returnArr
    },

  },
};
</script>

<style>
</style>
