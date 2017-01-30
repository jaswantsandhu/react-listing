const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: "../src/index.jsx",
    output: {
        path: __dirname,
        publicPath: '/',
        filename: '../dist/index.js',
        libraryTarget: "commonjs2"
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
        loaders: [

            {
                test: /(\.js|\.jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack
        .optimize
        .UglifyJsPlugin(),
        new webpack
        .optimize
        .OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};