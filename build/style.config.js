var path = require('path');
var ExtrctTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (isProd) {
    var cfg = {
        styleLoader: [{
            test: /\.css$/,
            exclude: /node_modules/,
            use: !isProd
                ? ['style-loader', 'css-loader']
                : ExtrctTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            sourceMap: true
                        }
                    }]
                })
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: !isProd
                ? ['style-loader', 'css-loader', 'sass-loader']
                : ExtrctTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader'
                    }]
                })
        }]
    };
    return cfg;
}