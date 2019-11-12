 import $ from 'jquery';
import 'bootstrap3/dist/css/bootstrap.min.css';
import 'bootstrap3/dist/js/bootstrap.min.js';
import layer from 'layui-layer';
import 'layui-src/dist/css/layui.css';
import axios from 'axios';
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';


/* axios.defaults.baseURL = "http://192.168.174.1:8888"; */
axios.defaults.baseURL = "http://localhost:8888";
Vue.use(VueRouter);

import router from './router.js';

//一级
import App from '../vue/App.vue';



// window.$ = $;
// window.jQuery = $;
window.axios = axios;
window.layer = layer;
// window.Vue = Vue;
// window.VueRouter = VueRouter;




var app = new Vue({
	el: "#app",
	render(c){
		return c(App);
	},
	router
})
	
