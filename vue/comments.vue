<template>
	<div id="comments">
		<router-view name="middle_up"></router-view>
		<div>
			<table class="table table-bordered table-hover table-striped">
				<thead>
					<tr>
						<th>编号</th>
						<th>评论人</th>
						<th>评论内容</th>
						<th>好评/差评</th>
						<th>被评论人</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in list">
						<th>{{item.cid}}</th>
						<th>匿名用户</th>
						<th>{{item.info}}</th>
						<th>{{item.status}}</th>
						<th>{{item.uid}}</th>
					</tr>
				</tbody>
			</table>
			
			<button @click="add()" class="btn btn-success">添加评论</button>
			
			<div id="commentsPage">
				<nav aria-label="Page navigation">
					<ul class="pagination">
						<li>
							<a href="#" aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
							</a>
						</li>
						<li><a href="#">1</a></li>
						<li><a href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li><a href="#">4</a></li>
						<li><a href="#">5</a></li>
						<li>
							<a href="#" aria-label="Next">
								<span aria-hidden="true">&raquo;</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
		<div id="addComment" style="display: none;">
			<div id="addDiv">
				选择被评论人:<select v-model="uid">
					<option :value="item.uid" v-for="item in uids">
						{{item.username}}
					</option>
				</select><br><br>
				选择好评/差评:<select v-model="status">
					<option value="1">好评</option>
					<option value="2">差评</option>
				</select><br><br>
				评论内容:<textarea v-model="info"></textarea><br><br>
				<button class="btn btn-info btn-block" @click="add2()">提交评论</button>
			</div>
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
				info: "",
				index: "",
				status: "",
				uid: "",
				uids : [
					{uid:1,username:"aaaa"},
					{uid:2,username:"bbbb"},
					{uid:3,username:"cccc"},
					{uid:4,username:"dddd"},
					{uid:5,username:"eeee"},
				],
				list: [{
						cid: 1,
						info: "xxxxxxxxxxxxxx",
						status: "好评",
						uid: Math.ceil(Math.random() * 10 + 1)
					},
					{
						cid: 2,
						info: "xxxxxxxxxxxxxx",
						status: "好评",
						uid: Math.ceil(Math.random() * 10 + 1)
					},
					{
						cid: 3,
						info: "xxxxxxxxxxxxxx",
						status: "好评",
						uid: Math.ceil(Math.random() * 10 + 1)
					},
					{
						cid: 4,
						info: "xxxxxxxxxxxxxx",
						status: "好评",
						uid: Math.ceil(Math.random() * 10 + 1)
					},
					{
						cid: 5,
						info: "xxxxxxxxxxxxxx",
						status: "好评",
						uid: Math.ceil(Math.random() * 10 + 1)
					},
					{
						cid: 6,
						info: "xxxxxxxxxxxxxx",
						status: "好评",
						uid: Math.ceil(Math.random() * 10 + 1)
					},
					{
						cid: 7,
						info: "xxxxxxxxxxxxxx",
						status: "好评",
						uid: Math.ceil(Math.random() * 10 + 1)
					},
					{
						cid: 8,
						info: "xxxxxxxxxxxxxx",
						status: "好评",
						uid: Math.ceil(Math.random() * 10 + 1)
					}
				]

			}
		},
		methods: {
			add() {
				//页面层
				this.index = layer.open({
				  type: 1,
				  skin: 'layui-layer-rim', //加上边框
				  area: ['420px', '440px'], //宽高
				  content: $("#addComment")
				});

			},
			add2() {
				axios.post("/comments",{
					uid: this.uid,
					status: this.status,
					info: this.info
				}).then(()=>{
					layer.close(this.index);
					layer.msg("添加成功");
				}).catch(()=>{
					layer.msg("添加失败");
				});
					
			}
		}

	}
</script>

<style scoped="scoped">
	#comments {
		height: 600px;
	}

	table th {
		text-align: center;
	}
	#commentsPage {
		text-align: center;
	}
	#addDiv {
		margin-top: 20px;
	}
	select {
		width: 50px;
		height: 20px;
	}
	textarea {
		width: 320px;
		height: 100px;
		background-color: #FAEBD7;
	}
	select {
		width: 300px;
		height: 30px;
	}
</style>
