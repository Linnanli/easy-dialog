var path = require('path');
var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src'),
            'component': path.resolve(__dirname, '../src/component'),
            'styles': path.resolve(__dirname, '../src/styles'),
            'util': path.resolve(__dirname, '../src/util')
        }
    },
    module: {
        rules: [{
            test: /\.html$/,
            exclude:/node_modules/,
            loader: 'html-loader'
        }]
    }
};