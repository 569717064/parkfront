 import $ from 'jquery';
import 'bootstrap3/dist/css/bootstrap.min.css';
import layer from 'layui-layer';
import axios from 'axios';
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';


axios.defaults.baseURL = "http://192.168.174.1:8888";
Vue.use(VueRouter);

import router from './router.js';

//一级
import App from '../vue/App.vue';



// window.$ = $;
// window.jQuery = $;
// window.axios = axios;
// window.Vue = Vue;
// window.VueRouter = VueRouter;




var app = new Vue({
	el: "#app",
	render(c){
		return c(App);
	},
	router
})
	
