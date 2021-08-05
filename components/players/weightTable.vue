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
          <tr v-for="(weight, index) in playerComputed.weights" :key="index">
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
    </div>

  </div>
</template>

<script>
import Swal from "sweetalert2";
import moment from "moment/moment";

export default {
  name: "weightTable",
  props: {
    player: {
      required: true
    }
  },
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
              player_id: this.player.id,
              date: playerWeight.date,
              weight: res.value
            }).then(() => {
              this.$store.commit('editPlayerWeight', {
                date: playerWeight.date,
                id: playerWeight.id,
                weight: Number(res.value),
                player_id: this.player.id
              })
              //TODO Catch errors here @Abdullah3553

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
              player_id: this.player.id,
              date: moment().format('YYYY-MM-DD'),
              weight: res.value
            }).then(res2 => {
              this.$store.commit('addPlayerWeight', {
                date: res2.date,
                id: res2.id,
                player: res2.player,
                weight: Number(res2.weight)
              })
            })
          }
        }
      })
    },
  },
  computed: {
    playerComputed: function () {
      console.log(this.player)
      return Object.assign({}, this.$store.state.players.find(player => player.id === this.player.id))
    }
  }

}
</script>

<style scoped>

</style>
