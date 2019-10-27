const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: [
      '@babel/polyfill',
      './src/index.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-env']
      },
    }, {
      test: /\.css?$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader"
      ]
    },{
      test: /\.scss?$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }
      ]
    }]
  },
  devServer: {
    port: 9000
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    })
  ],
}
