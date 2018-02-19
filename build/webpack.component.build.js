var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtrctTextPlugin = require('extract-text-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');
var ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

var common = require('./webpack.common');
var styleConifg = require('./style.config');

function resolve(pathstr) {
    return path.resolve(__dirname, pathstr);
}

module.exports = merge(common, {
    entry: {
        'simple-dialog': resolve('../src/index.js'),
        '/lib/dialog/index': resolve('../src/component/dialog/index.js')
    },
    output: {
        path: resolve('../dist'),
        filename: '[name].js',
        library: 'simpleDialog',
        libraryTarget: 'umd'
    },
    module: {
        rules: styleConifg(true).styleLoader
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new cleanWebpackPlugin(['dist']),
        new ExtrctTextPlugin({
            filename: 'simple-dialog.css'
        }),
        new ParallelUglifyPlugin({
            cacheDir: '.uglify-cache',
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