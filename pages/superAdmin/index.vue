<template>
  <div id="superAdminPage">
    <page-title icon="mdi mdi-crown" title="Super Admin Panal"/>
    <div class="row">
      <div class="col-md-12">
        <div class="tile">
          <div class="tile-header">
            <h3>Logs</h3>
          </div>
          <div class="tile-body">
            <table class="table table-striped">
              <thead>
              <tr>
                <th>time</th>
                <th>name</th>
                <th>action</th>
              </tr>
              </thead>
              <tbody>
                <tr v-for="(log, index) in logs" :key="index">
                  <td>{{log.time}}</td>
                  <td>{{log.name}}</td>
                  <td> {{log.action}}</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import PageTitle from "../../components/layout/pageTitle";
import moment from "moment/moment";
export default {
  name: "index",
  components: {PageTitle},
  async asyncData(){

  },
  data(){
    return {
      logs: [
        {name:"Abdullag ",action:"Did nothing", time:this.whatDay(moment()) },
        {name:"Ahmed ",action:"Did nothing 2", time:this.whatDay(moment('2021-08-15')) },
        {name:"Joo ",action:"Did nothing 3", time:this.whatDay(moment('2021-08-10')) },
      ]
    }
  },
  methods:{
    whatDay: function (date){
      if(moment().isSame(date)){
        return "Today"
      }else if(parseInt(moment().format('DD')) -parseInt(date.format('DD')) === 1){
        return "Yasterday"
      }else{
        return date.format("YYYY-MM-DD hh:mm:ss A")
      }
    }
  },
  computed:{

  }
}
</script>

<style scoped>

</style>
