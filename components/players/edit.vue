<template>
  <div id="editButton">
    <div
      class="modal fade"
      id="staticBackdrop"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Edit player info
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="col-md-12">
              <div class="tile">
                <div class="tile-body">
                  <form>
                    <div class="form-group">
                      <label class="control-label">Full name</label>
                      <input
                        class="form-control"
                        type="text"
                        :value="playersData.playerName"
                      />
                    </div>
                    <div class="form-group">
                      <label class="control-label">Phone Number</label>
                      <input
                        class="form-control"
                        type="text"
                        :value="playersData.PhoneNumber"
                      />
                    </div>
                    <div class="form-group">
                      <label class="control-label">Weight</label>
                      <input
                        class="form-control"
                        type="text"
                        :value="playersData.Weight"
                      />
                    </div>
                    <div class="form-group">
                      <label class="control-label">Height</label>
                      <input
                        class="form-control"
                        type="text"
                        :value="playersData.height"
                      />
                    </div>
                    <div class="form-group">
                      <label class="control-label">beginDate</label>
                      <input
                        class="form-control"
                        type="date"
                        :value="playersData.BeginDate"
                      />
                    </div>
                    <div class="form-group">
                      <label class="control-label">endDate</label>
                      <input
                        class="form-control"
                        type="date"
                        :value="playersData.EndDate"
                      />
                    </div>
                    <div class="form-group">
                      <label class="control-label">Player's plan</label>
                      <textarea
                        class="form-control"
                        rows="4"
                        :value="playersData.TrainingPlan"
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <label class="control-label">Player's Diet</label>
                      <textarea
                        class="form-control"
                        rows="4"
                        :value="playersData.Diet"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    playersData:{
      type: 'Object'
    },
  }
};
</script>

<style>
</style>