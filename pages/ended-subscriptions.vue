 <template>
  <div id="ended_page">
    <page-title title="Ended Subscriptions" icon="fa fa-calendar-times-o" />
    <div class="row">
      <div class="col-md-12">
        <div class="tile">
          <h3 class="tile-title">Ended Subscriptions</h3>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Begin Date</th>
                <th>End Date</th>
                <th>Plane</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in list" :key="index">
                <td>{{index}}</td>
                <td>{{item.name}}</td>
                <td>{{item.phoneNumber}}</td>
                <td>{{item.beginDate}}</td>
                <td>{{item.endDate}}</td>
                <td>{{item.plan}}</td>
              </tr>
            </tbody>
          </table>
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
    return{
      list:[
        {
          name: "Ahmed", phoneNumber: "123456", beginDate: "1/1/2020", endDate: "1/2/2020", plan: "Monthly"
        },
        {
          name: "ALi", phoneNumber: "123456", beginDate: "1/1/2020", endDate: "1/2/2020", plan: "Monthly"
        },
      ]
    }
  },
};
</script>

<style>
</style>
