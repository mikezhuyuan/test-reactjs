module.exports = {
  entry: [
    __dirname + '/src/main.jsx'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, include: __dirname + '/src', exclude: /(node_modules|bower_components)/, loader: 'babel-loader' }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
};