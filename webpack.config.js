const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: './src/app/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'public/bundle.js'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'src/public/index.html'}),
    new FaviconsWebpackPlugin('./src/app/assets/images/8ball.png'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })]
};
