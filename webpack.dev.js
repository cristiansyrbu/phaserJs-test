const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/main.ts'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './src',
    port: 8080,
  },
  resolve: {
    extensions :['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node-modules/
    }]
  }
}