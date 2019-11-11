<template>
	<div id="feedback">
		<div>
			<h2>意见反馈</h2><hr>
			<span>您的问题或建议:</span><br>
			<textarea placeholder="输入个人意见反馈,字数在200字以内"></textarea><br><br>
			<span>您的联系方式:</span><br>
			<input type="text" placeholder="输入电话号码"><br><br>
			<input type="text" placeholder="输入电子邮箱"><br><br>
			<span style="margin-left: 50px;color: #DCDCDC;">留下您的联系方式，以便我们了解问题后及时反馈和结果，紧急问题请联系客服</span><br><br>
			<button class="btn btn-success">提交建议</button><br><br>
			<span style="color: #DCDCDC;margin-left: 50px;">遇到问题了？点击</span>
			<a href="#" style="font-size: 20px;cursor: pointer;color: green;">在线客服</a>
		</div>
	</div>
</template>

<script>
	export default {
		created() {
	
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped="scoped">
	#feedback {
		height: 600px;
		text-align: center;
	}
	textarea {
		width: 500px;
		height: 150px;
		background-color: gainsboro;
		font-size: 18px;
		border-radius: 10px;
	}
	span {
		font-size: 20px;
		margin-left: -360px;
	}
	input {
		width: 500px;
		height: 50px;
		background-color: gainsboro;
		font-size: 18px;
		border-radius: 10px;
	}
	button {
		width: 500px;
		height: 80px;
		border-radius: 50px;
	}
</style>
