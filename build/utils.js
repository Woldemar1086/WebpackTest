var path = require('path');
var extractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

function cssLoader(options) {
	options = options || {}

	let cssLoader = {
		loader: 'css-loader',
		options: {
			minimize: options.extract,
			modules: true,
			sourceMap: options.sourceMap,
		}
	};


	function genLoaders(loader){
		let loaders = [cssLoader];
		if (loader){
			loaders.push({
				loader: loader,
				options:{
					sourceMap: options.sourceMap,
				}
			})
		}
		if (options.extract){
			return extractTextPlugin.extract({
				use: loaders,
				fallback: 'style-loader',
			})
		} else {
			return ['style-loader'].concat(loaders);
		}
	}
	return {
		css: genLoaders(),
		styl: genLoaders('stylus-loader'),
	}
}

exports.styleLoader =  function(options){
	let output = [];
	let loaders = cssLoader(options);

	for (let extentions in loaders){
		let loader = loaders[extentions];
		output.push({
			test: new RegExp('/\.'+extentions+'$'),
			use: loader,
		});
	}
	return output;
}