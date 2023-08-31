const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Додано плагін

module.exports = {
  mode: 'none',
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    styles: path.resolve(__dirname, './src/scss/index.scss'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/pages/index.html'),
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/pages/news.html'),
      filename: 'news.html',
    }),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/pages/photo.html'),
      filename: 'photo.html',
    }),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/pages/rozklad.html'),
      filename: 'rozklad.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'assets', 'images'),
          to: path.resolve(__dirname, 'dist', 'assets', 'images'),
        },
      ],
    }),
    new MiniCssExtractPlugin({ filename: 'styles.css' }), // Додано плагін MiniCssExtractPlugin
  ],
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 9000,
  },
};