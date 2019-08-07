const HtmlwebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const isProduction = false;

module.exports = {
  devServer: {
    contentBase: BUILD_PATH,
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 3000,
    progress: true
  },
  devtool: 'source-map',
  entry: [`${SRC_PATH}/client/index.tsx`],
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: ['react-hot', 'babel-loader'],
        test: /\.jsx?$/
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
    path: BUILD_PATH,
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlwebpackPlugin({
      hash: true,
      template: SRC_PATH.concat('/common/index.html'),
      title: 'Deadfire AI',
      version: JSON.stringify(require('./package.json').version)
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
