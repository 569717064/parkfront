 import $ from 'jquery';
import 'bootstrap3/dist/css/bootstrap.min.css';
import layer from 'layui-layer';
import axios from 'axios';
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';



axios.defaults.baseURL = "http://192.168.174.1:8888";
Vue.use(VueRouter);


//一级
import App from '../vue/App.vue';

//二级
import top from '../vue/top.vue';
import middle from '../vue/middle.vue';
import bottom from '../vue/bottom.vue';
//三级


// window.$ = $;
// window.jQuery = $;
// window.axios = axios;
// window.Vue = Vue;
// window.VueRouter = VueRouter;





var router = new VueRouter({
	routes:[
		{
			path: "/*", components: {
				"top": top,
				"middle": middle,
				"bottom": bottom
			}
		}
		
	]
});


var app = new Vue({
	el: "#app",
	render(c){
		return c(App);
	},
	router
})
	
