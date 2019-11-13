<template>
	<div>
		<img src="../images/expect.png" alt="">
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

<style scoped="scoped">
	img {
		height: 600px;
		width: 1500px;
	}
</style>
