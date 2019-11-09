import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
Vue.use(VueRouter);






//二级
import top from '../vue/top.vue';
import middle from '../vue/middle.vue';
import bottom from '../vue/bottom.vue';


//三级
import middle_up from '../vue/middle_up.vue';
import middle_down from '../vue/middle_down.vue';

//四级




var router = new VueRouter({
	routes:[//二级
		{
			path: "/*", 
			components: {
				"top": top,
				"middle": middle,
				"bottom": bottom
			},
			children: [ //三级
				{
					path: "/*",
					components: {
						"middle_up": middle_up,
						"middle_down": middle_down
					},
					children: [//四级
					]
				}
			]
		}
		
	]
});

export default router;