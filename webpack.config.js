const path = require('path');
const webpack = require('webpack');
const { Config } = require('webpack-config');
const ManifestPlugin = require('webpack-manifest-plugin');

const env = process.env.NODE_ENV;
const isDev = env !== 'production';
const isProd = !isDev;

const config = new Config();

const filename = isDev ? '[name].bundle.js' : '[name]_[hash:5].bundle.js';

const publicPath = '/js/dist/';

config.merge({
  mode: env,
  entry: './src/main.js',
  output: {
    filename,
    chunkFilename: filename,
    path: path.resolve(__dirname, 'dist'),
    publicPath,
  },
  devtool: isDev ? '' : '',
  context: path.resolve(__dirname),
  bail: isProd,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              localIdentName: '[local]-[hash:base64:5]',
              minimize: 1,
              modules: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss'
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      __PROD__: JSON.stringify(isProd),
    }),
  ],
});

if (isProd) {
  config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin(),
    new ManifestPlugin({ publicPath }));
}

module.exports = config;
