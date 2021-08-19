<template>
<div id="viewAdminsPage">

  <page-title icon="mdi mdi-account-star" title="Admins Page" />
  <div class="row">
    <div class="col-4" v-for="admin in admins" :key="admin.id">
      <div v-if="admin.role=='Admin'">
        <div class="widget-small info coloured-icon">
          <i class="icon mdi mdi-account-edit-outline btn" v-on:click="clickedAdmin = admin"
          data-toggle="modal" :data-target="`#editAdmin${admin.id}Modal`"></i>
          <div class="info">
            <h4>{{admin.name}}</h4>
            <p><b>Username : {{ admin.username }}</b></p>
            <p><b>Role : {{ admin.role }} <i class="mdi mdi-account-star"  style="color:#17a0ea"></i> </b></p>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="widget-small primary coloured-icon">
          <i class="icon mdi mdi-account-edit btn" v-on:click="clickedAdmin = admin"
             data-toggle="modal" :data-target="`#editAdmin${admin.id}Modal`"></i>
          <div class="info">
            <h4>{{admin.name}}</h4>
            <p><b>Username : {{ admin.username }}</b></p>
            <p><b>Role : {{ admin.role }} <i class="mdi mdi-crown"  style="color:#eabc17"></i> </b></p>
          </div>
        </div>
      </div>

    </div>
    <div v-if="clickedAdmin">
      <edit-admin :admin-data=" Object.assign({}, clickedAdmin)"/>
    </div>
  </div>



</div>
</template>

<script>
import PageTitle from "../../components/layout/pageTitle";
import EditAdmin from "../../components/superAdminPanal/editAdmin";
export default {
  components: {EditAdmin, PageTitle},
  async asyncData({store, $axios}){
    if(!store.state.admins.isLoaded){
      try{
        const res = await $axios.$get('auth/allAdmins')
        store.commit('setAdmins', res)
      }catch (err){
        console.log("Error on load admins : ")
        console.log(err)
      }
    }
  },
  data(){
    return{
      clickedAdmin:{}
    }
  },
  methods:{

  },
  computed:{
    admins: function (){
      return this.$store.state.admins.items
    }
  },
}
</script>

<style scoped>

</style>
