const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    context: __dirname,
    entry: {
        bundle: "./src/index.jsx"
    },
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'index.js'
    },
    resolve: {
        extensions: [
            '',
            '.scss',
            '.css',
            '.js',
            '.jsx',
            '.json'
        ],
        modulesDirectories: [
            'node_modules', path.resolve(__dirname, './node_modules')
        ]
    },
    module: {
        loaders: [{
            test: /(\.js|\.jsx)$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
        }]
    },
    plugins: [
        new LiveReloadPlugin(),
        new webpack
        .optimize
        .OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};