import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';
import path from 'path';
import webpack from 'webpack';
import commonConfig from './common';

const ROOT_PATH = path.resolve(__dirname, '../../');
const OUTPUT_PATH = path.resolve(ROOT_PATH, 'build');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');

const config: webpack.Configuration = merge(commonConfig, {
  target: 'node',
  entry: [`${SRC_PATH}/server/server.ts`],
  externals: [nodeExternals()],
  output: {
    filename: 'server.js',
    library: 'app',
    libraryTarget: 'commonjs2',
    path: OUTPUT_PATH,
    publicPath: '/',
  },
});

export default config;
