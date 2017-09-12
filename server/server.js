const express = require('express');
const chalk = require('chalk');
const path = require('path');
const webpack = require('webpack');
const webpackMiddleWare = require('webpack-dev-middleware');
const webpackHotMiddleWare = require('webpack-hot-middleware');
const devConfig = require('../build/webpack.dev.config');

const port = 3000;
const app = express();

const compiler = webpack(devConfig);

app.use(webpackMiddleWare(compiler,{
	hot: true,
	publicPath: devConfig.output.publicPath,
	noInfo: true,
}));
app.use(webpackHotMiddleWare(compiler));

app.get('/*',(req,res)=> {
	res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(port, () => console.log(chalk.green('>>>'), chalk.yellow('Server listen on port =',port,', ENV = ',process.env.NODE_ENV)))