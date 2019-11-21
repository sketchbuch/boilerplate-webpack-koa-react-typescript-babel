import HtmlwebpackPlugin from 'html-webpack-plugin';
import merge from 'webpack-merge';
import path from 'path';
import webpack from 'webpack';
import commonConfig from './common';

const ROOT_PATH = path.resolve(__dirname, '../../');
const OUTPUT_PATH = path.resolve(ROOT_PATH, 'public/dist');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');

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
      // version: JSON.stringify(packageJson.version),
      version: JSON.stringify('1.0.0'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});

export default config;
