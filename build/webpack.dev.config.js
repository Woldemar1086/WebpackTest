const path = require('path');
const webpack = require('webpack');
const utils = require('./utils')
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(baseConfig,{
	devServer: {
			historyApiFallback: true,
			stats: 'errors-only',
			host: process.env.HOST,
			port: process.env.PORT,
			watchOptions: {
				aggregateTimeout: 300,
				poll: 1000,
			}
		},
		plugins:[
			new webpack.WatchIgnorePlugin([
				path.join(__dirname, 'node_modules')
			]),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoEmitOnErrorsPlugin(),
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: 'index.html',
				inject: true
			}),
			new FriendlyErrorsPlugin(),
		],
		module:{
			rules: utils.styleLoader({
				sourceMap: false
			})
		}
})