const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.css$/,
        loader: ExtractTextWebpackPlugin.extract({
          loader: "css-loader",
        }),
      },
      {
        test: /\.(jpe?g|png|svg|gif|webp)$/,
        use: [
          'url-loader',
          'image-webpack-loader'
        ]
      }
    ],
  },
  plugins: [
    new ExtractTextWebpackPlugin('style.css')
  ],
};
