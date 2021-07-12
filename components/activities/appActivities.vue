<template>
<div id="appActivties">
  <div class="row " >
    <div class="col-md-4 text-break" v-for="(item, index) in activities" :key="index">
      <div class="tile" >
        <div class="tile-title-w-btn">
          <h3 class="title">{{item.name}}</h3>
          <div class="btn-group">
              <button type="button"
                      class="btn btn-primary mx-auto w-100"
                      data-toggle="modal"
                      data-target="#staticBackdrop"
                      @click="EnableEditActivity(item)">
                <i class="mdi mdi-clipboard-edit"></i>
              </button>
            <div v-if="item.isActive">
              <editActivity :activity="item"/>
            </div>
            <button class="btn btn-danger" @click="deleteActivity(item)"><i class="fa fa-lg fa-trash"></i></button>
          </div>
        </div>
        <div class="tile-body">
          <b>Coach : {{item.coachName}} </b><br>
          <b>Price : </b>{{item.price}}<br><br>
          <p><b>Description : </b>{{item.description}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import editActivity from "./editActivity";
export default {
  name: "appActivities",
  components: {editActivity},
  data(){
    return {
      activities:[
        {name:"actv1 is too long so we can see what would happen", description:"THis is gonna be a long Description for activity 1 just to make sure that long textes will not break the card on it slef so yaaaaaah", coachName:"Enta", price:120, isActive:false},
        {name:"actv2 is amazingggg", description:"Activity 2 description", coachName:"Ana", price:200, isActive:false},
        {name:"actv3", description:"Activity 3 description", coachName:"Homa", price:170, isActive:false},
        {name:"actv4", description:"Activity 4 description", coachName:"Lees", price:90, isActive:false},
        {name:"actv5", description:"Activity 5 description", coachName:"Sool", price:80, isActive:false},
        {name:"actv6", description:"Activity 6 description", coachName:"So", price:150, isActive:false},

      ]
    }
  },
  methods:{
    EnableEditActivity: function (item){
     item.isActive=true
    },
    deleteActivity: function(item){
      console.log(`item ${item.name} has been deleted`)
    }
  },

}
</script>

<style scoped>

</style>
