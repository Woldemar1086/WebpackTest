var path = require('path');
var extractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

function cssLoader(options) {

	let cssLoader = {
		loader: 'css-loader',
		options: {
			minimize: options.extract,
			modules: true,
			sourceMap: options.sourceMap,
		}
	}
	console.log(options)


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

	for (let ext in loaders){
		let loader = loaders[ext];
		output.push({
			test: new RegExp('\\.'+ext+'$'),
			use: loader,
		});
	}
	return output;
}