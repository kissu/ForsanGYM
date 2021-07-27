<template>
  <div id="purchaseServiceCom">
    <CollapseComponent collapse-name="puchase" foot-btn-text="Purchase" head-btn-text="Purchase A Service" btns-class="btn btn-primary">
      <form class="form-horizontal w-100">
        <div class="form-group row" v-for="service in $store.state.services" :key="service.id">
          <div class="col-md-12">
            <div class="form-check form-check-inline">
              <input v-model="SelectedServiceId" class="form-check-input" type="radio" name="inlineRadioOptions" :id="'Choose'+service.id" :value="service.id">
              <label class="form-check-label" :for="'Choose'+service.id">{{service.name}} -- {{service.price}}</label>
            </div>
          </div>
        </div>
      </form>

      <div class="tile-footer">
        <div class="row">
          <div class="col-md-8 ">
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#puchasecollapse" v-on:click="PurchaseService">
              <i class="fa fa-fw fa-lg fa-check-circle"></i>
              Purchase</button>
          </div>
        </div>
      </div>


    </CollapseComponent>
  </div>
</template>

<script>
import CollapseComponent from "../../layout/Collapse";
export default {
  name: "purchaseService",
  components: {CollapseComponent},
  data(){
    return{
      SelectedServiceId:null
    }
  },
  methods:{
    PurchaseService: function (){
      // purchase a service performer
      this.$axios.$get('servicesIncome/add/'+this.SelectedServiceId).then(res =>{
        this.$store.commit('buyService', res)
        this.$store.commit('calculateIncome')
        this.SelectedServiceId = null

      }).catch(err => {
        console.log(err);
        console.log(this.SelectedServiceId)
        this.$swal.fire({
          title:"Purchase Service FAILED",
          icon:"error",
          text:"Choose a valid Service"
        })
      })
    }
  },
}
</script>

<style scoped>

</style>
