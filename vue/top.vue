<template>
	<div id="top">
		<router-view name="top_left"></router-view>
		<router-view name="top_right"></router-view>
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
	#top {
		background-color: black;
		border: black solid 1px;
		height: 50px;
	}
	
</style>
