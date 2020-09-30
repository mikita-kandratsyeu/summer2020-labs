const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/xmlHttpRequest/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/xmlHttpRequest/build'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'src/xmlHttpRequest/build'),
    port: 3000,
  },
};
