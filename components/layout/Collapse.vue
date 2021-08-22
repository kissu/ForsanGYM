<template>
  <div id="Collapse-component">

    <div class="accordion col-12 " :id=" CollapseName + 'accordionCollapse'">
      <div class="card">
        <div class="card-header" :id="CollapseName +'headingOneCollapse'">
          <h2 class="mb-0">
            <button :class=" BtnsClass+' text-center col-12'" type="button" data-toggle="collapse"
                    :data-target="'#' +CollapseName + 'collapse'" aria-expanded="true" aria-controls="collapse">
              <i :class="icon"></i>
              {{ HeadBtnText }}
            </button>
          </h2>
        </div>
        <div :id=" CollapseName + 'collapse'" class="collapse" :aria-labelledby="CollapseName +'headingOneCollapse'"
             :data-parent="'#' + CollapseName + 'accordionCollapse'">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="tile mb-0">
                  <div class="tile-body">
                    <slot></slot>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "CollapseComponent",
  props: {
    HeadBtnText: {required: true},
    BtnsClass: {required: true},
    CollapseName: {required: true},
    icon:{},
  }
}
</script>

<style scoped>

</style>
