
// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/entry-client.jsx',             // client hydration entry
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'client.bundle.js',              // browser script name
    publicPath: '/static/',                    // served from /static
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }        // uses babel.config.js
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']                // allow imports without extension
  },
  devtool: 'source-map'
};
