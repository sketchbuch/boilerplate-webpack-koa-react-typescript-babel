const HtmlwebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');
const packageJson = require('../../package.json');

const ROOT_PATH = path.resolve(__dirname, '../../');
const OUTPUT_PATH = path.resolve(ROOT_PATH, 'public');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const isProduction = false;

module.exports = {
  devtool: isProduction ? 'none' : 'source-map',
  entry: [`${SRC_PATH}/client/index.tsx`],
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: ['react-hot', 'babel-loader'],
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
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          'postcss-loader'
        ]
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
    new MiniCssExtractPlugin({
      filename: isProduction ? 'css/[hash].[name].css' : 'css/[name].css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css']
  }
};
