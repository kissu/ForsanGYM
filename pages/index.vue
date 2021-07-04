<template>
  <div id="HomePage">
    <div class="row">
      <div class="col-md-6 col-lg-3">
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
          <h3 class="tile-title">Summary of today's subscritions</h3>
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
                <td>Monthly</td>
                <td>3</td>
                <td>1200</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Quarterly</td>
                <td>1</td>
                <td>750</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Half year</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>4</td>
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
          <table style="font-size:17px"  class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Type of service</th>
                <th>Number of paid items</th>
                <th>Total income</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>T-Shirt</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Chicken meal</td>
                <td>2</td>
                <td>90</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Oats meal</td>
                <td>4</td>
                <td>60</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Water</td>
                <td>15</td>
                <td>45</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    <!-- counter table -->
    <div class="row">
      <div class="col-md-3">
          <div class="tile">
            <h3 class="tile-title">Service</h3>
            <div class="tile-body">
              <form class="form-horizontal">
                
                <div class="form-group row">
                  <div class="col-md-9">
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
                </div>
              </form>
            </div>
            <div class="tile-footer">
              <div class="row">
                <div class="col-md-8 col-md-offset-3">
                  <button class="btn btn-primary" type="button"><i class="fa fa-fw fa-lg fa-check-circle"></i>Submit</button>&nbsp;&nbsp;&nbsp;
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {};
</script>