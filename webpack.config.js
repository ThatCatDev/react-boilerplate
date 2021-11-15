const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.jsx',
  optimization: {
    minimize: true,
  },
  output: {
    path: `${__dirname}/dist/`,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js(x|)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
    }),
  ],
}
