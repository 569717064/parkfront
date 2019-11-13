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
				<th>结束</th>
				<th>下单价格</th>
				<th>是否付款</th>

			</tr>
			<tr v-for="item in list">
				<th>{{item.oid}}</th>
				<th>{{item.uid}}</th>
				<th>{{item.uuid}}</th>
				<th>{{item.ppid}}</th>
				<th>{{item.datatime}}</th>
				<th>{{item.start_time}}</th>
				<th>{{item.end_time}}</th>
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
				// list: ""
				list: [{
						oid: 1,
						uid: 1,
						uuid: 2,
						ppid: 1,
						datatime: '2019-10-10',
						start_time: '2019-10-10',
						end_time: '2019-10-12',
						price: '100',
						price: 1
					},
					{
						oid: 1,
						uid: 1,
						uuid: 2,
						ppid: 1,
						datatime: '2019-10-10',
						start_time: '2019-10-10',
						end_time: '2019-10-12',
						price: '100',
						price: 1
					},
					{
						oid: 1,
						uid: 1,
						uuid: 2,
						ppid: 1,
						datatime: '2019-10-10',
						start_time: '2019-10-10',
						end_time: '2019-10-12',
						price: '100',
						price: 1
					},
					{
						oid: 1,
						uid: 1,
						uuid: 2,
						ppid: 1,
						datatime: '2019-10-10',
						start_time: '2019-10-10',
						end_time: '2019-10-12',
						price: '100',
						price: 1
					},
					{
						oid: 1,
						uid: 1,
						uuid: 2,
						ppid: 1,
						datatime: '2019-10-10',
						start_time: '2019-10-10',
						end_time: '2019-10-12',
						price: '100',
						price: 1
					}
				]
			}
		},
		methods: {
			findAll() {
				axios.get("/orders", {
						uid: this.uid,
					})
					.then((response) => {
						this.list = response.data;
					});
			},
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
