<template>
  <div id="activirties-page">
    <page-title title="Activies" icon="fa fa-bars"/>
    <div class="row" >
      <div class="col-md-4" v-for="(item, index) in activities" :key="index">
        <div class="tile" >
          <div class="tile-title-w-btn">
            <h3 class="title">{{item.name}}</h3>
            <div class="btn-group">
              <a class="btn btn-primary" href="#"><i class="fa fa-lg fa-plus"></i></a>
              <a class="btn btn-warning" href="#"><i class="fa fa-lg fa-edit"></i></a>
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
import PageTitle from "../components/layout/pageTitle";
export default {
  components: {PageTitle},
  data(){
    return {
      activities:[
        {name:"actv1", description:"loooooooooool", coachName:"Enta"},
        {name:"actv2", description:"loooooooooool2", coachName:"Ana"},
        {name:"actv3", description:"loooooooooool3", coachName:"Homa"},
        {name:"actv4", description:"loooooooooool4", coachName:"Lees"},
        {name:"actv5", description:"loooooooooool5", coachName:"Sool"},

      ]
    }
  },
}
</script>

<style>

</style>
