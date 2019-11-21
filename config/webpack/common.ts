import webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

const config: webpack.Configuration = {
  devtool: isProduction ? false : 'source-map',
  mode: isProduction ? 'production' : 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
};

export default config;
