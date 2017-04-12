'use strict';
const webpackConfig = require('./webpack.config')({hot: false,});

module.exports = function(){
    return {
        files: [
            'node_modules/phantomjs-polyfill/bind-polyfill.js',
            '__tests__/test-loader.js',
        ],
        preprocessors: {
            '__tests__/test-loader.js': ['webpack','sourcemap',],
        },

        frameworks: ['mocha',],

        reporters: [],

        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve,
            devtool: 'inline-source-map',
            externals: {
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true,
                'cheerio': 'window',
            },
        },

        webpackMiddleware: {
            stats: {
                colors: true,
                exclude: [/node_modules/],
            },
        },

        plugins: [
            require('karma-phantomjs-launcher'),
            require('karma-mocha'),
            require('karma-sourcemap-loader'),
            require('karma-mocha-reporter'),
            require('karma-webpack'),
            require('karma-spec-reporter'),
        ],

        browsers: ['PhantomJS',],
        port: 9876,
        colors: true,
        autoWatch: true,
        captureTimeout: 60000,
        singleRun: false,

    };
};
