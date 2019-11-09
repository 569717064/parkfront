<template>
	<div id="top">
		<router-view name="top_logo"></router-view>
		<router-view name="top_middle"></router-view>
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
		background-color: aqua;
		border: black solid 1px;
		height: 100px;
	}
	
</style>
