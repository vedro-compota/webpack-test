"use strict";

module.exports = {
  mode: 'development',
  entry: './js/main.js',
  output: {
//    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js'
  },
  watch: true,
  watchOptions: {
      aggregateTimeout: 500,
      poll: 1000 // порверяем измемения раз в секунду
  }
  
};
