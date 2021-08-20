<template>
  <div>

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
                      <th>Name</th>
                      <th>Phone Number</th>
                      <th>Activity</th>
                      <th>Begin Date</th>
                      <th>End Date</th>
                      <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in activityPlayer" :key="item.id">
                      <td>{{ item.id }}</td>
                      <td>{{ item.activityPlayer.name }}</td>
                      <td>{{ item.activityPlayer.phoneNumber }}</td>
                      <td>{{ item.activity.name }}</td>
                      <td>{{ item.beginDate }}</td>
                      <td>{{ item.endDate }}</td>
                      <td>{{ item.price }}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div class="row flex-row-reverse">
                  <div class="col-auto">
                    <div
                      class="dataTables_paginate paging_simple_numbers"
                      id="sampleTable_paginate"
                    >
                      <ul class="pagination">
                        <li class="paginate_button page-item previous"
                            :class="{disabled:(currentPage <= 1)}"
                            id="previous_btn">
                          <button :disabled="(currentPage <= 1)" @click="goToPage(currentPage-1)" href="#"
                                  aria-controls="sampleTable" data-dt-idx="0" tabindex="0"
                                  class="page-link">
                            Previous
                          </button>
                        </li>
                        <li v-for="page in Math.ceil(count/perPage)"
                            class="paginate_button page-item"
                            :class="{active: (page === currentPage)}"
                            :key="page"
                        >
                          <button
                            :disabled="(page === currentPage)"
                            aria-controls="sampleTable" data-dt-idx="1" tabindex="0"
                            @click="goToPage(page)"
                            class="page-link">
                            {{ page }}
                          </button>
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

  </div>
</template>

<script>
export default {
  data() {
    return {
      searchByActivity: null,
      currentPage: 1,
      perPage: 10,
    };
  },
  async asyncData({route, $axios, store}) {
    const playerId = route.params.id
    try {
      const res = await $axios.$get('activityPlayerSubscription/' + playerId)
      await store.commit('setAllActivityPlayersubscriptions', res)
    } catch (err) {
      console.log('error on plan income load (layout/Default) :')
      console.log(err)
    }


  },
  methods: {
    goToPage: function () {

    }
  },
  computed: {
    activityPlayer: function () {
      return this.$store.state.activityPlayerSubscriptions.items
    },
    count: function () {
      return this.activityPlayer.length
    }
  },

};
</script>

<style>
</style>
