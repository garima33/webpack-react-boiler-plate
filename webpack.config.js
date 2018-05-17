

const HtmlWebPackPlugin = require("html-webpack-plugin");

var path= require('path');

// this will create index.html file containing script
// source in dist folder dynamically
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  //specify the entry point for your project
  entry : './src/index.js',
  // specify the output file name
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    // consists the transform configuration
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  // this will create a development server to host our application
  // and will also provide live reload functionality
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3001
  },

  // this will watch the bundle for any changes
  watch: true,
  // specify the plugins which you are using
  plugins: [htmlPlugin]
};