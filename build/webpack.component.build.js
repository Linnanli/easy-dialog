var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtrctTextPlugin = require('extract-text-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');

var common = require('./webpack.common');
var styleConifg = require('./style.config');

function resolve(pathstr){
    return path.resolve(__dirname,pathstr);
}

module.exports = merge(common,{
    entry:{
        'simple-dialog':resolve('../src/index.js'),
        '/lib/dialog/index':resolve('../src/component/dialog/index.js')
    },
    output:{
        path: resolve('../dist'),
        filename:'[name].js',
        library:'simple-dialog',
        libraryTarget:'umd'
    },
    module:{
        rules: styleConifg(true).styleLoader
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new cleanWebpackPlugin(['dist']),
        new ExtrctTextPlugin({
            filename: 'simple-dialog.css'
        })
    ]
});