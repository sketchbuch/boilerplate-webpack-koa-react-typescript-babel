const path = require('path');
const APP_DIR = path.resolve(__dirname, "./");

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: APP_DIR.concat('build'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './build'
  }
};
