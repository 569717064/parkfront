<template>
	<div id="mymessage">
		<div id="middle_up">
			<router-view name="middle_up"></router-view>
		</div>
		<div id="tabless">
			<table class="table table-hover" align="center">
				<tr>
					<th>姓名</th>
					<th></th>
				</tr>
				<tr> 
					<th>电话</th>
					<th></th>
				</tr>
				<tr>
					<th>您的邮箱</th>
					<th>1111111@qq.com</th>
				</tr>
				<tr>
					<th>出租照片</th>
					<th>xxx</th>
				</tr>
				<tr>
					<th>您的钱包</th>
					<th>1000</th>
				</tr>
				<tr>
					<th>您的身份</th>
					<th>出租方</th>
				</tr>
			</table>
		</div>

	</div>
</template>

<script>
	export default {
		created() {
			axios.post("/isLogin")
				.then((response)=>{
					if (!response.data.isLogin) {
						this.$router.push("/login");
					}
				})
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
		
	}
</script>

<style>
	.table {
		border: #FAEBD7 solid 2px;
		width: 1400px;
		height: 600px;
		font-size: 20px;
		background-image: url(../images/personback.jpg);
		background-size: cover
	}

	th {
		text-align: center;
		vertical-align: middle;
	}
</style>
