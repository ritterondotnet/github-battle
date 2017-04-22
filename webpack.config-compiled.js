'use strict';

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [{ test: /\.(js)$/, use: 'babel-loader' }, { test: /\.css$/, use: ['style-loader', 'css-loader'] }]
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/app/index.html' }), new FaviconsWebpackPlugin('./src/app/assets/images/logo.png')]
};

//# sourceMappingURL=webpack.config-compiled.js.map