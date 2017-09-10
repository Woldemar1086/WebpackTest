const path = require('path');
const utils = require('./utils');
const extractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
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
}