<template>
  <div id="addPlayer">
    <div class="row">
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
                          <label class="control-label col-md-3">Name</label>
                          <div class="col-md-8">
                            <input class="form-control" type="text" placeholder="Enter full name" >
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="control-label col-md-3">Phone</label>
                          <div class="col-md-8">
                            <input class="form-control col-md-8" type="tel" placeholder="Enter the phone number">
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="control-label col-md-3">Plan</label>
                          <div class="col-md-8">
                            <select class="form-control col-md-8" id="plansList">
                              <option>Plan 1</option>
                              <option>Plan 2</option>
                              <option>Plan 3</option>
                              <option>Plan 4</option>
                              <option>Plan 5</option>
                            </select>
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
                            <label class="control-label col-md-3">Photo</label>
                            <div class="col-md-8">
                              <input class="form-control" type="file">
                            </div>
                          </div>
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

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
