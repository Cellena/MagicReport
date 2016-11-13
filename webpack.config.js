/**
 * Created by isuhar on 13.11.16.
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var DEBUG = process.env.NODE_ENV !== 'production' ? true : false;

var config  = {
    entry: './assets/main.jsx',
    output: {
        path: __dirname + '/public/',
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: ['babel-loader'],
                exclude: /node_modules/,
                query: {
                    presets: DEBUG ? [ 'es2015', 'react' ] : [ 'es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: DEBUG ? 'style!css!sass' : ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css', {
            allChunks: true,
            disable: process.env.NODE_ENV === 'development'
        })
    ],
    devServer:{
        contentBase: 'web',
        devtool: 'eval',
        proxy: {
            '*': 'http://localhost:3000'
        }
    },
    devtool: 'eval'
};

module.exports = config;