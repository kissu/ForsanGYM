<template>
  <div id="PlayersPage">
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
                <input
                  class="form-control col-md-8"
                  type="date"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="control-label col-md-3">End date</label>
              <div class="col-md-8">
                <input
                  class="form-control col-md-8"
                  type="date"
                />
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
</template>

<script>
export default {};
</script>

<style>
</style>