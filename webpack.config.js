const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src',
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
};
