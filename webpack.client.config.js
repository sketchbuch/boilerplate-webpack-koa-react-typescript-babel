const HtmlwebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

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
    open: true,
    port: 3000,
    progress: true
  },
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
    filename: 'public/js/app.js',
    path: BUILD_PATH,
    publicPath: '/'
  },
  plugins: [
    new HtmlwebpackPlugin({
      hash: true,
      template: SRC_PATH.concat('/common/index.html'),
      title: 'Deadfire AI',
      version: JSON.stringify(require('./package.json').version)
    }),
    new MiniCssExtractPlugin({
      filename: isProduction ? 'public/css/[hash].[name].css' : 'public/css/[name].css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css']
  }
};
