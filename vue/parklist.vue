<template>
	<div>
		<div>
			<router-view name="middle_up"></router-view>
		</div>
		<div class="addPark">
			<table class="table table-hover table-striped table-condensed table-bordered">
				<thead>
					<tr>
						<th>车位编号</th>
						<th>车位号码</th>
						<th>车位照片</th>
						<th>车位状态</th>
						<th>租金:￥/时</th>
						<th>租金:￥/天</th>
						<th>租金:￥/周</th>
						<th>所属人</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>111</th>
						<th>111</th>
						<th>111</th>
						<th>111</th>
						<th>111</th>
						<th>111</th>
						<th>111</th>
						<th>111</th>
						<th>
							<button class="btn btn-success" click="localtion.href='#'">修改</button>
							<button class="btn btn-danger" click="localtion.href='#'">删除</button>
						</th>
					</tr>
					<tr>
						<th>111</th>
						<th>111</th>
						<th>111</th>
						<th>111</th>
						<th>111</th>
						<th>111</th>
						<th>111</th>
						<th>111</th>
						<th>
							<button class="btn btn-success" click="localtion.href='#'">修改</button>
							<button class="btn btn-danger" click="localtion.href='#'">删除</button>
						</th>
					</tr>
					<tr>
						<th>111</th>
						<th>111</th>
						<th>111</th>
						<th>111</th>
						<th>111</th>
						<th>111</th>
						<th>111</th>
						<th>111</th>
						<th>
							<button class="btn btn-success" click="localtion.href='#'">修改</button>
							<button class="btn btn-danger" click="localtion.href='#'">删除</button>
						</th>
					</tr>
				</tbody>
			</table>
			<button id="showModelBtn" class="btn btn-primary btn-middle" data-toggle="modal" data-target="#addParkModal">添加车位</button>
		</div>
		<!-- 模态框 -->
		<div class="modal fade" id="addParkModal" tabindex="-1" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<div class="modal-title text-center text-primary">
							<h4><b>添加车位</b></h4>
						</div>
					</div>
					<div class="modal-body">
						<form class="form-horizontal">
							<div class="form-group">
								<label for="park_num" class="col-sm-2 control-label">车位号码</label>
								<div class="col-sm-8">
									<input type="text" class="form-control" id="park_num" placeholder="请输入车位号">
								</div>
							</div>
							<div class="form-group">
								<label for="photo" class="col-sm-2 control-label">车位照片</label>
								<div class="col-sm-8">
									<input type="file" class="form-control" id="photo">
								</div>
							</div>
							<div class="form-group">
								<label for="property" class="col-sm-2 control-label">产权</label>
								<div class="col-sm-8">
									<input type="text" class="form-control" id="property" placeholder="请输入租金:￥/时">
								</div>
							</div>
							<div class="form-group">
								<label for="hourprice" class="col-sm-2 control-label">租金:￥/时</label>
								<div class="col-sm-8">
									<input type="text" class="form-control" id="hourprice" placeholder="请输入租金:￥/时">
								</div>
							</div>
							<div class="form-group">
								<label for="dayprice" class="col-sm-2 control-label">租金:￥/天</label>
								<div class="col-sm-8">
									<input type="text" class="form-control" id="dayprice" placeholder="请输入租金:￥/天">
								</div>
							</div>
							<div class="form-group">
								<label for="weekprice" class="col-sm-2 control-label">租金:￥/周</label>
								<div class="col-sm-8">
									<input type="text" class="form-control" id="weekprice" placeholder="请输入租金:￥/周">
								</div>
							</div>
							<div class="form-group">
								<label for="status" class="col-sm-2 control-label">车位状态</label>
								<div class="col-sm-8">
									<input type="text" class="form-control" id="status" disabled placeholder="未审核">
								</div>
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-info" data-dismiss="modal">关闭
						</button>
						<button type="button" class="btn btn-success" id="addParkBtn">
							添加
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		// mounted() { 
		// 	this.findAll();
		// },
		methods: {
			// findAll(){
			// 	axios.get("/parkplaces")
			// 		.then((response) => {
			// 			this.list = response.data;
			// 		})
			// 		.catch((response) => {
			// 			layer.msg("查询失败,请重试!")
			// 		})
			// },
			// save() {
			// 	axios.post("/parkplaces", {
			// 			park_num: this.park_num,
			// 			photo: this.photo,
			// 			property:this.property,
			// 			hourprice:this.hourprice,
			// 			dayprice:this.dayprice,
			// 			weekprice:this.weekprice,
			// 			status:this.status

			// 		})
			// 		.then((response) => {
			// 			layer.msg("添加成功!")
			// 			this.findAll();
			// 		});
		}

	};

	$(function() {
		$("#addParkBtn").click(function() {
			$("#addParkModal").modal('hide');
			layer.msg("添加成功!");
		});
	});
</script>

<style scoped>
	table th {
		text-align: center;
	}

	#showModelBtn {
		margin-left: 25px;
	}

	.addPark {
		height: 600px;
		width: 100%;
	}
</style>
