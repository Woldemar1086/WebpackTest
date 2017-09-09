const merge = require('webpack-merge');
const baseConfig = require('./build/webpack.base.config');
const devConfig = require('./build/webpack.dev.config');
const prodConfig = require('./build/webpack.prod.config')

module.exports = (env) => {
	if (env === 'production'){
		return merge(baseConfig,prodConfig);
	} else {
		return merge(baseConfig,devConfig);
	}
};