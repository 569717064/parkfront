<template>
	<div id="middle_down">
		<div class="carousel slide" id="myCarousel" data-ride="carousel" data-interval="1500">
			<!-- 轮播指标 carousel-indicators -->
			<ol class="carousel-indicators">
				<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
				<li data-target="#myCarousel" data-slide-to="2"></li>
				<li data-target="#myCarousel" data-slide-to="3"></li>
				<li data-target="#myCarousel" data-slide-to="4"></li>
			</ol>
			<!-- 轮播项目 carousel-inner-->
			<div class="carousel-inner">
				<div class="item active">
					<img src="../images/car1.jpg" alt="" class="img-responsive" style="height: 500px;width: 1200px;">
				</div>
				<div class="item">
					<img src="../images/car2.jpg" alt="" class="img-responsive" style="height: 500px;width: 1200px;">
				</div>
				<div class="item">
					<img src="../images/car3.jpg" alt="" class="img-responsive" style="height: 500px;width: 1200px;">
				</div>
				<div class="item">
					<img src="../images/car4.jpg" alt="" class="img-responsive" style="height: 500px;width: 1200px;">
				</div>
				<div class="item">
					<img src="../images/car5.jpg" alt="" class="img-responsive" style="height: 500px;width: 1200px;">
				</div>
			</div>
			<!-- 轮播导航 carousel-control-->
			<a href="#myCarousel" class="left carousel-control" data-slide="prev">
				<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
			</a>
			<a href="#myCarousel" class="right carousel-control" data-slide="next">
				<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
			</a>
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
	#middle_down {
		height: 500px;
	}
</style>
