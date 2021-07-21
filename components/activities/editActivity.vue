<template>
  <div id="editActivity">
    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Edit Activity </h5>
            <button  type="button" class="close" data-dismiss="modal" aria-label="Close">
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
                        placeholder="Enter Activity name"
                        :value="activity.name"
                      />
                    </div>

                    <div class="form-group">
                      <label class="control-label">Coach Name </label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Enter full name"
                        :value="activity.coachName"
                      />
                    </div>

                    <div class="form-group">
                      <label class="control-label">Coach Phone </label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Enter Coach Phone"
                        :value="activity.coachPhoneNumber"
                      />
                    </div>

                    <div class="form-group">
                      <label class="control-label">Price</label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="EGP"
                        :value="activity.price"
                      />
                    </div>

                    <div class="form-group">
                      <label class="control-label">Activity Description</label>
                      <textarea
                        class="form-control"
                        rows="4"
                        placeholder="Describe The Activity..."
                        :value="activity.description"
                      ></textarea>
                    </div>

                  </form>
                </div>
              </div>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary ml-3" data-dismiss="modal">Close</button>
            <button  type="button" class="btn btn-primary" >Submit</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  props:{
  activity:{
    required:true
  },
},

};
</script>
