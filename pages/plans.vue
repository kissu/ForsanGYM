<template>
  <div id="plan">
    <div id="row">
      <div class="col-md-12">
        <div class="tile">
          <h3 class="tile-title">Plans</h3>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Monthly</td>
                <td>1 month of subscription.</td>
                <td>300</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Quarterly</td>
                <td>3 monthes of subscription.</td>
                <td>700</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Half year</td>
                <td>6 months of subscription.</td>
                <td>1250</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Yearly</td>
                <td>12 months of subscription.</td>
                <td>2200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div id="row">
      <div id="col-md-3">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button class="btn btn-success" type="button">Add Plan</button>
        &nbsp;
        <button class="btn btn-warning" type="button">Edit Plans</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>