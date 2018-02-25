var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var ExtrctTextPlugin = require('extract-text-webpack-plugin');
var ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');

var common = require('./webpack.common');
var styleConifg = require('./style.config');

module.exports = merge(common,{
    entry:{
        app:path.resolve(__dirname,'../example/main.js')
    },
    output:{
        path:path.resolve(__dirname,'../docs'),
        filename:'js/[name].[chunkhash:5].js'
    },
    devtool:'#source-map',
    module:{
        rules: styleConifg(true).styleLoader
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            filename: 'index.html'
        }),
        new ExtrctTextPlugin({
            filename: 'css/[name].[contenthash:5].css'
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new ParallelUglifyPlugin({
            cacheDir: '.example-uglify-cache',
            sourceMap: true,
            output: {
                beautify: true,
                comments: true
            },
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告
                warnings: false,
                // 删除所有的 `console` 语句，可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true
            }
        })
    ]
});
