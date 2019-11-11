<template>
	<div id="middle_up">
		<div id="middle_up_logo">
			<img id="logo" src="../images/logo.png" class="img-responsive" alt="logo" style="width: 100px;">
		</div>
		<div id="middle_up_menu">
			<ul class="layui-nav">
				<li class="layui-nav-item">
					<router-link to="/d">鬼知道写啥&nbsp;&nbsp;</router-link>
				</li>
				<li class="layui-nav-item">
					<router-link to="/e">根本不知道&nbsp;&nbsp;</router-link>
				</li>
				<li class="layui-nav-item">
					<router-link to="/f">想写啥写啥&nbsp;&nbsp;</router-link>
				</li>
				<li class="layui-nav-item">
					<router-link to="/g">你开心就好&nbsp;&nbsp;</router-link>
				</li>
			</ul>
		</div>
		<div id="mmiddle_up_search">
			<div class="input-group" style="margin-top: 40px;">
				<label class="input-group-addon">搜索</label>
			  <input placeholder="请输入" style="height: 50px;font-size: 20px;width: 200px;">
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
	#middle_up {
		height: 100px;
	}
	#middle_up_logo {
		height: 100%;
		float: left;
		margin-left: -167px;
	}
	#middle_up_menu {
		width: 710px;
		height: 100%;
		float: left;
	}
	#mmiddle_up_search {
		float: right;
		width: 260px;
		height: 100%;
		margin-right: -130px;
	}
	a {
		float: left;
		margin-top: 50px;
		font-size: 20px;
		color: #000000;
	}
</style>
