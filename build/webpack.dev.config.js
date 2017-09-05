const path = require('path');
const webpack = require('webpack');


module.exports = {
	devServer: {
			historyApiFallback: true,
			stats: 'errors-only',
			host: process.env.HOST,
			port: 3000,
			watchOptions: {
				aggregateTimeout: 300,
				poll: 1000,
			}
		},
		plugins:[
			new webpack.WatchIgnorePlugin([
				path.join(__dirname, 'node_modules')
			])
		]
}