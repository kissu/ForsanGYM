<template>
  <div id="purchaseServiceCom">
    <CollapseComponent collapse-name="puchase" foot-btn-text="Purchase" head-btn-text="Purchase A Service" btns-class="btn btn-primary">
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
        </div>
      </form>

    </CollapseComponent>
  </div>
</template>

<script>
import CollapseComponent from "../../layout/Collapse";
export default {
  name: "purchaseService",
  components: {CollapseComponent}
}
</script>

<style scoped>

</style>
