'use strict'

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const publicPath = ''
const conf = require('./conf')

/**
 * https://doc.webpack-china.org/configuration/
 */
module.exports = {
    // 编译环境属性。该值为 electron 打包编译时的环境，若不设置，前台调用 electron模块 时需要用 “window.require”
    target: 'electron-renderer',
    devtool: 'cheap-module-source-map',
    entry: './app/ui/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: publicPath,
        sourceMapFilename: '[name].map'
    },
    module: {
        // 代替旧版loaders，有更多的可配置选项
        rules: [{
            test: /\.css$/,
            // 代替旧版loader，不能省略后缀“-loader”[可通过resolveLoader.moduleExtensions开启旧方法]
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader?minimize'
            })
        }, {
            test: /\.styl(us)?$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader?minimize', 'stylus-loader']
            })
        }, {
            test: /\.jsx?$/,
            use: 'babel-loader'
        }, {
            test: /\.less$/,
            use: ['css-loader?minimize', 'less-loader']
        }, {
            // 移除 module.preLoaders 和 module.postLoaders
            enforce: 'pre',
            test: /\.tsx?$/,
            // 或者 awesome-typescript-loader
            use: ['ts-loader']
        }, {
            test: /\.(png|jpg)$/,
            // 基于 url-loader 可以在限制的范围内生成 Base64 字符串直接嵌入页面
            use: 'url-loader?limit=8192'
        }]
    },
    plugins: [
        // 帮助将 CSS 单独打包，而非与 JS 打包在一起让浏览器在加载完脚本后才渲染样式
        new ExtractTextPlugin('style.css'),
        // 从不同的 bundle 中提取所有的公共模块，并且将他们加入公共 bundle 中
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        // 或在启动命令行中添加 --optimize-minimize
        new webpack.optimize.UglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告
                warnings: false,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true
            }
        }),
        // 或在命令行中添加类似 --define process.env.NODE_ENV="'production'" 定义 Nodejs 变量
        // DefinePlugin 在原始的源码中执行查找和替换操作，在导入的代码中，任何出现 process.env.NODE_ENV的地方都会被替换为"production"
        new webpack.DefinePlugin({
            // production 不会再程序出错时给出提示，此处应根据环境做切换
            // 'process.env.NODE_ENV': JSON.stringify('production')
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        // 自动生成首页，避免在入口页面中手动拼装打包后的资源地址
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'app/ui/index.ejs'),
            filename: 'index.html',
            hash: false,
            favicon: false,
            minify: false,
            cache: false,
            showError: false,
            chunks: 'all',
            title: 'electron',
            xhtml: false
        }),
        //new CopyWebpackPlugin([{
        //
        //}]),
        function() {
            this.plugin('done', (stat) => {
                console.log('已经打包完了')

            })
        }
    ],
    resolve: {
        // 告诉 webpack 检索时自动解析的文件扩展名
        extensions: ['.tsx', '.ts', '.js', 'jsx'],
        // 检索路径时的别名
        alias: {
            'r': path.join(__dirname, 'app/ui/resource'),
            'com': path.join(__dirname, 'app/ui/components'),
            'con': path.join(__dirname, 'app/ui/containers'),
            'u': path.join(__dirname, 'app/utils')
        }
    },
    // 详情 see https://webpack.js.org/configuration/dev-server/
    devServer: {
        staticOptions: {
            redirect: true
        },
        // 监听服务源，可通过数组设置多个
        contentBase: path.join(__dirname, 'app/ui/'),
        filename: 'index.html',
        // 通过代理切合带后端接口的项目
        proxy: {
            '/proxy': {
                target: '',
                pathRewrite: {},
                secure: false
            }
        },
        // 定义引用的资源路径，默认为 /
        publicPath: '/',
        // 响应头
        headers: {},
        port: conf.port,
        host: '127.0.0.1',
        // 应对使用 HTML5 History API 的场景，可重定向路由
        historyApiFallback: true,
        compress: true,
        // 输出信息
        stats: 'minimal',
        noInfo: false,
        quiet: false,
        // 服务是否为 https
        https: false,
        // hot: true,
        // inline or iframe
        inline: true,
        setup(app) {
            app.get('/test', (req, res, next) => {
                res.json({test:'自定义路由'})
            })
        }
    }
}
