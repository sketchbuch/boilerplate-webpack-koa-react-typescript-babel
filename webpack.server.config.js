const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const ROOT_PATH = path.resolve(__dirname);
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const isProduction = false;

module.exports = {
  target: 'node',
  devtool: 'none',
  entry: [`${SRC_PATH}/server/server.ts`],
  externals: [nodeExternals()],
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: ['babel-loader'],
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
    filename: 'server/js/server.js',
    library: 'app',
    libraryTarget: 'commonjs2',
    path: BUILD_PATH,
    publicPath: '/'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isProduction ? 'server/css/[hash].[name].css' : 'server/css/[name].css'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css']
  }
};
