<template>
  <div id="appActivties">
    <div class="row " >
      <div class="col-md-4 text-break" v-for="(item) in $store.state.activities" :key="item.id">
        <div class="tile" >
          <div class="tile-title-w-btn">
            <h3 class="title">{{item.name}}</h3>
            <div class="btn-group">
              <button type="button"
                      class="btn btn-primary mx-auto w-100"
                      data-toggle="modal"
                      data-target="#staticBackdropEditModal"
                      @click="AssignActivity(item)">
                <i class="mdi mdi-clipboard-edit"></i>
              </button>
              <button class="btn btn-danger" @click="deleteActivity(item)" data-toggle="modal"
                      :data-target="'#DeleteCheckModal'+DeleteClickedActivity.id" ><i class="fa fa-lg fa-trash"></i></button>
            </div>
          </div>
          <div class="tile-body">
            <b>Coach : {{item.coachName}} </b><br>
            <b>Coach Phone : {{item.coachPhoneNumber}} </b><br>
            <b>Price : </b>{{item.price}}<br><br>
            <p><b>Description : </b>{{item.description}}</p>
          </div>
        </div>
      </div>
    </div>

  <div id="edit-activity" v-if="EditClickedActivity">
    <editActivity :activity="EditClickedActivity"/>
  </div>

  <div id="delete-Activity" v-if="DeleteClickedActivity">
    <DeleteCheck header-msg="Are you sure you want to delete this activity ?" :item-id="DeleteClickedActivity.id" delete_url="/activities/delete/:id" commitAction="deleteActivity">
      <p><b>Name : </b>{{DeleteClickedActivity.name}}</p>
      <p><b>Coach : </b>{{DeleteClickedActivity.coachName}}</p>
      <p><b>Coach Phone : </b>{{DeleteClickedActivity.coachPhoneNumber}}</p>
      <p><b>Description : </b>{{DeleteClickedActivity.description}}</p>
      <p><b>Price : </b>{{DeleteClickedActivity.price}}</p>
    </DeleteCheck>
  </div>

  </div>
</template>

<script>
import editActivity from "./editActivity";
import DeleteCheck from "../layout/deleteCheck";
export default {
  name: "appActivities",
  components: {DeleteCheck, editActivity},
  data(){
    return {
      EditClickedActivity : {},
      DeleteClickedActivity : {},
    }
  },
  methods:{
    AssignActivity: function (item){
      this.EditClickedActivity = item
    },
    deleteActivity: function(item){
      this.DeleteClickedActivity = item
    }
  },

}
</script>

<style scoped>

</style>
