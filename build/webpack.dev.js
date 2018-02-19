var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var HTMLWebpackPlugin = require('html-webpack-plugin');

var common = require('./webpack.common');
var styleConifg = require('./style.config');

module.exports = merge(common,{
    entry: {
        app: path.resolve(__dirname, '../example/main.js')
    },
    devServer: {
        hot: true,
        host: '127.0.0.1',
        port: 8088
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
            template: path.resolve(__dirname, '../example/index.html'),
            filename: 'index.html'
        })
    ]
});