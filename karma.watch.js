'use strict' // eslint-disable-line

const path = require('path')

module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['tap'],

    files: ['test/index.js'],

    preprocessors: {
      'test/index.js': 'webpack'
    },

    browsers: ['Debug'],

    customLaunchers: {
      Debug: {
        base: 'Chrome',
        flags: ['--incognito', '--user-data-dir=./test/.chrome']
      }
    },

    logLevel: config.LOG_INFO,

    autoWatch: true,

    reporters: ['dots'],

    webpack: {
      node: {
        fs: 'empty'
      },
      module: {
        preLoaders: [
          {
            test: /\.js$/,
            exclude: [
              path.resolve('node_modules/')
            ],
            loader: 'babel',
            query: {
              plugins: [
                'transform-async-functions',
                'transform-es2015-modules-commonjs',
                'transform-object-rest-spread',
                'transform-regenerator',
                'transform-runtime'
              ],
              presets: ['es2015']
            }
          }
        ]
      },
      devtool: 'eval-source-map'
    },

    webpackMiddleware: {
      noInfo: true
    }
  })
}