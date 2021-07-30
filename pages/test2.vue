<template>
<div>
  <h1>This is test 2</h1>
  {{element}}
</div>
</template>

<script>
export default {
  name: "test2.vue",
  computed:{
    element:function (){
      return this.$route.query.element
    }
  },
  created() {

  }
}
</script>

<style scoped>

</style>
