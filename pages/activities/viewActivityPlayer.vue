<template>
  <div>
  <page-title :title="`${activityPlayer.name} - ${activityPlayer.phoneNumber}`" icon="mdi mdi-account-circle" />
    <div class="tile my-3">
      <div class="row" id="tile-Head">
        <div class="col-3 pr-0">
          <h3 class="tile-title"></h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="tile-body">
            <div class="row">
              <div class="col-md-12">
                <div class="tile-body">
                  <table class="table table-bordered" id="playerDataTable">
                    <thead>
                    <tr>
                      <th>#</th>
                      <th>id</th>
                      <th>Activity</th>
                      <th>Begin Date</th>
                      <th>End Date</th>
                      <th>Price</th>
                      <th>Options</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in activityPlayerSubscriptions" :key="item.id">
                      <td>{{ index+1}}</td>
                      <td>{{ item.id }}</td>
                      <td>{{ item.activity.name }}</td>
                      <td>{{ moment(item.beginDate).format('yyyy-MM-DD') }}</td>
                      <td>{{ moment(item.endDate).format('yyyy-MM-DD') }}</td>
                      <td>{{ item.price }}</td>
                      <td>
                        <button class="btn btn-warning" type="button" data-toggle="modal"
                                :data-target="'#editActivityPlayerSubscription'+item.id"
                                @click="clickedSubscription = item"
                        >Edit</button>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
<!--                <paging per-page="10" :count="$store.state.activityPlayerSubscriptions.count" v-on:getDataAtPage="loadDataOfPage"/>-->
              </div>
            </div>
            <div class="row justify-content-center">
              <client-only>
              <paginate
                :page-count="Math.ceil($store.state.activityPlayerSubscriptions.count/10)"
                :click-handler="loadDataOfPage"
                :container-class="'pagination'"
                :prev-class="'page-item'"
                :prev-link-class="'page-link'"
                :page-class="'page-item'"
                :page-link-class="'page-link'"
                :next-class="'page-item'"
                :next-link-class="'page-link'"
              ></paginate>
              </client-only>
            </div>

          </div>
        </div>
      </div>
    </div>
  <div v-if="clickedSubscription">
    <edit-activity-player-subscription  :subscription-sent="Object.assign({},clickedSubscription)" />
  </div>
  </div>
</template>

<script>
import PageTitle from "../../components/layout/pageTitle";
import EditActivityPlayerSubscription from "../../components/activities/editActivityPlayerSubscription";
import Paging from "../../components/paging";
import moment from 'moment'
export default {
  components: {Paging, EditActivityPlayerSubscription, PageTitle},
  data() {
    return {
      searchByActivity: null,
      currentPage: 1,
      perPage: 10,
      clickedSubscription:null,
    };
  },
  async asyncData({route, $axios, store}) {
    const playerId = route.params.id
    try {
      const res = await $axios.$get('activityPlayerSubscription/' + playerId + '?limit=10')
      await store.commit('setAllActivityPlayersubscriptions',res)
      return {activityPlayer:res.items[0].activityPlayer}
    } catch (err) {
      console.log('error on plan income load (layout/Default) :')
      console.log(err)
    }


  },
  methods: {
    loadDataOfPage: function (page) {
      this.$axios.$get('activityPlayerSubscription/' + this.$route.params.id+'?limit=10&page='+page)
        .then(res => {
          this.$store.commit('setAllActivityPlayersubscriptions',res)
        })
    },
    moment: (args) => moment(args)
  },
  computed: {
    activityPlayerSubscriptions: function (){
      return this.$store.state.activityPlayerSubscriptions.items
    }
  },

};
</script>

<style>
</style>
