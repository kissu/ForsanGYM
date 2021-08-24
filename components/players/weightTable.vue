<template>
  <div id="weightTablePage">

    <div class="tile">
      <div class="tile-title-w-btn">
        <h2 data-toggle="dropdown" class="title">
          <span class="mdi mdi-weight-kilogram"></span>
          Weights Table
        </h2>
        <button class="btn btn-outline-primary " v-on:click="createWeight"><i class="mdi mdi-plus-box"></i> Add Entry
        </button>
      </div>
      <div class="col tile-body">
        <table class=" table table-striped ">
          <thead>
          <tr>
            <th >#</th>
            <th >Date</th>
            <th >Weight</th>
            <th >Options</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(weight, index) in playerWeights" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ weight.date }}</td>
            <td>{{ weight.weight }}</td>
            <td>
              <div class="btn-group ">
                <!--              <button class="btn btn-outline-danger mx-2" v-on:click="deleteWeight(weight)"><i class="mdi mdi-minus-box"></i> Delete</button>-->
                <button class="btn btn-outline-warning" v-on:click="editWeight(weight)"><i
                  class="mdi mdi-pencil-box"></i> Edit
                </button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
<!--      <paging :count="$store.state.playerWeights.count" per-page="10"  v-on:getDataAtPage="loadDataOfPage"/>-->
      <div class="row justify-content-center">
        <paginate
          :page-count="Math.ceil($store.state.playerWeights.count/10)"
          :click-handler="loadDataOfPage"
          :container-class="'pagination'"
          :prev-class="'page-item'"
          :prev-link-class="'page-link'"
          :page-class="'page-item'"
          :page-link-class="'page-link'"
          :next-class="'page-item'"
          :next-link-class="'page-link'"
        ></paginate>
      </div>
    </div>

  </div>
</template>

<script>
import Swal from "sweetalert2";
import moment from "moment/moment";
import Paging from "../paging";

export default {
  name: "weightTable",
  components: {Paging},
  methods: {
    // deleteWeight: function (playerWeight){
    //   if(this.player.weights.length === 1){
    //     this.$swal.fire({
    //       icon:"warning",
    //       title:"Player Must Have at least 1 Weight Entry",
    //     })
    //     return
    //   }
    //   this.$axios.$delete('playerWeight/delete/'+playerWeight.id).then(()=>{
    //     this.$store.commit('deletePlayerWeight', playerWeight)
    //   }).catch(err=>{
    //     this.$swal.fire({
    //       icon:"error",
    //       title:"An Error Occurred",
    //       text: err.response.data.message
    //     })
    //   })
    // },
    reSetWeights: async function(){
      try{
        const playerWeights = await this.$axios.$get('playerWeight/allWeights/' + this.$route.params.id + '?limit=10&page=1')
        await this.$store.commit('setPlayerWeights', playerWeights)
      }catch (err){
        console.log("error is set player weights (weightsTable)")
        console.log(err)
      }
    },
    editWeight: function (playerWeight) {
      this.$swal.fire({
        title: "Edit weight",
        icon: "info",
        input: "text",
        inputValue: playerWeight.weight,
        showCancelButton: true
      }).then(res => {
        if (!res.isDismissed) {
          if (isNaN(Number(res.value)) || res.value === "") {
            Swal.fire({
              icon: "error",
              title: "Weight must be a number"
            })
          } else {
            this.$axios.$post('playerWeight/edit/' + playerWeight.id, {
              player_id: this.playerComputed.id,
              date: playerWeight.date,
              weight: res.value
            }).then(() => {
              this.$store.commit('editViewPlayerWeight', {
                date: playerWeight.date,
                id: playerWeight.id,
                weight: Number(res.value),
                player_id: this.playerComputed.id
              })

            }).catch(err=>{
              this.$swal.fire({
                title:"Error Happend",
                icon:"error"
              })
              console.log("error in weights table : ")
              console.log(err)
            })
          }
        }

      })
    },
    createWeight: function () {
      this.$swal.fire({
        title: "Enter the new Weight",
        icon: "info",
        input: "text",
        inputPlaceholder: "Weight",
        showCancelButton: true,
        confirmButtonText: "Add",
      }).then(res => {
        if (!res.isDismissed) {
          if (isNaN(Number(res.value)) || res.value === "") {
            Swal.fire({
              icon: "error",
              title: "Weight must be a number"
            })
          } else {
            // add the weight >>
            this.$axios.$post('playerWeight/new', {
              player_id: this.playerComputed.id,
              date: moment().format('YYYY-MM-DD'),
              weight: res.value
            }).then(res2 => {
              if(this.$store.state.playerWeights.items.length+1>=10){
              this.reSetWeights()
              }else{this.$store.commit('addPlayerWeight', {
                date: res2.date,
                id: res2.id,
                player: res2.player,
                weight: Number(res2.weight)
              })
              }

            })
          }
        }
      })
    },
    loadDataOfPage: function (page){
      this.$axios.$get('playerWeight/allWeights/'+this.$route.params.id+'?limit=10&page='+page).then(res=>{
        this.$store.commit("setPlayerWeights", res)
      }).catch(err=>{
        console.log("error in set player wigths")
        console.log(err)
      })
    }
  },
  computed: {
    playerComputed: function () {
      return this.$store.state.players.items[this.$store.state.players.viewPlayer]

    },
    playerWeights: function () {
      return this.$store.state.playerWeights.items
    },
  }

}
</script>

<style scoped>

</style>
