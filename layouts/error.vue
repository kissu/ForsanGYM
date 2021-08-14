<template>
  <div style="height: 100vh" class="page-error d-flex flex-column ">
    <div class="cont text-center">
      <h1><i class="mdi mdi-alert-circle-outline"></i>
        {{errorMsg}}
      </h1>
      <p>The page you have requested is not found.</p>
      <p><a class="btn btn-primary" href="javascript:window.history.back();">Go Back</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "error",
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: 'Error 404: Page not found',
      otherError: 'An error occurred'
    }
  },
  computed: {
    errorMsg: function () {
      if (this.error.statusCode === 404) {
        return this.pageNotFound
      }
      return this.error.message
    }
  }

}
</script>

<style scoped>

</style>
