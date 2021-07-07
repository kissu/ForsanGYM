<template>
  <div id="PlayersPage">
    <page-title title="Players" icon="fa fa-user" />

    <div class="row">
      <div class="col-auto">
        <div class="dropdown">
          <h3 aria-haspopup="true" aria-expanded="false" data-target="dropdown"
              @click="toggleDropDown('#editName')" class="hi">123</h3>
          <form id="editName" style="width: 250px" class="dropdown-menu p-4">
            <div class="form-group">
              <label for="exampleDropdownFormEmail2">Email address</label>
              <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
          </form>
        </div>
        <div class="dropdown">
          <h3 aria-haspopup="true" aria-expanded="false" data-target="dropdown"
              @click="toggleDropDown('#editName1')" class="hi">nnnnnn</h3>
          <form id="editName1" style="width: 250px" class="dropdown-menu p-4">
            <div class="form-group">
              <label for="exampleDropdownFormEmail2">Email</label>
              <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
          </form>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="tile">
          <h3 class="tile-title">Add new player</h3>
          <div class="tile-body">
            <form class="form-horizontal">
              <div class="form-group row">
                <label class="control-label col-md-3">Name</label>
                <div class="col-md-8">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter full name"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="control-label col-md-3">Phone number</label>
                <div class="col-md-8">
                  <input
                    class="form-control col-md-8"
                    type="tel"
                    placeholder="Enter the mobile number"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="control-label col-md-3">Begin date</label>
                <div class="col-md-8">
                  <input class="form-control col-md-8" type="date" />
                </div>
              </div>
              <div class="form-group row">
                <label class="control-label col-md-3">End date</label>
                <div class="col-md-8">
                  <input class="form-control col-md-8" type="date" />
                </div>
              </div>
              <div class="form-group row">
                <label class="control-label col-md-3">plan</label>
                <div class="col-md-9">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="plan"
                      />Monthly
                    </label>
                  </div>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="plan"
                      />Quarterly
                    </label>
                  </div>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="plan"
                      />Half year
                    </label>
                  </div>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="plan"
                      />Year
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="control-label col-md-3">Player's photo</label>
                <div class="col-md-8">
                  <input class="form-control" type="file" />
                </div>
              </div>
            </form>
          </div>
          <div class="tile-footer">
            <div class="row">
              <div class="col-md-8 col-md-offset-3">
                <button class="btn btn-primary" type="button">
                  <i class="fa fa-fw fa-lg fa-check-circle"></i>Register</button
                >&nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Testing area -->
    <div class="row">
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

                  <div id="col-md-4">
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
                        <tr>
                          <td>1</td>
                          <td>Sadd Saeed</td>
                          <td>123456</td>
                          <td>20-10-2020</td>
                          <td>20-11-2020</td>
                          <td>Monthly</td>
                          <td><button class="btn btn-primary" type="button" >View</button>
                              <button class="btn btn-warning" type="button" style="margin-left:5px">Edit</button>
                              <button class="btn btn-danger" type="button" style="margin-left:5px">Delete</button>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>abdullah Ibrahim</td>
                          <td>654321</td>
                          <td>10-06-2020</td>
                          <td>20-09-2020</td>
                          <td>Quarterly</td>
                          <td><button class="btn btn-primary" type="button" >View</button>
                              <button class="btn btn-warning" type="button" style="margin-left:5px">Edit</button>
                              <button class="btn btn-danger" type="button" style="margin-left:5px">Delete</button>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Yassir Ahmed</td>
                          <td>987654</td>
                          <td>20-10-2020</td>
                          <td>20-11-2021</td>
                          <td>Yearly</td>
                          <td><button class="btn btn-primary" type="button" >View</button>
                              <button class="btn btn-warning" type="button" style="margin-left:5px">Edit</button>
                              <button class="btn btn-danger" type="button" style="margin-left:5px">Delete</button>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Ali Mohammed</td>
                          <td>456789</td>
                          <td>03-01-2020</td>
                          <td>03-07-2020</td>
                          <td>Half Year</td>
                          <td><button class="btn btn-primary" type="button">View</button>
                              <button class="btn btn-warning" type="button" style="margin-left:5px">Edit</button>
                              <button class="btn btn-danger" type="button" style="margin-left:5px">Delete</button>
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
                          class="paginate_button page-item previous disabled"
                          id="sampleTable_previous"
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
                        </li>
                        <li class="paginate_button page-item">
                          <a
                            href="#"
                            aria-controls="sampleTable"
                            data-dt-idx="2"
                            tabindex="0"
                            class="page-link"
                            >2</a
                          >
                        </li>
                        <li class="paginate_button page-item">
                          <a
                            href="#"
                            aria-controls="sampleTable"
                            data-dt-idx="3"
                            tabindex="0"
                            class="page-link"
                            >3</a
                          >
                        </li>
                        <li class="paginate_button page-item">
                          <a
                            href="#"
                            aria-controls="sampleTable"
                            data-dt-idx="4"
                            tabindex="0"
                            class="page-link"
                            >4</a
                          >
                        </li>
                        <li class="paginate_button page-item">
                          <a
                            href="#"
                            aria-controls="sampleTable"
                            data-dt-idx="5"
                            tabindex="0"
                            class="page-link"
                            >5</a
                          >
                        </li>
                        <li class="paginate_button page-item">
                          <a
                            href="#"
                            aria-controls="sampleTable"
                            data-dt-idx="6"
                            tabindex="0"
                            class="page-link"
                            >6</a
                          >
                        </li>
                        <li
                          class="paginate_button page-item next"
                          id="sampleTable_next"
                        >
                          <a
                            href="#"
                            aria-controls="sampleTable"
                            data-dt-idx="7"
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

import PageTitle from "../components/layout/pageTitle";

export default {
  components: {PageTitle},
  data () {
    return {
      dropDowns: []
    };
  },
  mounted() {

  },
  methods: {
    toggleDropDown : function (dropDwn) {
      console.log('requested toggle on '+dropDwn)
      if (this.dropDowns[dropDwn]) {
        console.log(dropDwn+' is in array and it\'s value is true')
        // the dropdown is active and shown
        // now i have to hide it
        $(dropDwn).dropdown('hide');
        this.dropDowns[dropDwn] = false;
      } else {
        console.log(dropDwn+' is not in array and it\'s value is false')
        // dropdown not in array or it's value is false
        // now i have to show it
        $(dropDwn).dropdown('show');
        // update it's value in array
        this.dropDowns[dropDwn] = true;
      }
    }
  }
};
</script>

<style>
</style>
