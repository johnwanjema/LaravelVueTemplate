/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('../bootstrap');

window.Vue = require('vue');


import App from './App'

// router
import router from './routes.js';
window.router = router;
window.Fire = new Vue();

//v-form
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);


import Swal from 'sweetalert2';
window.Swal = Swal;

//axios
import axios from "./axios";
window.axios = axios;

import store from './store/index';

//Bootstrtap vue
import BootstrapVue from 'bootstrap-vue'

//bootstapVue
Vue.use(BootstrapVue);
import 'bootstrap-vue/dist/bootstrap-vue.css'

//jquery
import $ from 'jquery'
window.$ = $




// router.beforeEach((to, from, next) => {
//     // console.log(to.meta)
//     if (to.name == "joinUsComponent" || to.name == "HomeComponent") {
//         next()
//     } else {
//         if (store.getters.isAuthenticated == false) {
//             next({
//                 path: '/joinUs',
//             })
//             // location.reload();
//         } else {
//             next()
//         }
//     }
// })




//UPPERCASE TEXT
Vue.filter('uppercaseText', function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});


import moment from 'moment'

Vue.filter('filterDate', function (myDate) {
    return moment(new Date(myDate)).format('Do MMMM YYYY, HH:mm:ss A');
});

Vue.filter('filterDateOnly', function (myDate) {
    return moment(new Date(myDate)).format('Do MMMM YYYY');
});



Vue.filter('filterHumanDate', function (myDate) {
    return moment(new Date(myDate)).format('Do MMMM YYYY, h:mm:ss A');
})


import VueToast from 'vue-toast-notification';
// Import any of available themes
import 'vue-toast-notification/dist/theme-default.css';
//import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);


// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.component('Loading', Loading);


// // Add a 401 response interceptor
// axios.interceptors.response.use(function (response) {
//     store.commit('SET_LOADING', false)
//     return response;
// }, function (error) {
//     store.commit('SET_LOADING', false)
//     // console.log(error.response.status)
//     if (401 === error.response.status) {
//         window.location = '/joinUs'
//     } else {
//         return Promise.reject(error);
//     }
// });


// // Add a request interceptor
// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     store.commit('SET_LOADING', true)
//     // $Progress.start();
//     return config;
// }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
// });

const app = new Vue({
    el: '#app', router, store,
    data: {},
    methods: {},
    watch: {
        '$route'() {
            //get class name
            var x = document.getElementsByClassName("fixedNav_position");
            // get width of the document
            var width = document.body.clientWidth;
            // // closee the side nav if the width is less than 768 else let navbar remain normal
            if (width <= 768) {
                // remove class name
                x[0].classList.remove("sidebar-left-opened");
            }
        }
    },
    watch: {
        '$route'() {
            //get class name
            // var x = document.getElementsByClassName("sidebar-main");
            // // get width of the document
            // console.log('x ni hii hapa',x)
            var width = document.body.clientWidth;
            // closee the side nav if the width is less than 768 else let navbar remain normal
            if (width <= 768) {
                document.querySelector('body').classList.remove('sidebar-main');
            } else {
                var path = this.$route.path.split("/")[1]
                // console.log(path)
                if (path != 'landlord') {
                    document.body.className += ' ' + 'sidebar-main';
                }
            }
        }
    },
    created() {
    },
    render: h => h(App)
}).$mount('#app')