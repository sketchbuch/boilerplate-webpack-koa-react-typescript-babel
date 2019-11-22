import HtmlwebpackPlugin from 'html-webpack-plugin';
import merge from 'webpack-merge';
import path from 'path';
import webpack from 'webpack';
import commonConfig, { ROOT_PATH, SRC_PATH } from './common';
// @ts-ignore
import packageJson from '../../package.json';

const OUTPUT_PATH = path.resolve(ROOT_PATH, 'public/dist');

const config: webpack.Configuration = merge(commonConfig, {
  entry: [`${SRC_PATH}/client/client.tsx`],
  output: {
    filename: 'js/app.js',
    path: OUTPUT_PATH,
    publicPath: '/',
  },
  plugins: [
    new HtmlwebpackPlugin({
      hash: true,
      template: SRC_PATH.concat('/client/templates/default.html'),
      title: 'Client Title',
      version: JSON.stringify(packageJson.version),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});

export default config;