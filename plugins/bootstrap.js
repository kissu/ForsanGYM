import Vue from 'vue'
/* Bootstrap CSS */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/* jQuery */
import JQuery from 'jquery'
window.$ = JQuery

import '@mdi/font/css/materialdesignicons.css'

import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)
