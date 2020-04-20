const path = require('path')
const MiniCSSEctractPlugin = require('mini-css-extract-plugin')
const HTMLWebpacktPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },  
  devServer: {
    contentBase: './dist'
  }, 
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSEctractPlugin.loader
          },
          'css-loader',
        ]
      }
    ]
  },
  plugins: [
    new MiniCSSEctractPlugin({
      filename: 'style.css'
    }),
    new HTMLWebpacktPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
}