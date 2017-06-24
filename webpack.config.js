var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// 定义文件夹目录
var ROOT_PATH = path.resolve(__dirname,'public');
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build')

module.exports = {
    entry: [
      // 'webpack/hot/dev-server.js',
      // 'webpack-dev-server/client?http://localhost:8080',
      APP_PATH,
    ],

    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },

    devServer: {
        historyApiFallback: true,
        port:8080,
        hot: true,
        inline: true,
        progress: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
          {
            test: /\.scss$/, // 正则语法

            // 注意loaders的处理顺序是从右到左的
            loaders: ['style', 'css', 'sass'],
            include: APP_PATH
        },
          {
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015','stage-2']
            },
            test: /\.jsx?$/,
            include: APP_PATH,
            exclude: /(node_modules|bower_components)/
        },
       {
            include: APP_PATH,
            test: /\.png$/,
            loader: 'url-loader?limit=100000'
        }, {
            include: APP_PATH,
            test: /\.jpg$/,
            loader: 'file-loader'
        }, {
            test: /\.html$/,
            loader: 'html'
        }
      ]
    },
    // plugin for generate the html
    plugins: [
        new htmlWebpackPlugin({
            title: 'Rest test'
        }),
        new webpack.HotModuleReplacementPlugin() // Enable HMR

    ]

};
