<template>
	<div id="middle"  class="container">
		<router-view name="middle_up"></router-view>
		<router-view name="middle_down"></router-view>
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
	#middle {
		height: 600px;
	}
</style>
