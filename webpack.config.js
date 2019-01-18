"use strict";
var path = require('path'); // для работы с path

module.exports = [
    {
      mode: 'development',
      entry: {
          'test1': './js/main.js'
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'MyLibrary',
        libraryExport: 'default',
        libraryTarget: 'umd'
      },
      watch: true,
      watchOptions: {
          aggregateTimeout: 500,
          poll: 1000 // порверяем измемения раз в секунду
      }
    },
    { 
      mode: 'development',
      entry: {
          'test1': './js/main.js'
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-no-jswl.js',
        library: 'MyLibrary',
        libraryExport: 'default',
        libraryTarget: 'umd'
      },

      externals: { // внешние библиотеки
        "js-wrapper-lib": "jswl"  
      },
      watch: true,
      watchOptions: {
          aggregateTimeout: 500,
          poll: 1000 // порверяем измемения раз в секунду
      }

    }
];
