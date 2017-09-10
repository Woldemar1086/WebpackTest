process.env.NODE_ENV = 'production';

var ora = require('ora');
var chalk = require('chalk');
const webpack = require('webpack');
const prodconfig = require('./webpack.prod.config');

var spinner = ora('building for production...');
spinner.start();

webpack(prodconfig, function( err, stats){
	spinner.stop();
	if (err){
		throw err;
	}

	process.stdout.write(stats.toString({
		colors:true,
		modules: false,
		childrens: false,
		chunks: false,
		chunkModules: false,
	}))

console.log('\n\n')
console.log(chalk.green('>>>'), chalk.blue('build complete!'))
console.log(chalk.red('>>>'), chalk.yellow('Important server information!'),'\n\n\n\n\n\n\n')

})