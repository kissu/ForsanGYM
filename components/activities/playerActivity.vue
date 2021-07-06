<template>
<div id="player-activity-table">
  <div class="row mt-2">
    <div class="col-md-6">
      <div class="tile">
        <h3 class="tile-title">Add new player</h3>
        <div class="tile-body">
          <form class="form-horizontal">
            <div class="form-group row">
              <label class="control-label col-md-3">Name</label>
              <div class="col-md-8">
                <input class="form-control" type="text" placeholder="Enter full name">
              </div>
            </div>
            <div class="form-group row">
              <label class="control-label col-md-3">Phone Number</label>
              <div class="col-md-8">
                <input class="form-control col-md-8" type="tel" placeholder="Enter the phone number">
              </div>
            </div>

            <div class="form-group row">
              <label class="control-label col-md-3">Begin Date</label>
              <div class="col-md-8">
                <input class="form-control col-md-8" type="date">
              </div>
            </div>

            <div class="form-group row">
              <label class="control-label col-md-3">End Date</label>
              <div class="col-md-8">
                <input class="form-control col-md-8" type="date">
              </div>
            </div>

            <div class="form-group row">
              <label class="control-label col-md-3" for="exampleSelect1">Select Activity</label>
              <div class="col-md-8">
                <div class="form-group ">
                  <select class="form-control" id="exampleSelect1">
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
              <button class="btn btn-primary" type="button">
                <i class="fa fa-fw fa-lg fa-check-circle"></i>
                Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row mt-2">
    <div class="col-md-12">
      <div class="tile">
        <h3 class="tile-title">Activities Players</h3>
        <table class="table table-bordered ">
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
