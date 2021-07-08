<template>
  <div id="activirties-page">
    <PageTitle title="Activities" icon="fa fa-bars"
               :addBtn="{to:'/activities/new',text:'Add New Activity'}"
    >
      <!-- slot content here -->
    </PageTitle>
    <AppActivities/>
    <playerActivity/>
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
