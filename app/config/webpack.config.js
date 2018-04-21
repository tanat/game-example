const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
  disable: false,
  allChunks: true,
});

module.exports = {
  entry: {
    'app': './app.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: '[name].js',
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        options: { babelrc: true }
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader",
            options: {
              minimize: NODE_ENV === 'production'
            }
          }, {
            loader: "sass-loader",
          }],
          fallback: "style-loader"
        })
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: false,
    runtimeChunk: {
      name: 'vendor'
    },
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /node_modules/,
          name: "vendor",
          chunks: "initial",
          minSize: 1
        }
      }
    }
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    extractSass,
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
        SSR: false,
      }
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/)
  ],
};
