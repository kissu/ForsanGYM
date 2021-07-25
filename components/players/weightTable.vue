<template>
<div id="weightTablePage">

  <div class="tile">
    <div class="tile-title-w-btn">
      <h2 data-toggle="dropdown" class="title">
        <span class="mdi mdi-weight-kilogram"></span>
        Weight Table
      </h2>
      <div class="btn-group ">
        <button class="btn btn-outline-danger mx-2"><i class="mdi mdi-minus-box"></i> Delete Entry</button>
        <button class="btn btn-outline-primary "><i class="mdi mdi-plus-box"></i> Add Entry</button>
      </div>
    </div>
    <div class="col tile-body">
      <!--            <div class="col-md-6">-->
      <!--              <div class="tile">-->
      <!--                <h3 class="tile-title">Monthly Sales</h3>-->
      <!--                <div class="embed-responsive embed-responsive-16by9">-->
      <!--                  <canvas class="embed-responsive-item" id="lineChartDemo" style="width: 477px; height: 268px;" width="477" height="268"></canvas>-->
      <!--                </div>-->
      <!--              </div>-->
      <!--            </div>-->
      <table class=" table table-striped ">
        <thead>
        <tr>
          <th class="col-md-1">#</th>
          <th class="col-md-4">Date</th>
          <th class="col-md-4">Weight</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>20-10-2020</td>
          <td>78</td>
        </tr>
        <tr>
          <td>2</td>
          <td>21-10-2020</td>
          <td>78.5</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "weightTable",
  props:{
    playerId:{
      required:true
    }
  }
}
</script>

<style scoped>

</style>
