<template>
  <div id="PlayersPage">
    <div id="row">
      <div class="col-md-6">
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

    <div id="row">
      <div class="col-md-12">
        <div class="tile">
          <div class="tile-body">
            <div class="table-responsive">
              <div id="row">
                <div class="col-sm-12 col-md-6">
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
              </div>
              <table class="table table-hover table-bordered" id="sampleTable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Begin Date</th>
                    <th>End Date</th>
                    <th>Plane</th>
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
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>abdullah Ibrahim</td>
                    <td>654321</td>
                    <td>10-06-2020</td>
                    <td>20-09-2020</td>
                    <td>Quarterly</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Yassir Ahmed</td>
                    <td>987654</td>
                    <td>20-10-2020</td>
                    <td>20-11-2021</td>
                    <td>Yearly</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Ali Mohammed</td>
                    <td>456789</td>
                    <td>03-01-2020</td>
                    <td>03-07-2020</td>
                    <td>Half Year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>