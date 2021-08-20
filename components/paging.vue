<template>
  <div class="row flex-row-reverse">
    <div class="col-auto">
      <div
        class="dataTables_paginate paging_simple_numbers"
        id="sampleTable_paginate"
      >
        <ul class="pagination">
          <li class="paginate_button page-item previous"
              :class="{disabled:(currentPage <= 1)}"
              id="previous_btn">
            <button :disabled="(currentPage <= 1)" @click="goToPage(currentPage-1)" href="#"
                    aria-controls="sampleTable" data-dt-idx="0" tabindex="0"
                    class="page-link">
              Previous
            </button>
          </li>
          <li v-for="page in Math.ceil(count/perPage)"
              class="paginate_button page-item"
              :class="{active: (page === currentPage)}"
              :key="page"
          >
            <button
              :disabled="(page === currentPage)"
              aria-controls="sampleTable" data-dt-idx="1" tabindex="0"
              @click="goToPage(page)"
              class="page-link">
              {{ page }}
            </button>
          <li
            class="paginate_button page-item previous disabled"
            id="Next_btn"
          >
            <a
              href="#"
              aria-controls="sampleTable"
              data-dt-idx="0"
              tabindex="0"
              class="page-link"
            >Next</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "paging",
  props: {
    count: {
      required: true
    },
    perPage: {
      required: true
    }
  },
  data() {
    return {
      currentPage: 1
    }
  },
  methods: {
    goToPage : function (page) {
      this.currentPage = page
      this.$emit("getDataAtPage",page)
    }
  }
}
</script>

<style scoped>

</style>
