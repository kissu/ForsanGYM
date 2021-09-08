<template>
<div id="editActivityPlayerSubscription">
  <div
    class="modal fade"
    :id="'editActivityPlayerSubscription'+subscription.id"
    data-backdrop="static"
    data-keyboard="false"
    :aria-labelledby="'editActivityPlayerSubscription'+subscription.id+'Label'"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="'editActivityPlayerSubscription'+subscription.id+'Label'">
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
<!--                  <div class="form-group">-->
<!--                    <label class="control-label"> Name </label>-->
<!--                    <input-->
<!--                      v-bind:value="activityPlayer.name"-->
<!--                      @input="activityPlayer.name = $event.target.value"-->
<!--                      :class="[-->
<!--                          { 'form-control': true },-->
<!--                          { 'is-invalid': errors.name },-->
<!--                        ]"-->
<!--                      :placeholder="activity_Player.name"-->
<!--                      type="text"-->
<!--                    />-->
<!--                  </div>-->

                  <label class="control-label "
                  >Select Activity</label
                  >
                  <div class="form-group row ">
                    <div class="col-md-12">
                      <div class="form-group m-0">
                        <select
                          v-model="subscription.activity"
                          :class="[
                            { 'form-control': true },
                            { 'is-invalid': errors.activity },
                          ]"
                          @change="computeDate"
                          id="activitySelect"
                        >
                          <option
                            v-for="item in $store.state.activities"
                            :key="item.id"
                            :value="item"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>


                  <div class="form-group">
                    <label class="control-label">Price</label>
                    <input
                      v-bind:value="subscription.price"
                      @input="
                          subscription.price = $event.target.value
                        "
                      :class="[
                          { 'form-control': true },
                          { 'is-invalid': errors.price },
                        ]"
                      type="number"
                    />
                  </div>

                  <div class="form-group">
                    <label class="control-label">Begin Date</label>
                    <input
                      v-bind:value="moment(subscription.beginDate).format('yyyy-MM-DD')"
                      @input="subscription.beginDate = $event.target.value"
                      :class="[
                        { 'form-control': true },
                        { 'is-invalid': errors.beginDate },
                      ]"
                      type="date"
                    />
                  </div>

                  <div class="form-group">
                    <label class="control-label">End Date</label>
                    <input
                      v-bind:value="moment(subscription.endDate).format('yyyy-MM-DD')"
                      @input="subscription.endDate = $event.target.value"
                      :class="[
                        { 'form-control': true },
                        { 'is-invalid': errors.endDate },
                      ]"
                      type="date"
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
            class="btn btn-warning"
            @click="editActivityPlayerSubscription"
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
  name: "editActivityPlayerSubscription",
  props:{
    subscriptionSent:{
      required: true
    }
  },
  mounted() {
    this.subscription = Object.assign({}, this.subscriptionSent)
  },
  data(){
    return{
      errors: {},
      dis: false,
      subscription: {}
    }
  },
  methods:{
    moment: (args) => moment(args),
    editActivityPlayerSubscription: function () {
      const validate = this.validateForm();
      if (!validate) return false;
      this.dis = true;
      console.log(this.subscription)

      this.$axios
        .$post(
          "activityPlayerSubscription/edit/" + this.subscription.id,
          {
            ...this.subscription
          }
        )
        .then((res) => {
          this.dis = false;
          this.$store.commit('setAllActivityPlayersubscriptions', res)
          this.$store.commit('addActivityPlayerIncome', Number(this.subscription.price)-Number(this.subscriptionSent.price))

          $(`#editActivityPlayerSubscription${this.subscription.id}`).modal("hide");
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
      let inputs = Object.keys(this.subscription);
      let pass = true;
      inputs.forEach((i) => {
        if (
          !this.subscription[i] ||
          (!this.subscription[i].length &&
            typeof this.subscription[i] === "string")
        ) {
          pass = false;
          this.errors[i] = `${i} is required`;
        }
      });
      return pass;
    },
    computeDate: function () {
      this.subscription.beginDate = moment().format("YYYY-MM-DD");
      this.subscription.endDate = moment()
        .add(1, "month")
        .format("YYYY-MM-DD");
    },
  },
  computed:{

  }
}
</script>

<style scoped>

</style>
