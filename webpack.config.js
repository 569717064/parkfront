const path = require('path');
const webpack = require('webpack');

const {VueLoaderPlugin} = require('vue-loader');
	

module.exports = {
	// 入口：
	entry: path.join(__dirname,"./js/main.js"),
	// 出口：
	output: {
		path: path.join(__dirname,"./dist/"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			// 处理css文件的顺序是，从后往前，先交给css-loader再交给style-loader
			{test: /\.css$/,use: ['style-loader','css-loader']},
			//为图片配置url，file-loadr是url-loader内部依赖的，在这里不用显示配置出来
			{test: /\.(jpg|png|gif|bmp)$/,use: "url-loader?limit=205190"},
			//为字体配置url
			{test: /\.(ttf|eot|svg|woff|woff2)$/,use: "url-loader"},
			
			{test:/\.vue$/, use: ['vue-loader']}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
		  jQuery: "jquery",
		  $: "jquery" 
		}),
		new VueLoaderPlugin()
	]
}