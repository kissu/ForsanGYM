<template>
  <div id="editActivity">
    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Edit Activity </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="col-md-12">
              <div class="tile">
                <div class="tile-body">
                  <form>
                    <div class="form-group">
                      <label class="control-label">Activity Name </label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Enter full name"
                      />
                    </div>
                    <div class="form-group">
                      <label class="control-label">Player's plan</label>
                      <textarea
                        class="form-control"
                        rows="4"
                        placeholder="Enter your address"
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <label class="control-label">Player's Diet</label>
                      <textarea
                        class="form-control"
                        rows="4"
                        placeholder="Enter your address"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

};
</script>
