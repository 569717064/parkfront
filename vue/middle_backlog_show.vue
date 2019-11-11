<template >
	<div id="middle_backlog_show">
		<div>
			<router-view name="middle_up"></router-view>
		</div>
	    <table class="table table-hover table-striped table-bordered" >
		  <thead>
		    <tr>
			  <th>订单号</th>
		      <th>抢租客</th>
			  <th>车位信息</th>
		      <th>信用额度</th>
		      <th>是否付款</th>
		      <th>平台提成</th>
			  <th>操作</th>
		    </tr>
		  </thead>	
		  <tbody>
		 	<tr v-for="item in list">
		 		<th>{{item.订单号}}</th>
		 		<th>{{item.抢租客}}</th>
		 		<th>{{item.车位信息}}</th>
		 		<th>{{item.信用额度}}</th>
		 		<th>{{item.是否付款}}</th>
		 		<th>{{item.平台提成}}</th>
		 		<th><button class="btn btn-info">删除</button></th>
		 	</tr>
		  </tbody>
		  
		</table>
		<div style="float: left;margin-left: 480px;">
			<ul class="pagination">
			  <li><a href="#"><<</a></li>
			  <li><a href="#">上一页</a></li>
			  <li><a href="#">1</a></li>
			  <li><a href="#">2</a></li>
			  <li><a href="#">3</a></li>
			   <li><a href="#">下一页</a></li>
			  <li><a href="#">>></a></li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	export default{
		data(){
			
			return{
				list:[
					{订单号:1,抢租客:'张三',车位信息:'紫薇小区A区102',信用额度:'68%',是否付款:'是',平台提成:'10%'},
					{订单号:1,抢租客:'张三',车位信息:'紫薇小区A区102',信用额度:'68%',是否付款:'是',平台提成:'10%'},
					{订单号:1,抢租客:'张三',车位信息:'紫薇小区A区102',信用额度:'68%',是否付款:'是',平台提成:'10%'},
					{订单号:1,抢租客:'张三',车位信息:'紫薇小区A区102',信用额度:'68%',是否付款:'是',平台提成:'10%'},
					{订单号:1,抢租客:'张三',车位信息:'紫薇小区A区102',信用额度:'68%',是否付款:'是',平台提成:'10%'}
				]		
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped="scoped">
	#middle_backlog_show {
		height: 600px;
	}
	.pagination {
	    display: inline-block;
	    padding: 0;
	    margin: 0;
	}
	
	.pagination li {display: inline;}
	
	.pagination li a {
	    color: black;
	    float: left;
	    padding: 8px 16px;
	    text-decoration: none;
	    border-radius: 5px;
	}
	
	.pagination li a.active {
	    background-color: #4CAF50;
	    color: white;
	    border-radius: 5px;
	}
	.pagination li a:hover:not(.active) {background-color:#999999;}
	
	th {
		text-align: center;
		cursor: pointer;
	}
</style>
