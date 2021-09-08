<template>
  <div id="editActivityPlayer" @focusin="setData">
    <div
      class="modal fade"
      id="staticBackdropEditActivityPlayerModal"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Edit Activity Player
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
                      <label class="control-label"> Name </label>
                      <input
                        v-bind:value="activity_Player.name"
                        @input="activityPlayer.name = $event.target.value"
                        :class="[
                          { 'form-control': true },
                          { 'is-invalid': errors.name },
                        ]"
                        type="text"
                      />
                    </div>

                    <div class="form-group">
                      <label class="control-label">PhoneNumber</label>
                      <input
                        v-bind:value="activity_Player.phoneNumber"
                        @input="
                          activityPlayer.phoneNumber = $event.target.value
                        "
                        :class="[
                          { 'form-control': true },
                          { 'is-invalid': errors.phoneNumber },
                        ]"
                        type="tel"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary ml-3"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              :disabled="dis"
              type="button"
              class="btn btn-primary"
              @click="editActivityPlayer"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    activity_Player: {
      required: true,
    },
  },
  data() {
    return {
      dis: false,
      errors: {},
      activityPlayer: {
        name: this.activity_Player.name,
        phoneNumber: this.activity_Player.phoneNumber,
      },
    };
  },
  methods: {
    editActivityPlayer: function () {
      const validate = this.validateForm();
      if (!validate) return false;
      this.dis = true;
      this.$axios
        .$post(
          "activityPlayer/edit/" + this.activity_Player.id,
          {
            ...this.activityPlayer,
            sub_id:this.activity_Player.subscription.id
          }
        )
        .then((res) => {
          this.dis = false;
          this.$store.commit('setActivityPlayers', res)
          $("#staticBackdropEditActivityPlayerModal").modal("hide");
          this.activityPlayer = {
            name:null,
            phoneNumber:null
          }
        })
        .catch((err) => {
          // let str = ""
          // if(err.response.data.message.length){
          //   str = err.response.data.message.join("<br>")
          // }
          //console.log(str);
          this.dis = false;
          console.log(err.response.data);
          // this.$swal.fire({
          //   icon: "error",
          //   title: "Oops...",
          //   html: str
          // })
        });
    },
    validateForm: function () {
      this.errors = {};
      let inputs = Object.keys(this.activityPlayer);
      let pass = true;

      inputs.forEach((i) => {
        if (
          !this.activityPlayer[i] ||
          (!this.activityPlayer[i].length &&
            typeof this.activityPlayer[i] === "string")
        ) {
          pass = false;
          this.errors[i] = `${i} is required`;
        }
      });
      return pass;
    },
    computeDate: function () {
      this.activityPlayer.beginDate = moment().format("YYYY-MM-DD");
      this.activityPlayer.endDate = moment()
        .add(1, "month")
        .format("YYYY-MM-DD");
    },
    setData : function (){
      if(this.activity_Player.id !== this.activityPlayer){
        this.activityPlayer = Object.assign({}, this.activity_Player)
      }
    }
  },
  watch: {
    activityPlayer: function (value) {
      this.act = {
        name: value.name,
        phoneNumber: value.phoneNumber,
        beginDate: value.beginDate,
        endDate: value.endDate,
        activity: value.activity,
      };
    },
  },
};
</script>
