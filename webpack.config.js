const path = require('path')

const option = {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js||jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  }
}

module.exports = [
  Object.assign({}, option, {
    entry: {
      renderer: path.join(__dirname, 'src/renderer/index.jsx')
    },
    target: 'electron-renderer'
  }),
  Object.assign({}, option, {
    entry: {
      main: path.join(__dirname, 'src/main/index.js')
    },
    target: 'electron',
    node: {
      __dirname: false
    }
  })
]
