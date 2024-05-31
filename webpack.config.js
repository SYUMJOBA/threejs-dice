const path = require('path');

module.exports = {
  //...
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.join(__dirname, "public/")
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};