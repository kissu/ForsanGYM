<template>
<div>

  <div class="row">
    <div class="col">
      <input type="number" v-model="searchInput">
    </div>
  </div>

  <div class="row">
    <div class="col">
      <div class="btn-group">
        <button class="btn btn-outline-primary" @click="addData">add one</button>
        <button class="btn btn-outline-primary" @click="editData">edit last</button>
        <button class="btn btn-outline-primary" @click="deleteData">delete last</button>
      </div>

    </div>
    <div class="col">
    <h5>pageDate called : {{pageDataCont}}</h5>
  </div>
    <div class="col">
      <h5>search runed called : {{searchRun}}</h5>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <h1>All data : </h1>
    </div>
  </div>

  <div class="row">
    <div class="col">
      {{pageData}}
    </div>
  </div>

  <div class="row">
    <div class="col">
      <h1>Last element : </h1>
    </div>
  </div>

  <div class="row">
    <div class="col">
      {{lastElement}}
    </div>
  </div>


  <div class="row">
    <div class="col">
      <h1>Search Result : {{searchElement}}</h1>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <button class="btn btn-outline-primary" @click="viewElement">Click me </button>
    </div>
  </div>




</div>
</template>

<script>
export default {
  name: "tes.vue",
  data(){
  return{
    pageDataCont:0,
    searchInput:null,
    searchRun:0
  }
  },
  methods:{
    addData:function (){
      this.$store.commit('addTest', {
        id:this.lastElement.id+1, name:{first:"abdullah"+(this.lastElement.id+1), last:" mahmoud"}, counter:1
        })
    },
    editData:function (){
      this.$store.commit('editTest', {
        id:this.lastElement.id,
        name:{ first:"abdullah"+(this.lastElement.id) , last:" mahmoud"},
        counter:this.lastElement.counter+1
      })
    },
    deleteData:function (){
      this.$store.commit('deleteTest', {
        ...this.lastElement
      })
    },
    viewElement: function (){
      this.$router.push({
        name:'test2',
        query:{
          element : this.searchElement
        }
      })
    }

  },
  computed:{
    pageData: function (){
      this.pageDataCont++
      return this.$store.state.testArr
    },
    lastElement: function (){
      return this.pageData[this.pageData.length-1]
    },
    searchElement:function (){
      const number = Number(this.searchInput)
      if(this.searchInput){
        this.searchRun++
        return this.$store.state.testArr.find(obj => obj.id === number)
      }
      return {}
    }
  },

  created() {
    this.$store.commit('setTest', [
      {id:0, name:{first:"abdullah0", last:"mahmoud"}, counter:1}
    ])
  }
}
</script>

<style scoped>

</style>
