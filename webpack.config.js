
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
    entry: ['babel-polyfill', './src/scripts/app.js'],
    output: {
        filename: 'bundle.js'
    },
    devtool: 'source-maps',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jquery': 'jquery',
            'window.jQuery': 'jquery',
        })
    ],
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'es2015', 'stage-1', 'stage-0']
                }
            }
        ]
    }
};

module.exports = config;
