 import $ from 'jquery';
import 'bootstrap3/dist/css/bootstrap.min.css';
import 'bootstrap3/dist/js/bootstrap.min.js';
import layer from 'layui-layer';
import 'layui-src/dist/css/layui.css';
import axios from 'axios';
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';



// axios.defaults.baseURL = "http://192.168.174.1:8888";
axios.defaults.baseURL = "http://localhost:8888";
Vue.use(VueRouter);

//允许前端携带cookie
axios.defaults.withCredentials = true;
import router from './router.js';

//一级
import App from '../vue/App.vue';



window.$ = $;
window.jQuery = $;
window.axios = axios;
window.Vue = Vue;
window.VueRouter = VueRouter;
window.layer = layer;






router.beforeEach((to,from,next)=>{
	if (to.path == "/login") {
		next();
	} else if(to.path == "/register"){
		next();
	} else if(to.path == "/App"){
		next();
	}else{
		axios.post("/isLogin")
		.then((response)=>{
			if (response.data.isLogin) {
				next();
			}else{
				next({path: "/login"});
			}
		})
	}
})



var app = new Vue({
	el: "#app",
	render(c){
		return c(App);
	},
	router
})
	
