<template>
  <div id="editButton" >
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
                        v-bind:value="InputPlayer.name"
                        @input="InputPlayer.name = $event.target.value"
                      />
                    </div>
                    <div class="form-group">
                      <label class="control-label">Phone Number</label>
                      <input
                        class="form-control"
                        type="tel"
                        v-bind:value="InputPlayer.phoneNumber"
                        @input="InputPlayer.phoneNumber = $event.target.value"
                      />
                    </div>
                    <div class="form-group">
                      <label class="control-label">Weight</label>
                      <input
                        class="form-control"
                        type="text"
                        v-bind:value="InputPlayer.weight"
                        @input="InputPlayer.weight = $event.target.value"
                      />
                    </div>
                    <div class="form-group">
                      <label class="control-label">Height</label>
                      <input
                        class="form-control"
                        type="text"
                        v-bind:value="InputPlayer.height"
                        @input="InputPlayer.height = $event.target.value"
                      />
                    </div>
                    <div class="form-group">
                      <label class="control-label">beginDate</label>
                      <input
                        class="form-control"
                        type="date"
                        v-bind:value="InputPlayer.subscription.beginDate"
                        @input="InputPlayer.subscription.beginDate = $event.target.value"
                      />
                    </div>
                    <div class="form-group">
                      <label class="control-label">endDate</label>
                      <input
                        class="form-control"
                        type="date"
                        v-bind:value="InputPlayer.subscription.endDate"
                        @input="InputPlayer.subscription.endDate = $event.target.value"
                      />
                    </div>
                    <div class="form-group">
                      <label class="control-label">Player Training plan</label>
                      <textarea
                        class="form-control"
                        rows="4"
                        type="text"
                        v-bind:value="InputPlayer.trainingPlan"
                        @input="InputPlayer.trainingPlan = $event.target.value"
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <label class="control-label">Player Diet Plan</label>
                      <textarea
                        class="form-control"
                        rows="4"
                        type="text"
                        v-bind:value="InputPlayer.dietPlan"
                        @input="InputPlayer.dietPlan = $event.target.value"
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
            <button type="button" class="btn btn-primary" @click="save">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      InputPlayer:{}
    }
  },
  props:{
    playerData:{
      required : true,
      type: Object
    },
  },
  methods:{
    save: function (){
      // we need to edit 2 things :
      // 1) player data
      // 2) begin and end date of the current sub
      this.playerData = this.InputPlayer
      this.$axios.$post('/players/editPlayer/:id'.replace(':id', this.playerData.id), this.playerData).then(res=>{
        this.$axios.$post('subscriptions/updateDate/:id'.replace(':id', this.playerData.subscription.id), {
          player_id:this.playerData.id,
          plan_id:this.playerData.subscription.plan.id,
          beginDate:this.playerData.subscription.beginDate,
          endDate:this.playerData.subscription.endDate
        })
        console.log(this.playerData)
        this.$store.commit('editPlayer', this.playerData)
        $(`#staticBackdrop`).modal('hide')
      }).catch(err=>{
        console.log("Error is : ")
        console.log(err)
        // use sweet alert TODO @Abdullah3553
        this.$swal.fire({
          icon:"error",
          title:"An Error Ocurried",
          text: err.response.data.message

        })

      })
    }
  },
  created() {
    this.InputPlayer = Object.assign({}, this.playerData)
    console.log(this.InputPlayer)

  }
};
</script>

<style>
</style>
