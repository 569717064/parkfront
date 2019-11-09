import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
Vue.use(VueRouter);






//二级
import top from '../vue/top.vue';
import middle from '../vue/middle.vue';
import bottom from '../vue/bottom.vue';

//三级
import top_logo from '../vue/top_logo.vue';
import top_middle from '../vue/top_middle.vue';
import top_right from '../vue/top_right.vue';


var router = new VueRouter({
	routes:[
		{
			path: "/*", components: {
				"top": top,
				"middle": middle,
				"bottom": bottom
			},
			children: [
				{path: "/*", components: {
					"top_logo": top_logo,
					"top_middle": top_middle,
					"top_right": top_right
					},
				}
			]
		}
		
	]
});

export default router;