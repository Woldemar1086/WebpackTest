var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: {
				build: path.join(__dirname, '..', 'src')
	},
	output: {
				path: path.join(__dirname, '..', 'dist'),
				filename: '[name].js'
	},
	plugins: [
				new HtmlWebpackPlugin({
					title: 'WebpackTest',
					filename: 'index.html'
				})
	],
	module:{
		rules:[
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [path.join(__dirname, '..', 'src')],
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options:{
					limit: 10000,
					name:path.join('static', 'img/[name].[hash:?].[ext]')
				}
			},
			{
				test:/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader:'url-loader',
				options:{
					limit: 10000,
					name: path.join('static','media/[name].[hash:?].[ext]')
				}
			},{
				test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options:{
					limit:10000,
					name: path.join('static', 'fonts/[name].[hash:?].[ext]')
				}
			}
		]
	}
}