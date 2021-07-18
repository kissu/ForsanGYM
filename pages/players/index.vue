<template>
  <div id="PlayersPage">
    <page-title title="Players" icon="fa fa-user"/>

    <add-new-player/>


    <!--Testing area -->
    <div class="row mt-3">
      <div class="col-md-12">
        <div class="tile">
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
                <div class="row">
                  <div id="col-md-6">
                    <div id="sampleTable_filter" class="dataTables_filter">
                      <label
                      >Search:<input
                        type="search"
                        class="form-control form-control-sm"
                        placeholder=""
                        aria-controls="sampleTable"
                      /></label>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div id="sampleTable_length" class="dataTables_length">
                      <label style="margin-left:10px"
                      >Search By
                        <select
                          name="sampleTable_length"
                          aria-controls="sampleTable"
                          class="form-control form-control-sm"
                        >
                          <option value="Plan">Plan</option>
                        </select>
                      </label>
                    </div>
                  </div>

                  <div id="col-md-4">
                    <button class="btn btn-info" type="button" style="margin-left:10px">
                      &nbsp;&nbsp;&nbsp; Search &nbsp;&nbsp;&nbsp;
                    </button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
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
                      <tr v-for="(item, index) in $store.state.players" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.phoneNumber }}</td>
                        <td>{{ item.beginDate }}</td>
                        <td>{{ item.endDate }}</td>
                        <td>{{ item.plan }}</td>
                        <td>
                          <router-link :to="{name: 'singlePlayer', params: { id: item.id, name: item.name }}" class="btn btn-primary" type="button">View</router-link>
                          <button class="btn btn-danger" type="button" style="margin-left:5px">Delete</button>
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
  </div>
</template>

<script>
import PageTitle from "../../components/layout/pageTitle";
import AddNewPlayer from '../../components/players/addNewPlayer.vue';

export default {
  components: {PageTitle, AddNewPlayer},
  data() {
    return {
      users: [
        {
          name: "Ahmed", phoneNumber: "123456", beginDate: "1/1/2020", endDate: "1/2/2020", plan: "Monthly"
        },
        {
          name: "ALi", phoneNumber: "123456", beginDate: "1/1/2020", endDate: "1/2/2020", plan: "Monthly"
        }
      ],
    }
  },
  methods: {

  }
};
</script>

<style>
</style>
