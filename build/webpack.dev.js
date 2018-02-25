var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

var common = require('./webpack.common');
var styleConifg = require('./style.config');

var host = '127.0.0.1';
var port = 8088;

module.exports = merge(common,{
    entry: {
        app: path.resolve(__dirname, '../example/main.js')
    },
    devtool: '#eval-source-map',
    devServer: {
        hot: true,
        host: host,
        quiet: true,//除了初始启动信息之外的任何内容都不会被打印到控制台
        port: port,
        overlay: { //当有编译错误或者警告的时候显示一个全屏overlay
            errors: true,
            warnings: true,
        }
    },
    module:{
        rules: styleConifg(false).styleLoader
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            filename: 'index.html'
        }),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: [`You application is running here http://${host}:${port}`],
                notes: ['Some additionnal notes to be displayed unpon successful compilation']
            },
            // should the console be cleared between each compilation?
            // default is true
            clearConsole: true,
            // add formatters and transformers (see below)
            additionalFormatters: [],
            additionalTransformers: []
        })
    ]
});