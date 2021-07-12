<template>
<div id="newPlanPage">
    <pageTitle title="New Plan" icon="fa fa-plus"/>
    <div class="row mt-2 justify-content-center">
      <div class="col-md-8">
        <div class="tile">
          <h3 class="tile-title card-header text-center">Add New Plan</h3>
          <div class="tile-body">
            <form class="form-horizontal">
              <div class="form-group row">
                <label class="control-label col-md-3 text-center">Plan Name</label>
                <div class="col-md-8">
                  <input class="form-control" type="text" placeholder="Plan">
                </div>
              </div>

              <div class="form-group row">
                <label class=" control-label col-md-3 text-center" for="descriptionTextarea">Description</label>
                <div class="col-md-8">
                <textarea
                  class="form-control col-md-10" id="descriptionTextarea" rows="2" placeholder="Plan Description here..."
                ></textarea>
                </div>
              </div>
              <div class="form-group row">
                <label class="control-label col-md-3 text-center">Price </label>
                <div class="col-md-8">
                  <input class="form-control col-md-8" type="text" placeholder="EGP">
                </div>
              </div>


              <!--            <div class="form-group row">-->
              <!--              <label class="control-label col-md-3 text-center" for="exampleSelect1">Select Activity</label>-->
              <!--              <div class="col-md-8">-->
              <!--                <div class="form-group ">-->
              <!--                  <select class="form-control" id="exampleSelect1">-->
              <!--                    <option v-for="item in activityList">{{item.name}}</option>-->
              <!--                  </select>-->
              <!--                </div>-->
              <!--              </div>-->
              <!--            </div>-->
              <!--            <div class="form-group row">-->
              <!--              <label class="control-label col-md-3">Identity Proof</label>-->
              <!--              <div class="col-md-8">-->
              <!--                <input class="form-control" type="file">-->
              <!--              </div>-->
              <!--            </div>-->

            </form>
          </div>
          <div class="tile-footer">
            <div class="row justify-content-around">
              <div class="col-md-3 ">
                <button @click="addPLan" class="btn btn-primary " type="button">
                  <i class="fa fa-fw fa-lg fa-check-circle"></i>
                  Add Plan</button>
              </div>

              <div class="toggle-flip ">
                <div class="row justify-content-center">
                  <label> Avtivate Plan</label>
                </div>

                <div class="row justify-content-center">
                  <label>
                    <input type="checkbox"><span class="flip-indecator " data-toggle-on="ON" data-toggle-off="OFF"></span>
                  </label>
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
import pageTitle from "../../components/layout/pageTitle";
export default {
    components:{pageTitle},
    methods: {
      addPLan: function () {
        this.$router.push({
          name:"allPlans"
        })
      }
    }
}
</script>
