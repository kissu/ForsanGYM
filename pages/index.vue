<template>
  <div id="HomePage">
    <page-title icon="fa fa-dashboard" title='Dashboard' />
    <div class="row">
      <div class="col-md-6 col-lg-3">
        <!-- TODO: Make this a reusable component @Ahmedgamal77823 -->
        <div class="widget-small primary coloured-icon">
          <i class="icon fa fa-users fa-3x"></i>
          <div class="info">
            <h4>Players</h4>
            <p><b>100</b></p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="widget-small primary coloured-icon">
          <i class="icon fa fa-usd fa-3x"></i>
          <div class="info">
            <h4>Income</h4>
            <p><b>400 EGP</b></p>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="tile">
          <h3 class="tile-title">Summary of today's subscriptions</h3>
          <table style="font-size:17px" class="table table-striped">
            <thead>
            <tr>
              <th>#</th>
              <th>Type of subscription</th>
              <th>Number of new players</th>
              <th>Total income</th>
            </tr>
            </thead>
            <tbody>
              <tr>
              <td>1</td>
              <td>Daily</td>
              <td>2</td>
              <td>80</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Monthly</td>
              <td>3</td>
              <td>1200</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Monthly (Groups)</td>
              <td>5</td>
              <td>1500</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Quarterly</td>
              <td>1</td>
              <td>700</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Half year</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Yearly</td>
              <td>0</td>
              <td>0</td>
            </tr>
            </tbody>
          </table>
         </div>
      </div>

      <div class="col-md-6" >
        <div class="tile" >
          <h3 class="tile-title">Summary of other services</h3>
          <services-summary-table />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-12 col-12">
          <div class="tile">
            <h3 class="tile-title">Service</h3>
            <div class="tile-body">
              <form class="form-horizontal w-100">
                <div class="form-group row">
                  <div class="col-md-12">
                    <div class="form-check">
                      <label class="form-check-label" style="font-size:20px">
                        <input class="form-check-input" style = "height:20px" type="radio" name="gender">Water--3
                      </label>
                    </div>
                    <div class="form-check" style="font-size:20px">
                      <label class="form-check-label">
                        <input class="form-check-input" type="radio" style = "height:20px" name="gender">Checken Meal--45
                      </label>
                    </div>
                    <div class="form-check" style="font-size:20px">
                      <label class="form-check-label">
                        <input class="form-check-input" type="radio" style = "height:20px" name="gender">Oats Meal--15
                      </label>
                    </div>
                    <div class="form-check" style="font-size:20px">
                      <label class="form-check-label">
                        <input class="form-check-input" type="radio" style = "height:20px" name="gender">Cotton T-Shert--120
                      </label>
                    </div>
                    <div class="form-check" style="font-size:20px">
                      <label class="form-check-label">
                        <input class="form-check-input" type="radio" style = "height:20px" name="gender">stretch T-Shert--150
                      </label>
                    </div>
                  </div>
                  <div class="col-md-8 mt-4">
                    <button class="btn btn-primary" type="button"><i class="fa fa-fw fa-lg fa-check-circle"></i>Submit</button>&nbsp;&nbsp;&nbsp;
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      <div class="col-md-5">
        <purchaseService/>
        <div class="my-3">
        <DeleteService/>
        </div>
        <div class="my-3">
          <AddNewService/>
        </div>
      </div>




    </div>



  </div>
</template>

<script>
import ServicesSummaryTable from "../components/dashboard/servicesSummaryTable";
import PageTitle from "../components/layout/pageTitle";
import AddNewService from "../components/dashboard/services/addNewService";
import CollapseComponent from "../components/dashboard/Collapse";
import DeleteService from "../components/dashboard/services/DeleteService";
import PurchaseService from "../components/dashboard/services/purchaseService";
export default {
  components: {
    PurchaseService,
    DeleteService,
    CollapseComponent,
    AddNewService,
    PageTitle,
    ServicesSummaryTable},
  methods: {

    },
};
</script>
