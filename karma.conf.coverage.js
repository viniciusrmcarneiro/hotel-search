'use strict';
const path = require('path');

module.exports = function(config) {
    const karamConfig = require('./karma.config.base')();

    karamConfig.reporters = ['mocha','coverage',];
    karamConfig.coverageReporter = {
        dir: 'coverage',
        reporters: [
            {type: 'html', subdir: '.',},
            {type: 'text',},
            {type: 'text-summary',},
        ],
    };

    karamConfig.instrument = {
        ignore: [
            /node_modules.*/,
            /.*(test|spec).*/,
        ],
    };

    karamConfig.webpack.module.preLoaders = [
        {
            test: /^(?!.*spec.*).*\.js(x)?$/,
            loader: 'babel-istanbul',
            include: [
                path.join(__dirname,'/__tests__'),
                path.join(__dirname,'/app'),
            ],
            query: {
                cacheDirectory: true,
            },
        },
    ];

    karamConfig.plugins.push(require('istanbul-instrumenter-loader'));
    karamConfig.plugins.push(require('karma-coverage'));
    karamConfig.plugins.push(require('karma-spec-reporter'));
    karamConfig.logLevel = config.LOG_INFO,

    config.set(karamConfig);
};
