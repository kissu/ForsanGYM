<template>
  <div id="activirties-page">
    <PageTitle title="Activities" icon="mdi mdi-karate"
               :addBtn="{to:'/activities/new',text:'Add New Activity'}"
    >
      <!-- slot content here -->
    </PageTitle>
    <AppActivities/>
    <div class="row mt-2">
      <div class="col-12">
        <playerActivity/>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../components/layout/pageTitle";
import AppActivities from "../../components/activities/appActivities";
import playerActivity from "../../components/activities/playerActivity"
export default {
  components: {AppActivities, PageTitle, playerActivity},

};
</script>

<style>

</style>
