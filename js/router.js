import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
Vue.use(VueRouter);



//一级
import App from '../vue/App.vue';

//二级
import middle from '../vue/middle.vue';
import login from '../vue/login.vue';


//三级
import middle_down from '../vue/middle_down.vue';

//四级




var router = new VueRouter({
	routes: [
		{path: "/", component: middle, redirect: "/App"},
		{path: "/login", component: login},
		{
			path: "/middle", component: middle,
			children: [
				{path: "/App", component: middle_down}
			]
		}
		
		
	]
});

export default router;