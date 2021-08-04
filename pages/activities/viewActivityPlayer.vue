<template>
  <div>

    <div class="tile my-3">
      <div class="row" id="tile-Head">
        <div class="col-3 pr-0">
          <h3 class="tile-title"> </h3>
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
                        <th>Activity</th>
                        <th>Begin Date</th>
                        <th>End Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in activityPlayer" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.activityPlayer.name }}</td>
                        <td>{{ item.activity.name }}</td>
                        <td>{{ item.beginDate }}</td>
                        <td>{{ item.endDate }}</td>
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
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchByActivity: null,
    };
  },
  computed: {
      activityPlayer: function(){
        const activityPlayerId = Number(this.$route.params.id);
        return this.$store.state.activityPlayerSubscriptions.filter(
            (actPlayer) => {
                console.log(actPlayer.activityPlayer.id, activityPlayerId);
            return actPlayer.activityPlayer.id === activityPlayerId;
            }
        );
      }
  },
};
</script>

<style>
</style>