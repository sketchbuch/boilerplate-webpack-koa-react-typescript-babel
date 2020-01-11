import path from 'path';
import webpack from 'webpack';

export const ROOT_PATH: string = path.resolve(__dirname, '../../');
export const SRC_PATH: string = path.resolve(ROOT_PATH, 'src');

const isProduction = process.env.NODE_ENV === 'production';

const config: webpack.Configuration = {
  devtool: isProduction ? false : 'source-map',
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: ['babel-loader'],
        test: /\.js(x?)?$/,
      },
      {
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          experimentalWatchApi: true,
          transpileOnly: true,
        },
        test: /\.ts(x?)$/,
      },
    ],
  },
  node: {
    __filename: true,
    __dirname: true,
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      'webpack-hot-client/client': path.resolve(
        '..',
        '..',
        'node_moules',
        'webpack-hot-client',
        'client'
      ),
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
};

export default config;
