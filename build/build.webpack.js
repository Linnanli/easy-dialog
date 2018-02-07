var path = require('path');
var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        app:path.resolve(__dirname,'../src/index.js')
    },
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'[name].js'
    },
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'../src'),
            'component':path.resolve(__dirname,'../src/component'),
            'styles':path.resolve(__dirname,'../src/styles')
        }
    },
    module:{
        rules:[{
            test:/\.css$/,
            loader:'style-loader!css-loader'
        },{
            test:/\.scss$/,
            loader:'style-loader!css-loader!sass-loader'
        },{
            test:/\.html$/,
            loader:'html-loader'
        }]
    },
    devServer:{
        hot:true,
        host:'127.0.0.1',
        port:8088
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template:path.resolve(__dirname,'../index.html'),
            filename:'index.html'
        })
    ]
};