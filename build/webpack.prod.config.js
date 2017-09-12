const path = require('path');
const utils = require('./utils');
const baseconfig = require('./webpack.base.config');
const extractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = merge(baseconfig ,{
	module:{
			rules: utils.styleLoader({
				sourceMap: true,
				extract: true,
			})
		},
	devtool: '#sourse-map',
	output: {
		path: path.resolve(__dirname,'../dist'),
		filename: 'js/[name].js',
	},
	plugins: [
		new extractTextPlugin({
			filename: 'statis/css/style.css'
		}),
		new CompressionPlugin({
			asset:"[path].gz[query]",
			algorithms:"gzip",
			test: /\.(js|css|html|svg)$/,
			threshold: 10240,
			minRatio:0.8,
		}),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "index.html",
			inject: true,
			minify:{
				removeComments: true,
				collapseWhitespace:true,
				removeAttributeQuotes: true,
			}
		}),
		new OptimizeCSSPlugin({
			cssProcessorOptions:{
				safe: true
			}
		}),
		new webpack.DefinePlugin({
			'process.env':{
				NODE_ENV:'production'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				sequences: true,
				booleans: true,
				loops: true,
				unused: true,
				warnings: false,
				drop_console: true,
				unsafe: true,
			},
			sourceMap: true
		}),
		new webpack.optimize.OccurrenceOrderPlugin()
	]
})