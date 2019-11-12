<template>
	<div  id="register">
		<div class="col col-md-4 col-md-offset-4">
			<form >
				<div class="">
					<label for="name">账号</label>
					<input type="text" class="form-control" id="name" :placeholder="unameMsg">
				</div>
				<div class="">
					<label for="name">密码</label>
					<input type="text" class="form-control" id="name" :placeholder="upwdMsg">
				</div>
				<div class="">
					<label for="name">确认密码</label>
					<input type="text" class="form-control" id="name" :placeholder="upwd2Msg">
				</div>
				<div class="">
					<label for="name">请选择角色</label>
					<select class="form-control">
						<option>1</option>
						<option>2</option>
					</select>
				</div>
				<div class="">
					<label for="name">请输入邮箱</label>
					<input type="text" class="form-control" id="name" :placeholder="请输入邮箱">
				</div>
				<div class="right fl"><button class="btn btn-info" @click="" type="button">发送手机验证码</button></div>
				<div class="">
					<label for="name">请输入验证码</label>
					<input type="text" class="form-control" id="name" :placeholder="codeMsg">
				</div>
				<button type="submit" class="btn btn-warning btn-block">立即注册</button>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
	
		data() {
			return {		
				unameMsg: '用户名6-32位数字字母组合,不含中文',
				upwdMsg: '请输入6位以上数字字母',
				upwd2Msg: '两次密码要输入一致哦',
				telMsg: '填写下手机号吧，方便我们联系您！',
				codeMsg: '邮箱号号码输入正确后才可发送验证码哦~',
			};
		},
		
		methods: {
		
	
		},
		watch: {
	
		}
	}
</script>

<style scoped="scoped">
	#register {
		height: 600px;
	}
</style>
