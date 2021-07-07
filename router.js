import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// this is just a function to help me not writing the full path of each page
const page = (path) => () => import(`~/pages/${path}`).then(m => m.default || m)

const routes = [
  {path: '/', name: 'home', component: page('index.vue')},

  {path: '/players', name: 'players.all', component: page('players/index.vue')},
  {path: '/players/:id/:name?', name: 'players.single', component: page('players/view.vue')},
  // TODO: Complete all the app routes
];


export function createRouter() {
  return new Router({
    routes,
    mode: 'history'
  })
}
