<template>
	<div id="top">
		<div id="top_left">
			<a @click.prevent="">首页&nbsp;&nbsp;|&nbsp;&nbsp;</a>
			<a @click.prevent="">网站后台&nbsp;&nbsp;|&nbsp;&nbsp;</a>
			<a @click.prevent="">问题反馈</a>
		</div>
		
		<div id="top_right">
			<div style="float: left;">
				<a @click.prevent="">
					<label class="glyphicon glyphicon-user"></label>登录&nbsp;|&nbsp;
				</a>
			</div>
			<div style="float: left;">
				<a @click.prevent="">
					<label class="glyphicon glyphicon-plus"></label>注册&nbsp;|&nbsp;
				</a>
			</div>
			<div style="float: left;">
				<a @click.prevent="">
					<label class="glyphicon glyphicon-log-out"></label>退出
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
		
	}
</script>

<style scoped="scoped">
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
	
</style>
