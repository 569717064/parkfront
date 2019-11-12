<template>
	<div id="history">
		<div>
			<router-view name="middle_up"></router-view>
		</div>
		<table class="table  table-hover" align="center">
			<tr>
				<th>订单号</th>
				<th>抢租方</th>
				<th>出租方</th>
				<th>车位号</th>
				<th>下单时间</th>
				<th>开租时间</th>
				<th>下单时间</th>
				<th>下单价格</th>
				<th>是否付款</th>
			</tr>
			<tr v-for="item in list">
				<th>{{item.oid}}</th>
				<th>{{item.uid}}</th>
				<th>{{item.uuid}}</th>
				<th>{{item.ppid}}</th>
				<th>{{item.datatime}}</th>
				<th>{{item.price}}</th>
				<th>{{item.status}}</th>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: ""
			}
		},
		methods: {
			findAll(){
				axios.get("/orders",{
					uid:this.uid,
				})
				.then((response)=>{
					this.list = response.data;
				});
			},
		}
		
	}
</script>

<style scoped="scoped">
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
