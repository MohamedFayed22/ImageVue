import Vue from 'vue'
import App from './App.vue'

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);


import VueRouter from 'vue-router';
Vue.use(VueRouter);


import VueAxios from 'vue-axios';



import axios from 'axios'

Vue.prototype.$axios = axios;


import VueBarcode from 'vue-barcode'

Vue.component('barcode', VueBarcode)

import drr from '@minogin/vue-drag-resize-rotate'
Vue.component('drr', drr);


Vue.use(VueAxios, axios);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// Vue.component('home-component', require('./components/HomeComponent.vue').default);

import HomeComponent from './components/HomeComponent.vue';
import PrintComponent from './components/PrintComponent.vue';
import UploadComponent from './components/UploadComponent.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeComponent
  },
  {
    name: 'upload',
    path: '/upload',
    component: UploadComponent
  },
  {
    name: 'print',
    path: '/print',
    component: PrintComponent
  }

];

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const router = new VueRouter({ mode: 'history', routes: routes});
// new Vue(Vue.util.extend({ router }, App)).$mount('#app');
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// const app = new Vue({
//     el: '#app',
// });

