<template>
<div id="appActivties">
  <div class="row " >
    <div class="col-md-4 " v-for="(item, index) in activities" :key="index">
      <div class="tile" >
        <div class="tile-title-w-btn">
          <h3 class="title">{{item.name}}</h3>
          <div class="btn-group">
              <button type="button"
                      class="btn btn-primary mx-auto w-100"
                      data-toggle="modal"
                      data-target="#staticBackdrop">
                <i class="mdi mdi-clipboard-edit"></i>
              </button>
              <Edit />
            <a class="btn btn-danger" href="#"><i class="fa fa-lg fa-trash"></i></a>
          </div>
        </div>
        <div class="tile-body">
          <b>Coach : {{item.coachName}} </b><br><br>
          {{item.description}}
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Edit from "../activities/edit";
export default {
  name: "appActivities",
  components: {Edit},
  data(){
    return {
      activities:[
        {name:"actv1", description:"Activity 1 description", coachName:"Enta"},
        {name:"actv2", description:"Activity 2 description", coachName:"Ana"},
        {name:"actv3", description:"Activity 3 description", coachName:"Homa"},
        {name:"actv4", description:"Activity 4 description", coachName:"Lees"},
        {name:"actv5", description:"Activity 5 description", coachName:"Sool"},
        {name:"actv6", description:"Activity 6 description", coachName:"So"},

      ]
    }
  },
}
</script>

<style scoped>

</style>
