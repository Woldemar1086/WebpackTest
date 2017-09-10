const path = require('path');
const utils = require('./utils');
const baseconfig = require('./webpack.base.config');
const extractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

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
			filename: 'css/style.css'
		})
	]
})