<template>
	<div>
		<div class="loginstyle">
			<form class="formstyle">
				<div class="login">
					<div class="loginbox">
						<div class="login-top">
							<div class="login-title">用户登录</div>
							<div class="write"></div>
							<div class="line"></div>
						</div>
						<div class="login-middle">
							<div class="write"></div>
							<div class="form-group">
									<label for="name" style="float: left; font-size: 12px; line-height: 25px;">&nbsp;&nbsp;用户名:&nbsp;</label>
									<input type="text" v-model="username" ref="u"  class="form-control inputstyle" placeholder="请输入用户名">
									<div class="height-write"></div>
							</div>
							<div class="form-group">
									<label for="name" style="float: left;  font-size: 12px; line-height: 25px;" >&nbsp;&nbsp;密&nbsp;&nbsp;&nbsp;&nbsp;码:&nbsp;</label>
									<input type="password"  v-model="password" class="form-control inputstyle" placeholder="请输入密码" @keyup.enter="submit">
									<div class="height-write"></div>
							</div>
							<div class="form-group">
									<label for="name" style="float: left; font-size: 12px; line-height: 25px;">&nbsp;&nbsp;验证码:&nbsp;</label>
									<input type="text"  class="form-control inputstyle " style="width: 60px;" placeholder="验证码">
									<div class="height-write"></div>
							</div>
					
						</div>
						<div class="login-bottom">
								
								<div class="height-write"></div>
							<button type="button" class="submit "  @click="login">立即登录</button>
						</div>
					</div>
				</div>
				
				
			</form>
			
		</div>
		
		
	</div>
</template>



<script>
	export default{
		data(){
			return{
				username:"",
				password:""
				
			}
			
		},
		methods:{
			login(){
				
				axios.post("/login",{
					"username":this.username,
					"password":this.password
				}).then(()=>{
					this.$router.push("/parklist")
				}).catch(()=>{
					this.username = this.password = '';
									
					alert("用户名或密码失败");
					
					this.$refs.u.focus();
					
				})
				
			},
			
			submit(){
				this.login();
			}
			
			
		}
	}
</script>


<style scoped="scoped">
	.loginstyle{
		
		border: #FAEBD7 2px;
		width: 100%;
		height: 600px;
		background-image: url(../images/timg.jpg) ;
	
		background-size: cover;
		
		background-repeat:no-repeat; 
	}
	.formstyle{
		height: 600px;
		margin: 0,auto;
		
	}
	.login {
		
		height: 500px;
		
		margin: 0px,auto;
		
		
		
	
	}
	
	.loginbox{
		height: 300px;
		width: 250px;
		margin-right: 30px;
		background-color:mistyrose;
		float: right;
		margin-top: 100px;
	
		border-radius: 4px;
		
	}
	.login-title{
		font-size: 15px;
		font-weight: bold;
	}
	.line{
		height: 2px;
		background-color:#FF6700;
			
		
	}
	.left{
		margin-left: 50px;
	}
	.height-write{
		height: 10px;
	}
	.write{
		height: 20px;
	}
	.submit{
		border: none;
		width: 150px;
		height: 30px;
		margin-left: 50px;
		background: #ff6700;
		color: #fff;
		font-size: 10px;
		font-weight: bold;
		letter-spacing: 2px;
		cursor: pointer;
		border-radius: 4px;
	}
	.submit:hover {
		border: 1px solid #fff;
	}
	.inputstyle {
		width: 130px;
		height: 25px;
		border: 1px solid #ccc;
		padding: 5px 10px;
		font-size: 12px;
		 line-height: 25px;
	}
</style>