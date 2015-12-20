var webpack = require('webpack');
var path = require('path');
var assetsPath = path.resolve(__dirname, './dist');

module.exports = {
  entry: './app.js',
  output: { path: assetsPath, filename: 'app.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {stage: 0}
      }
    ]
  },
  resolve: {
    modulesDirectories: [
      'components',
      'node_modules'
    ],
    extensions: ['', '.json', '.js']
  }
}
