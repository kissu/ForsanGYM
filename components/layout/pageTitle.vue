<template>
  <div class="app-title">
    <div class="d-flex justify-content-between align-items-center w-100">
      <div class="div1">
        <h1>
          <i :class="icon+' mr-1'"></i>
          {{ title }}
        </h1>
      </div>
      <div v-if="addBtn && addBtn.to && addBtn.text" class="div2">
        <router-link :to="addBtn.to" class="btn btn-primary">
          {{ addBtn.text }}
        </router-link>
      </div>
    </div>
    <!--    <slot />-->
    <!--    <slot />-->
  </div>
</template>

<script>
export default {
  name: "pageTitle",
  props: {
    title: {
      required: true,
    },
    icon: {
      required: true,
    },
    addBtn: {
      type: Object
    }
  },
  methods: {},
}
</script>

<style scoped>

</style>
