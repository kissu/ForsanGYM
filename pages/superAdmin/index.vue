<template>
  <div id="superAdminPage">
    <page-title icon="mdi mdi-crown" title="Super Admin Panal"/>
    <div class="row">
      <div class="col-md-12">
        <div class="tile">
          <div class="tile-header">
            <h3>Logs</h3>
          </div>
          <div class="tile-body">
            <table class="table table-striped">
              <thead>
              <tr>
                <th>Admin</th>
                <th>Action</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
              </thead>
              <tbody>
                <tr v-for="(log, index) in logs" :key="index">
                  <td>{{log.adminName}}</td>
                  <td>{{log.log}}</td>
                  <td> {{log.dayDate}}</td>
                  <td>{{log.dayTime}}</td>
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
import PageTitle from "../../components/layout/pageTitle";
import moment from "moment/moment";
export default {
  name: "index",
  components: {PageTitle},
  async asyncData({$axios,$auth,redirect}){
    if ($auth.user.role != "SuperAdmin") {
      redirect('/')
    }
    const logs = await $axios.$get("/log/today")
    return {logs: logs}
  },
  data(){
    return {
      
    }
  },
  methods:{
    talk: function (log) {
      const msgs = {
        "new":":admin added a new :item",
        "edit":":admin editied :item with ID :id",
        "delete":":admin delete a/an :item"
      }

    }
  },
  computed:{

  }
}
</script>

<style scoped>

</style>
