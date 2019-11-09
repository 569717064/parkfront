<template>
	<div id="top_right" class="col col-md-4">
		<div class="form-group col col-md-4 ">
			<button class="btn btn-info" @click="">
				<label class="glyphicon glyphicon-user">登录</label>
			</button>
		</div>
		<div class="col col-md-4">
			<button class="btn btn-success" @click="">
				<label class="glyphicon glyphicon-plus">注册</label>
			</button>
		</div>
		<div class="col col-md-4">
			<button class="btn btn-warning" @click="">
				<label class="glyphicon glyphicon-log-out">退出</label>
			</button>
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
	#top_right {
		height: 40px;
		margin-top: 20px;
	}
</style>
