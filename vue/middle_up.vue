<template>
	<div id="middle_up">
		<div id="middle_up_logo">
			<img id="logo" src="../images/logo.jpg" class="img-responsive" alt="logo" style="width: 100px;">
		</div>
		<div id="middle_up_menu">
			<a href="#">鬼知道写啥&nbsp;&nbsp;</a>
			<a href="#">根本不知道&nbsp;&nbsp;</a>
			<a href="#">想写啥写啥&nbsp;&nbsp;</a>
			<a href="#">你开心就好&nbsp;&nbsp;</a>
			<a href="#">不知道说啥&nbsp;&nbsp;</a>
			<a href="#">随性而为之&nbsp;&nbsp;</a>
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
