<template>
  <div id="sidebar">
    <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
    <aside class="app-sidebar">
      <div class="app-sidebar__user"><img class="app-sidebar__user-avatar" src="/logo.jpeg" alt="User Image" width="90">
        <div>
          <p class="app-sidebar__user-name">Ahmed Gamal</p>
          <p class="app-sidebar__user-designation">Admin</p>
        </div>
      </div>
      <ul class="app-menu">
        <li v-for="(item,index) in list" :key='index'>
          <a class="app-menu__item" :href="item.route">
            <i :class="`app-menu__icon ${item.icon}`"></i>
            <span class="app-menu__label">{{item.text}}</span>
          </a>
        </li>
      </ul>
    </aside>

  </div>

</template>

<script>
export default {
  name: "appSidebar",
  data(){
    return{
      list:[
          {text: "Dashboard", icon: "fa fa-home", route: '/'},
          {text: "Players", icon: "fa fa-user", route: '/players'},     
          {text: "Ended Subscription", icon: "fa fa-calendar-times-o", route: '/ended-subscriptions'},        
          {text: "Plans", icon: "fa fa-bar-chart", route: '/plans'},     
      ]
    }
  },
}
</script>

<style scoped>

</style>
