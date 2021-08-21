<template>
  <div id="superAdminPage">
    <page-title icon="mdi mdi-crown" title="Super Admin Panal"/>
    <div class="row my-2">
      <div class="col-12">
        <div class="tile">
          <div class="tile-body">
            <div class="btn-group col">
              <button
                class="btn btn-primary w-100 h-100"
                type="button"
                data-toggle="modal"
                data-target="#AddAdminModal"
              >
                <i class="mdi mdi-plus-box"></i> Add Admin
              </button>
              <button
                class="btn btn-secondary w-100 h-100"
                type="button"
                v-on:click="$router.push({name:'viewAdmins' })"
              >
                <i class="mdi mdi-search-web"></i> View Admins
              </button>
              <button
                class="btn btn-danger w-100 h-100"
                type="button"
                data-toggle="modal"
                data-target="#deleteAdminModal"
              >
                <i class="mdi mdi-trash-can-outline"></i> Delete Admin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="tile">
          <div class="tile-header">
            <h3>Logs</h3>
          </div>
          <div class="tile-body">
            <div class="row flex-row-reverse mb-4">
              <div class="col-md-3">
                <div class="text-left">
                  <input
                    type="date"
                    class="form-control"
                    placeholder="Select Date"
                    aria-controls="sampleTable"
                    v-model="logDate"
                  />
                </div>
              </div>
            </div>
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
                <td>{{ log.adminName }}</td>
                <td>{{ log.log }}</td>
                <td>{{ log.dayDate }}</td>
                <td>{{ log.dayTime }}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <paging v-on:getDataAtPage="loadDataOfPage" :count="count" per-page="20"/>
        </div>
      </div>
    </div>
    <add-new-admin/>
    <delete-admin/>
  </div>
</template>

<script>
import PageTitle from "../../components/layout/pageTitle";
import moment from "moment/moment";
import AddNewAdmin from "../../components/superAdminPanal/addNewAdmin";
import DeleteAdmin from "../../components/superAdminPanal/deleteAdmin";
import Paging from "../../components/paging";

export default {
  name: "index",
  components: {Paging, DeleteAdmin, AddNewAdmin, PageTitle},
  async asyncData({$axios, $auth, redirect, store}) {
    if ($auth.user.role != "SuperAdmin") {
      redirect("/");
    }
    const logs = await $axios.$get("/log/today?limit=20");

    if (!store.state.admins.isLoaded) {
      try {
        const res = await $axios.$get('auth/allAdmins')
        store.commit('setAdmins', res)
      } catch (err) {
        console.log("Error on load admins : ")
        console.log(err)
      }
    }

    return {logs: logs.items, count: logs.count,logDate: moment().format('yyyy-MM-DD')};
  },
  data() {
    return {
      logDate: null
    };
  },
  methods: {
    loadDataOfPage: function (page) {
      this.$axios.$post("/log/at?page=" + page + "&limit=20",{
        date: this.logDate
      })
        .then(res => {
          this.logs = res.items
          this.count = res.count
        })
    }
  },
  computed: {},
  watch: {
    logDate: async function (d) {
      const res = await this.$axios.$post("/log/at?limit=20", {
        date: d
      })
      this.logs = res.items
      this.count = res.count
    }
  }
};
</script>

<style scoped>
</style>
