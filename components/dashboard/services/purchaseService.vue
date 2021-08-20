<template>
  <div id="purchaseServiceCom">
    <CollapseComponent collapse-name="puchase" head-btn-text="Purchase A Service"
                       btns-class="btn btn-primary" icon="mdi mdi-food-apple">
      <form class="form-horizontal w-100">
        <div class="form-group row" v-for="service in services" :key="service.id">
          <div class="col-md-12">
            <div class="form-check form-check-inline">
              <input @click="SelectedServiceId = $event.target.value"
                     class="form-check-input" type="radio" name="inlineRadioOptions"
                     :id="'Choose'+service.id" :value="service.id">
              <label class="form-check-label" :for="'Choose'+service.id">{{ service.name }} --
                {{ service.price }}</label>
            </div>
          </div>
        </div>
      </form>

      <div class="tile-footer">
        <div class="row">
          <div class="col-md-8 ">
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#puchasecollapse"
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
      SelectedServiceId: null
    }
  },
  methods: {
    PurchaseService: function () {
      // purchase a service performer
      this.$axios.$post('serviceIncome/add', {
        id: this.SelectedServiceId,
        todayDate:moment().format("yyyy-MM-DD")
      }).then(res => {
        this.$store.commit('buyService', res)
        this.SelectedServiceId = null
      }).catch(err => {
        console.log(err);
        console.log(this.SelectedServiceId)
        this.$swal.fire({
          title: "Purchase Service FAILED",
          icon: "error",
          text: "Choose a valid Service"
        })
      })
      this.SelectedServiceId = null
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
