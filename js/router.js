import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
Vue.use(VueRouter);



//一级
import App from '../vue/App.vue';

//二级
import middle from '../vue/middle.vue';
import login from '../vue/login.vue';
import register from '../vue/register.vue';
import expect from '../vue/expect.vue';
import feedback from '../vue/feedback.vue';


//三级
import middle_up from '../vue/middle_up.vue';
import middle_down from '../vue/middle_down.vue';
import parklist from '../vue/parklist.vue';
import middle_backlog_show from '../vue/middle_backlog_show.vue';
import mymessage from '../vue/mymessage.vue';
import history from '../vue/history.vue';


//四级



var router = new VueRouter({
	routes: [{
			path: "/",
			redirect: "/App"
		},
		{
			path: "/login",
			component: login
		},
		{
			path: "/register",
			component: register
		},
		{
			path: "/expect",
			component: expect
		},
		{
			path: "/feedback",
			component: feedback
		},
		{
			path: "/middle",
			component: middle,
			children: [{
				path: "/App",
				components: {
					"middle_up": middle_up,
					"middle_down": middle_down
				}
			}, ]
		},

		{
			path: "/parklist",
			component: parklist,
			children: [{
				path: "/parklist",
				components: {
					"middle_up": middle_up
				}
			}]

		},
		{
			path: "/middle_backlog_show",
			component: middle_backlog_show,
			children: [{
				path: "/middle_backlog_show",
				components: {
					"middle_up": middle_up
				}
			}]

		},
		{
			path: "/mymessage",
			component: mymessage,
			children: [{
					path: "/mymessage",
					components: {
						"middle_up": middle_up,

					}
				}

			]
		},
		{
			path: "/history",
			component: history,
			children: [{
					path: "/history",
					components: {
						"middle_up": middle_up,

					}
				}

			]
		},
		
	]
});

export default router;
