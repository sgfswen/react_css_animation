module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './dist/app.js'
  },
  devServer: {
    inline: true,
    port: 9999
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'react']
      }
    }]
  }
};
