<template>
  <div id="purchaseServiceCom">
    <CollapseComponent collapse-name="purchase" head-btn-text="Purchase A Service"
                       btns-class="btn btn-primary" icon="mdi mdi-food-apple">
      <form class="form-horizontal w-100">

        <div class="form-group">
          <label for="selectService">Select The Service</label>
          <select class="form-control" id="selectService" @change="SelectedService = services[$event.target.value]">
            <option :value="null" disabled selected>Choose A Service</option>
            <option v-for="(service, index) in services" :value="index" :key="service.id">
              {{ service.name }} -- {{ service.price }}
            </option>
          </select>
        </div>

        <div class="form-group row">
          <label class="control-label col-md-5">Quantity</label>
            <input
                   @input="quantity = $event.target.value" class="form-control mx-3" type="number"
                   placeholder="Number.." id="quantityNumber">
        </div>

<!--        <div class="form-group row" v-for="service in services" :key="service.id">-->
<!--          <div class="col-md-12">-->
<!--            <div class="form-check form-check-inline">-->
<!--              <input @click="SelectedServiceId = $event.target.value"-->
<!--                     class="form-check-input" type="radio" name="inlineRadioOptions"-->
<!--                     :id="'Choose'+service.id" :value="service.id">-->
<!--              <label class="form-check-label" :for="'Choose'+service.id">{{ service.name }} &#45;&#45;-->
<!--                {{ service.price }}</label>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </form>

      <div class="tile-footer">
        <div class="row">
          <div class="col-md-8 ">
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#purchasecollapse"
                    v-on:click="PurchaseService">
              <i class="mdi mdi-check-circle"></i>
              Purchase
            </button>
          </div>
        </div>
      </div>


    </CollapseComponent>
  </div>
</template>

<script>
import CollapseComponent from "../../layout/Collapse";
import moment from "moment/moment";

export default {
  name: "purchaseService",
  components: {CollapseComponent},
  data() {
    return {
      SelectedService: null,
      quantity:null
    }
  },
  methods: {
    resetForm: function (){
      this.quantity=null
      this.SelectedService = null
      document.getElementById('selectService').selectedIndex = 0
      document.getElementById('quantityNumber').value = null
    },
    PurchaseService: function () {
      // console.log( this.quantity)
      // return
      // purchase a service performer
      const quantity = Number(this.quantity)
      const SelectedService = {...this.SelectedService}
      this.$axios.$post('serviceIncome/add', {
        id:SelectedService.id,
        todayDate:moment().format("yyyy-MM-DD"),
        quantity:quantity
      }).then(res => {
        this.$store.commit('buyService', {...res, addQuantity:quantity})
        this.resetForm()
      }).catch(err => {
        console.log(err);
        this.$swal.fire({
          title: "Purchase Service FAILED",
          icon: "error",
          text: "Choose a valid Service"
        })
        this.resetForm()
        return false
      })

    }
  },
  computed:{
    services: function (){
      return this.$store.state.services.items
    }
  }
}
</script>

<style scoped>

</style>
