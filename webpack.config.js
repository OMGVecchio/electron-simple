'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './app/ui/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        // 代替旧版loaders，有更多的可配置选项
        rules: [{
            test: /\.css$/,
            // 代替旧版loader，不能省略后缀“-loader”[可通过resolveLoader.moduleExtensions开启旧方法]
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
        }, {
            test: /\.styl(us)?$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'stylus-loader']
            })
        }, {
            test: /\.tsx?$/,
            use: ['ts-loader']
        }]
    },
    plugins: [
        // 帮助将 CSS 单独打包，而非与 JS 打包在一起让浏览器在加载完脚本后才渲染样式
        new ExtractTextPlugin('style.css'),
        // 从不同的 bundle 中提取所有的公共模块，并且将他们加入公共 bundle 中
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
}
