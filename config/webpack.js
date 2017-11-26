const HtmlWebpack        = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const resolve     = require('path').resolve;
const webpack     = require('webpack');

const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;

const rootDir = resolve(__dirname, '..');

module.exports = {
  devServer: {
    contentBase: resolve(rootDir, 'www'),
    port: 3000,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  devtool: 'source-map',
  entry: {
    app: [resolve(rootDir, 'src', 'main')],
    vendor: [resolve(rootDir, 'src', 'vendor')],
  },
  module: {
    loaders: [
      { exclude: /node_modules/, loader: 'raw-loader', test: /\.(css|html)$/ },
      { exclude: /node_modules/, loader: 'file-loader?name=img/img-[hash:6].[ext]', test: /\.png$/ },
      { loader: 'file-loader?name=fonts/[name].[ext]', test: /\.(svg|eot|otf|woff|woff2|ttf)$/ },
      { exclude: /node_modules/, loaders: ['ts-loader', 'angular2-template-loader'], test: /\.ts$/ },
      { exclude: /node_modules/, loaders: ['raw-loader', 'sass-loader'], test: /\.scss$/ },
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
    new CleanWebpackPlugin(resolve(rootDir, 'www', '.')),
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
