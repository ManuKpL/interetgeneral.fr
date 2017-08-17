const HtmlWebpack = require('html-webpack-plugin');
const resolve     = require('path').resolve;
const webpack     = require('webpack');

const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;

const rootDir = resolve(__dirname, '..');

module.exports = {
  devServer: {
    contentBase: resolve(rootDir, 'www'),
    port: 3000,
  },
  devtool: 'source-map',
  entry: {
    app: [resolve(rootDir, 'src', 'main')],
    vendor: [resolve(rootDir, 'src', 'vendor')],
  },
  module: {
    loaders: [
      { loader: 'raw-loader', test: /\.(css|html)$/ },
      { exclude: /node_modules/, loaders: ['ts-loader', 'angular2-template-loader'], test: /\.ts$/ },
      { exclude: /node_modules/, loaders: ['style-loader', 'css-loader', 'sass-loader'], test: /\.scss$/ },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(rootDir, 'www'),
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      resolve(rootDir, 'src'),
      { },
    ),
    new ChunkWebpack({
      filename: 'vendor.bundle.js',
      minChunks: Infinity,
      name: 'vendor',
    }),
    new HtmlWebpack({
      filename: 'index.html',
      inject: 'body',
      template: resolve(rootDir, 'src', 'index.html'),
    }),
    new webpack.ProvidePlugin({
      _: 'lodash',
      $: 'jquery',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
