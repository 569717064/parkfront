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
		</div>
		<div id="mmiddle_up_search">
			
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
	}
	#middle_up_menu {
		width: 500px;
		height: 100%;
		float: left;
	}
	#mmiddle_up_search {
		background-color: cornsilk;
		float: left;
		width: 200px;
		height: 100%;
	}
	a {
		float: left;
		margin-top: 50px;
		font-size: 20px;
	}
</style>
