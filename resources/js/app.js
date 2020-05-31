require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from './components/Index.vue';
import Create from './components/Create.vue';
import Read from './components/Read.vue';

const routes = [
    { path: '/', component: Index },
    { path: '/create', component: Create },
    { path: '/read/:id', component: Read, name: 'read' }
]

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode : 'history' 
})

const app = new Vue({
    router
}).$mount('#app')