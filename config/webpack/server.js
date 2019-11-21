const nodeExternals = require('webpack-node-externals');
const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '../../');
const OUTPUT_PATH = path.resolve(ROOT_PATH, 'build');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  target: 'node',
  devtool: false,
  entry: [
    `${SRC_PATH}/server/server.ts`
  ],
  externals: [nodeExternals()],
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: ['babel-loader'],
        test: /\.js(x?)$/
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
    filename: 'server.js',
    library: 'app',
    libraryTarget: 'commonjs2',
    path: OUTPUT_PATH,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
};
