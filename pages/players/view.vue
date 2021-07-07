<template>
  <div id="View">
    <page-title title="Ahmed Gamal" icon="fa fa-user" />
    <div class="row align-items-center flex-md-row-reverse">
      <div class="col-md-3 mb-3 mb-md-0">
        <div class="img mx-auto text-center">
          <img class="rounded-circle"
               src="https://picsum.photos/250/250" alt="">
        </div>
        <div class="d-flex actions mx-auto text-center mt-3 w-100">
          <button class="btn btn-info w-50 mx-1"><span class="mdi mdi-account-edit mr-1"></span>Edit</button>
          <button class="btn btn-secondary w-50 mx-1"><span class="mdi mdi-account-clock mr-1"></span>History</button>
        </div>
      </div>
      <div class="col-md-9">
        <div class="tile">
          <div class="tile-title-w-btn">
            <h2 data-toggle="dropdown" class="title">
              <span class="mdi mdi-account-circle"></span>
              Player Info</h2>
          </div>
          <div class="tile-body">
            <div class="row mb-2">
              <div class="col-md-3">
                <h5 class="mb-0"><span class="mb-0 mdi mdi-phone"></span> Phone Number</h5>
              </div>
              <div class="col-md-9">
                <h5 class="mb-0 font-weight-normal">
                  01027568941
                </h5>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-md-3">
                <h5 class="mb-0"><span class="mb-0 mdi mdi-calendar"></span> Registered At</h5>
              </div>
              <div class="col-md-9">
                <h5 class="mb-0 font-weight-normal">
                  01027568941
                </h5>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-md-3">
                <h5 class="mb-0"><span class="mb-0 mdi mdi-dumbbell"></span> Training Plan</h5>
              </div>
              <div class="col-md-7">
                <h5 class="mb-0 font-weight-normal">
                  Lorem ipsum dolor <br> sit amet, consectetur adipisicing elit. Enim, fugiat?
                </h5>
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
  components: {PageTitle}
};
</script>

<style>
</style>
