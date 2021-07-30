import { parseHTML } from 'jquery';
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// this is just a function to help me not writing the full path of each page
const page = (path) => () => import(`~/pages/${path}`).then(m => m.default || m)

const routes = [
  {path: '/', name: 'home', component: page('index.vue')},
  {path: '/players', name: 'allPlayers', component: page('players/index.vue')},
  {path: '/players/:id', name: 'singlePlayer', component: page('players/view.vue')},
  {path: '/plans', name: 'allPlans', component: page('plans/index.vue')},
  {path: '/plans/new', name: 'newPlan', component: page('plans/new.vue')},
  {path: '/activities', name : 'allActs', component: page ('activities/index.vue')},
  {path: '/activities/new', name: 'newAct', component: page('activities/new.vue')},
  // TODO: Complete all the app routes
];


export function createRouter() {
  return new Router({
    routes,
    mode: 'history'
  })
}
