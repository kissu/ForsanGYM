<template>
  <div id="editActivity">
    <div class="modal fade" id="staticBackdropEditModal" data-backdrop="static" data-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                        v-bind:value='act.name'
                        @input="act.name = $event.target.value"

                        :class="[{'form-control':true},{'is-invalid':errors.name}]"
                        type="text"
                      />
                    </div>

                    <div class="form-group">
                      <label class="control-label">Coach Name </label>
                      <input
                        v-bind:value='act.coachName'
                        @input="act.coachName = $event.target.value"
                        :class="[{'form-control':true},{'is-invalid':errors.coachName}]"
                        type="text"
                      />
                    </div>

                    <div class="form-group">
                      <label class="control-label">Coach phone number </label>
                      <input
                        v-bind:value='act.coachPhoneNumber'
                        @input="act.coachPhoneNumber = $event.target.value"
                        :class="[{'form-control':true},{'is-invalid':errors.coachPhoneNumber}]"
                        type="tel"
                      />
                    </div>

                    <div class="form-group">
                      <label class="control-label">Price</label>
                      <input
                        v-bind:value='act.price'
                        @input="act.price = $event.target.value"
                        :class="[{'form-control':true},{'is-invalid':errors.price}]"
                        type="number"
                        step="any"
                      />
                    </div>

                    <div class="form-group">
                      <label class="control-label">Activity Description</label>
                      <textarea
                        v-bind:value='act.description'
                        @input="act.description = $event.target.value"
                        :class="[{'form-control':true},{'is-invalid':errors.description}]"
                        rows="4"
                      ></textarea>
                    </div>

                  </form>
                </div>
              </div>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary ml-3" data-dismiss="modal">Close</button>
            <button :disabled='dis' type="button" class="btn btn-primary" @click="editActivity">Submit</button>
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
  data() {
    return{
      dis: false,
      errors: {},
      act : {
        name: null,
        coachName: null,
        coachPhoneNumber: null,
        price: 0,
        description: null
      }
    }
  },
  methods:{
    editActivity: function(){
      const validate = this.validateForm();
      if (!validate) return false;
      this.dis = true
      this.$axios.$post('activity/edit/'+this.activity.id,this.act).then(res => {
        this.dis = false
        this.$store.commit("editActivity",res)
        $("#staticBackdropEditModal").modal("hide")
      }).catch(err => {
        // let str = ""
        // if(err.response.data.message.length){
        //   str = err.response.data.message.join("<br>")
        // }
        console.log(str);
        this.dis = false
        console.log(err.response.data);
        // this.$swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   html: str
        // })
      })
    },
    validateForm: function () {
      this.errors = {};
      let inputs = Object.keys(this.act)
      let pass = true;
      inputs.forEach(i => {
        if (!this.act[i] || (!this.act[i].length && typeof this.act[i] === "string")) {
          pass = false
          this.errors[i] = `${i} is required`
        }
      })
      return pass
    },
  },
  watch: {
    activity: function (value) {
      this.act = {
        name: value.name,
        coachName: value.coachName,
        coachPhoneNumber: value.coachPhoneNumber,
        price: value.price,
        description: value.description
      }
    }
  },
};
</script>
