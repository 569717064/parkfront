<template>
	<div id="middle_up">
		<div id="middle_up_logo">
			<img id="logo" src="../images/logo.png" class="img-responsive" alt="logo" style="width: 100px;">
		</div>
		<div id="middle_up_menu">
			<router-link to="/parklist">添加车位&nbsp;&nbsp;</router-link>
			<router-link to="/middle_backlog_show">代办事项&nbsp;&nbsp;</router-link>
			<div id="comments" class="dropdown">
				<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">评论大厅&nbsp;&nbsp;</a>
				<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
					<li>
						<router-link to="/xxxxx">关于我的评论</router-link>
					</li>
					<li>
						<router-link to="/yyyyy">全部评论</router-link>
					</li>
				</ul>
			</div>
			<div class="dropdown">
				<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">个人中心</a>
				<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
					<li>
						<router-link to="/mymessage">我的信息</router-link>
					</li>
					<li>
						<router-link to="/history">历史记录</router-link>
					</li>
				</ul>
			</div>
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
		cursor:pointer;
		
	}
	
	ul {
		margin-left: 250px;
		margin-top: 80px;
	}
	#comments ul{
		margin-left: 150px;
	}

	#dropdownMenu1 {
		margin-top: 50px;
	}
	
</style>
