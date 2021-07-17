<template>
<div id="Collapse-component">

  <div class="accordion col-12" id="accordionCollapse">
    <div class="card">
      <div class="card-header" id="headingOneCollapse">
        <h2 class="mb-0">
          <button :class=" BtnsClass+' text-center col-12'" type="button" data-toggle="collapse" data-target="#collapse" aria-expanded="true" aria-controls="collapse">
            {{HeadBtnText}}
          </button>
        </h2>
      </div>
      <div id="collapse" class="collapse" aria-labelledby="headingOneCollapse" data-parent="#accordionCollapse">
        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <div class="tile">
                <div class="tile-body">
                  <slot></slot>
                </div>
                <div class="tile-footer">
                  <div class="row">
                    <div class="col-md-8 ">
                      <button :class="BtnsClass" type="button" data-toggle="collapse" data-target="#collapse" >
                        <i class="fa fa-fw fa-lg fa-check-circle"></i>
                        {{FootBtnText}}</button>
                    </div>
                  </div>
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
  props:{
    HeadBtnText:{required:true},
    FootBtnText:{required: true},
    BtnsClass:{required:true}
  }
}
</script>

<style scoped>

</style>
