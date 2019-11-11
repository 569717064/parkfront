<template>
	<div>
		<div id="top">
			<div id="top_left">
				<router-link to="/App">首页&nbsp;&nbsp;|&nbsp;&nbsp;</router-link>
				<router-link to="/expect">网站后台&nbsp;&nbsp;|&nbsp;&nbsp;</router-link>
				<router-link to="/feedback">问题反馈</router-link>
			</div>
			
			<div id="top_right">
				<div style="float: left;">
					<router-link to="/login">
						<label class="glyphicon glyphicon-user"></label>登录&nbsp;|&nbsp;
					</router-link>
				</div>
				<div style="float: left;">
					<router-link to="/register">
						<label class="glyphicon glyphicon-plus"></label>注册&nbsp;|&nbsp;
					</router-link>
				</div>
				<div style="float: left;">
					<router-link to="/out">
						<label class="glyphicon glyphicon-log-out"></label>退出
					</router-link>
				</div>
			</div>
		</div>
		
		<!-- 用于中间middle组件切换 -->
		<router-view></router-view>
		
		<div id="bottom">
			<span>蜗牛共享车位项目小组&copy;版权所有</span>
		</div>
	</div>
</template>

<script>
	export default {
		created() {
	
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
		
		
	}
</script>

<style scoped="scoped">
	/* top start */
	#top {
		background-color: black;
		height: 40px;
	}
	#top_left {
		height: 100%;
		float: left;
		margin-left: 170px;
		margin-top: 10px;
	}
	#top_right {
		height: 100%;
		float: right;
		margin-right: 170px;
		margin-top: 10px;
	}
	a {
		color: white;
		cursor:pointer;
	}
	/* top end */
	
	/* bottom start */
	#bottom {
		background-color: cornsilk;
		height: 100px;
		text-align: center;
		font-size: 30px;
	}
	/* bottom end */
</style>
