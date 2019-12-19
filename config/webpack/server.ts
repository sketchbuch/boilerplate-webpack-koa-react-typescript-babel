import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';
import path from 'path';
import webpack from 'webpack';
import commonConfig, { ROOT_PATH, SRC_PATH } from './common';

const OUTPUT_PATH = path.resolve(ROOT_PATH, 'build');

const config: webpack.Configuration = merge(commonConfig, {
  entry: ['react-hot-loader/patch', `${SRC_PATH}/server/server.ts`],
  externals: [nodeExternals()],
  output: {
    filename: 'server.js',
    library: 'app',
    libraryTarget: 'commonjs2',
    path: OUTPUT_PATH,
    publicPath: ROOT_PATH,
  },
  plugins: [new webpack.NamedModulesPlugin()],
  target: 'node',
});

export default config;
