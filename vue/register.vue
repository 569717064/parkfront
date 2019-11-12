<template>
	<div id="register">

		<div id="register_input" class="col col-md-6 col-md-offset-4">
			<form>
				<table class="table">
					<tr>
						<td><label for="name">账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</label></td>
						<td><input type="text" class="form-control" placeholder="请输入账号" v-model="uname"></td>
						<td>
							<font :style="{'color': (flag==true?'green':'red')}">&nbsp;{{unameMsg}}</font>
						</td>
					</tr><br>

					<tr>
						<td><label for="name">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</label></td>
						<td><input type="password" class="form-control" placeholder="请输入密码" v-model="upwd"></td>
						<td>
							<font :style="{'color': (flag2==true?'green':'red')}">&nbsp;{{upwdMsg}}</font>
						</td>
					</tr><br>
					<tr>
						<td><label for="name">确&nbsp;认&nbsp;密&nbsp;码&nbsp;：</label></td>
						<td><input type="password" class="form-control" placeholder="请确认密码" v-model="upwd2"></td>
						<td>
							<font :style="{'color': (flag3==true?'green':'red')}">&nbsp;{{upwd2Msg}}</font>
						</td>
					</tr><br>
					<tr>
						<td><label for="name">请选择角色：</label></td>
						<td>
							<select class="form-control" v-model="rid">
								<option selected="true" :value="rids[0]">抢租客</option>
								<option :value="rids[1]">出租客</option>
							</select>
						</td>
						<td></td>
					</tr><br>
					<tr>
						<td><label for="name">请输入邮箱：</label></td>
						<td><input type="text" class="form-control" placeholder="请输入邮箱"></td>
						<td><label for="name">
								<font :style="{'color': (flag4==true?'green':'red')}">&nbsp;{{email}}</font>
							</label></td>
					</tr><br>

					<tr>
						<td><label for="name">输入验证码：</label></td>
						<td><input type="text" class="form-control" placeholder="请输入验证码"></td>
						<td></td>
					</tr><br>
					<tr>
						<td></td>
						<td>
							<button type="button" class="btn btn-info btn-block">发送验证码</button>
							<button type="button" class="btn btn-warning btn-block" @click="register()">立即注册</button>
						</td>
						<td></td>
					</tr>
				</table>


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
				email: '填写下邮箱号吧，方便我们联系您！',
				codeMsg: '邮箱号号码输入正确后才可发送验证码哦~',
				

				flag: "",
				flag2: "",
				flag3: "",
				flag4: "",

				uname: "",
				rid:"",
				upwd: "",
				upwd2: "",
				emial: "",
				rids:[1,2]
				
			};
		},

		methods: {
			created() {
				
			},
			register() {
				if((!this.flag)&&(!this.flag2)&&(this.flag3)&&(!this.flag4)){
					layer.msg("您输入有误请重新输入");
				}
				else{
					axios.post("/users/register",{
						username:this.uname,
						password:this.upwd,
						rid:this.rid,
					})
					.then((response)=>{
						var ss = response.data;
						if(ss==false){
							layer.msg("账号已存在，请重新输入");
							
						}else{
							layer.msg("注册成功！");
							this.$router.push("/login");
						}
					})
				}
				
			},
			

		},
		watch: {
			uname(val) {
				var unameReg = new RegExp("^[A-Za-z0-9]{6,10}$");
				var unameT = unameReg.test(val);
				if (unameT) {
					this.unameMsg = '正确';
					this.flag = true;
				} else {
					this.unameMsg = '错误:用户名必须为6-10位字母数字组合';
					this.flag = false;
				}
			},
			upwd(val) {
				var upwdReg = new RegExp("^[A-Za-z0-9]{6,32}$");
				var upwdT = upwdReg.test(val);
				if (upwdT) {
					this.upwdMsg = '正确';
					this.flag2 = true;
				} else {
					this.upwdMsg = '错误:密码为6-32位字母数字组合';
					this.flag2 = false;
				}
			},
			upwd2(val) {
				if (this.upwd == this.upwd2) {
					this.upwd2Msg = '正确';
					this.flag3 = true;
				} else {
					this.upwd2Msg = "您两次输入的密码不一致，请重新输入"
					this.flag3 = false;
				}
			}
		}
	}
</script>

<style scoped="scoped">
	#register {
		height: 600px;

		background-image: url(../images/register.jpg);
	}

	#register_input {
		margin-top: 70px;
	}
</style>
