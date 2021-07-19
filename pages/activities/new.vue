<template>
<div id="newActivityPage">
  <PageTitle title="New Activity" icon="fa fa-plus"/>

  <div class="row mt-2 justify-content-center">
    <div class="col-md-8">
      <div class="tile">
        <h3 class="tile-title  card-header text-center">Add New Activity</h3>
        <div class="tile-body">
          <form class="form-horizontal">
            <div class="form-group row">
              <label class="control-label col-md-3 text-center">Activity Name</label>
              <div class="col-md-8">
                <input class="form-control" type="text" placeholder="Activity">
              </div>
            </div>
            <div class="form-group row">
              <label class="control-label col-md-3 text-center">Coach Name</label>
              <div class="col-md-8">
                <input class="form-control col-md-8" type="text" placeholder="Coach">
              </div>
            </div>

            <div class="form-group row">
              <label class="control-label col-md-3 text-center">Coach Phone Number</label>
              <div class="col-md-8">
                <input class="form-control col-md-8" type="text" placeholder="Coach Phone Number">
              </div>
            </div>

            <div class="form-group row">
              <label class="control-label col-md-3 text-center">Price </label>
              <div class="col-md-8">
                <input class="form-control col-md-8" type="text" placeholder="EGP">
              </div>
            </div>

            <div class="form-group row">
              <label class=" control-label col-md-3 text-center" for="descriptionTextarea">Description</label>
              <div class="col-md-8">
                <textarea
                  class="form-control col-md-10" id="descriptionTextarea" rows="2" placeholder="Describe The activity"
                ></textarea>
              </div>
            </div>

          </form>
        </div>
        <div class="tile-footer">
          <div class="row justify-content-center">
            <div class="col-md-0 ">
              <button @click="register" class="btn btn-primary " type="button">
                <i class="fa fa-fw fa-lg fa-check-circle"></i>
                Register</button>
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

export default {
  components: {PageTitle},
  methods:{
    register: function (){
      this.$router.push("../activities")
    }
  }
};
</script>
