const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                }
            ]
        }, {
            test: /\.less$/,
            use: [{
                    loader: "style-loader",
                },
                {
                    loader: "css-loader",
                }, {
                    loader: "less-loader",
                }
            ]
        }, {
            test: /\.scss$/,
            use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: "sass-loader"
                }
            ]
        }, {
            test: /\.(jpg|png|gif|bmp|jpeg|webp)$/,
            use: [{
                loader: 'url-loader?limit=4222&name=[hash]-[name].[ext]',
                // options:{
                //     limit: 4444
                //     // 88352dd9a512d1e07fcec4f027efc5c5
                //     // 88352dd9a512d1e07fcec4f027efc5c5
                // }
            }]
        }, {
            test: /.(eot|ttf|woff|woff2|svg)$/,
            use: 'url-loader',
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 3000,
        open: true,
        // hot: true
    },
    mode: 'development'
};