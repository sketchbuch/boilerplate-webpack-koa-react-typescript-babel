const HtmlwebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const packageJson = require('../../package.json');

const ROOT_PATH = path.resolve(__dirname, '../../');
const OUTPUT_PATH = path.resolve(ROOT_PATH, 'public/dist');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: isProduction ? false : 'source-map',
  entry: [
    `${SRC_PATH}/client/client.tsx`
  ],
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: ['babel-loader'],
        test: /\.js(x?)?$/
      },
      {
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          experimentalWatchApi: true,
          transpileOnly: true
        },
        test: /\.ts(x?)$/
      }
    ]
  },
  output: {
    filename: 'js/app.js',
    path: OUTPUT_PATH,
    publicPath: '/'
  },
  plugins: [
    new HtmlwebpackPlugin({
      hash: true,
      template: SRC_PATH.concat('/client/templates/default.html'),
      title: 'Client Title',
      version: JSON.stringify(packageJson.version)
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
};
