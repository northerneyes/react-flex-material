const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');

const LIBRARY_NAME = 'flex';

module.exports = {
  LIBRARY_NAME,
  externals: {
    react: 'react',
    lodash: 'lodash'
  },
  entry: {
    app: path.join(__dirname, 'src/index.js')
  },
  module: {
    loaders: [
      {
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[local]!postcss-loader!sass-loader'),
        test: /\.scss$/
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: './lib',
    filename: `${LIBRARY_NAME}.js`,
    library: 'Flex',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin(`${LIBRARY_NAME}.css`, {
      allChunks: true
    })
  ],
  postcss: () => [autoprefixer()]
};
