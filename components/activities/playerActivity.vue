<template>
<div id="player-activity-table">
  <div class="row mt-2" id="new-player-dialog">
    <div class="accordion col-6" id="accordionExample">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button class="btn btn-info text-center col-12" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Add New Player
            </button>
          </h2>
        </div>
        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="tile">
                  <h3 class="tile-title card-header mb-4">Add new player</h3>
                  <div class="tile-body">
                    <form class="form-horizontal">
                      <div class="form-group row">
                        <label class="control-label col-md-4">Name</label>
                        <div class="col-md-8">
                          <input class="form-control" type="text" placeholder="Enter full name">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="control-label col-md-4">Phone Number</label>
                        <div class="col-md-8">
                          <input class="form-control col-md-8" type="tel" placeholder="Enter the phone number">
                        </div>
                      </div>

                      <div class="form-group row">
                        <label class="control-label col-md-4">Begin Date</label>
                        <div class="col-md-8">
                          <input class="form-control col-md-8" type="date">
                        </div>
                      </div>

                      <div class="form-group row">
                        <label class="control-label col-md-4">End Date</label>
                        <div class="col-md-8">
                          <input class="form-control col-md-8" type="date">
                        </div>
                      </div>

                      <div class="form-group row">
                        <label class="control-label col-md-4" for="activitySelect">Select Activity</label>
                        <div class="col-md-8">
                          <div class="form-group ">
                            <select class="form-control" id="activitySelect">
                              <option v-for="item in activityList">{{item.name}}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <!--            <div class="form-group row">-->
                      <!--              <label class="control-label col-md-3">Identity Proof</label>-->
                      <!--              <div class="col-md-8">-->
                      <!--                <input class="form-control" type="file">-->
                      <!--              </div>-->
                      <!--            </div>-->
                    </form>
                  </div>
                  <div class="tile-footer">
                    <div class="row">
                      <div class="col-md-8 ">
                        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseOne" >
                          <i class="fa fa-fw fa-lg fa-check-circle"></i>
                          Add Player</button>
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

  <div class="tile my-3">
    <div class="row" id="tile-Head">
        <div class="col-9">
          <h3 class="tile-title">Activities Players</h3>
        </div>
          <label class="col-3">

            Search<input class="form-control form-control-sm" type="search" placeholder="Search Here" aria-controls="#playerDataTable">
          </label>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="tile-body">
          <table class="table table-bordered " id="playerDataTable">
            <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Activity</th>
              <th>Begin Date</th>
              <th>End Date</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>123456</td>
              <td>Activity 1</td>
              <td>20/10/2020</td>
              <td>20/11/2020</td>
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
export default {
  name: "playerActivity",
  data(){
    return {
      activityList:[
        {name:"actv1"},
        {name:"actv2"},
        {name:"actv3"},
        {name:"actv4"},
        {name:"actv5"},
      ]
    }
  },
}
</script>

<style scoped>

</style>
