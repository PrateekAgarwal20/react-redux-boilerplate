const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: ['babel-polyfill', 'react-hot-loader/patch', './frontend/index.js'],
    module: {
        rules: [
            { test: /\.js?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                  presets: ['es2015', 'react']
              }
            },
            { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' },
        ],
    },
    resolve: {
        extensions: ['.js', '.scss']
    },
    output: {
        path: path.join(__dirname, '/public'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: './public',
        hot: true
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
