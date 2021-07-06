<template>
  <div class="app-title">
    <div>
      <h1><i :class="icon+' mr-2'"></i>{{title}}</h1>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "pageTitle",
  props: {
    title: {
      required: true,
    },
    icon:  {
      required: true,
    },
  }
}
</script>

<style scoped>

</style>
