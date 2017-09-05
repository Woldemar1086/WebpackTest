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
					title: 'Webpack demo',
					filename: 'index.html'
				})

	]
}