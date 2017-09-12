const path = require('path');
const webpack = require('webpack');
const utils = require('./utils')
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');


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
			])
		],
		module:{
			rules: utils.styleLoader({
				sourceMap: false
			})
		}
})