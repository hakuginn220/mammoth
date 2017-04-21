const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    filename: path.join('dist', 'bundle.js'),
    path: path.resolve(__dirname)
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  target: 'electron-renderer'
}
