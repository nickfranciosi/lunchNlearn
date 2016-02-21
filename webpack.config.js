var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve('app'),
  entry: "./main.js",
  output: {
    path: path.resolve('build/js/'),
    publicPath: '/public/assets/js/',
    filename: "bundle.js"
  },

  devServer: {
    contentBase: 'public'
  },

  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash',
    })
  ],


  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "jshint-loader"
      }
    ]
  },
  watch: true
}
