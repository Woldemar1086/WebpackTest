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
					filename: 'index.html',
					css: ['./css/style.css']
				})

	],
	module: {
		rules: [
					{
					test:/\.css$/,
			        use: [
					         {
					           loader: "style-loader"
					         },
					         {
					           loader: "css-loader",
					           options: {
					             modules: true,
					             
					           }
					         }
					    ]
					},
					{
		            test: /\.styl$/,
		            use: [
		            		{
			                	loader: "style-loader" // creates style nodes from JS strings
			            	}, {
			                	loader: "css-loader" // translates CSS into CommonJS
			           		}, {
			                	loader: "stylus-loader" // compiles Sass to CSS
	            			}
						]
					}
				]
			}
}