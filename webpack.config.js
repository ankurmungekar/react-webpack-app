const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const port = 8081;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  devServer: {
    port: port,
    historyApiFallback: true,
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test: /\.(scss|css)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'sitePerformanceMfe',
      filename: 'sitePerformanceMfe.js',
      exposes: {
        './sitePerformanceMfe': './src/containers/SitePerformance/index.js',
      },
    }),
  ],
}