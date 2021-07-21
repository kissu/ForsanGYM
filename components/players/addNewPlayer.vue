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
                            <input v-model="InputPlayer.name"  class="form-control" type="text" placeholder="Enter full name" >
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="control-label col-md-3">Phone</label>
                          <div class="col-md-8">
                            <input v-model="InputPlayer.phoneNumber"  class="form-control col-md-8" type="tel" placeholder="Enter the phone number">
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="control-label col-md-3">height</label>
                          <div class="col-md-8">
                            <input v-model="InputPlayer.height"  class="form-control col-md-8" type="text" placeholder="Enter the player height">
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="control-label col-md-3">weight</label>
                          <div class="col-md-8">
                            <input v-model="InputPlayer.weight"  class="form-control col-md-8" type="text" placeholder="Enter the player weight">
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="control-label col-md-3">Plan</label>
                          <div class="col-md-8">
                            <select class="form-control col-md-8" id="plansList">
                              <option>Choose a plan</option>
                              <option v-for="plan in $store.state.plans" v-on:click="PickPlan(plan.id)" v-if="plan.isActivated">{{plan.name}}</option>
                            </select>
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="control-label col-md-3">Begin Date</label>
                          <div class="col-md-8">
                            <input v-model="InputPlayer.beginDate" class="form-control col-md-8" type="date">
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="control-label col-md-3">End Date</label>
                          <div class="col-md-8">
                            <input v-model="InputPlayer.endDate" class="form-control col-md-8" type="date">
                          </div>
                        </div>

                          <div class="form-group row">
                            <label class="control-label col-md-3">Photo</label>
                            <div class="col-md-8">
                              <input v-on:change="AssignFile" ref='UploadedFile' class="form-control" type="file">
                            </div>
                          </div>
                      </form>
                    </div>
                    <div class="tile-footer">
                      <div class="row">
                        <div class="col-md-8 ">
                          <button v-on:click="addPlayer" class="btn btn-primary" type="button">
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
  data(){
    return{
      InputPlayer:{
        name:null,
        phoneNumber:null,
        weight:null,
        height:null,
        photo:null,
        plan:null,
        beginDate:null,
        endDate:null
      }

    }
  },
methods:{
  addPlayer:function (){
    let formPhoto = new FormData()
    formPhoto.append('file', this.InputPlayer.photo)
    console.log(formPhoto)
    this.$axios.$post('/players/newPlayer', this.InputPlayer).then(res=>{
      this.$store.commit('addPlayer', res)
      this.$router.push(this.$router.currentRoute)
    })
  },
  PickPlan:function (planId){
    this.InputPlayer.plan = planId
  },
  AssignFile:function (){
    this.InputPlayer.photo = this.$refs.UploadedFile.files[0]
    }
}
}
</script>

<style>

</style>
