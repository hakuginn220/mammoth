import path from 'path'

const option = {
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'app')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

export default [
  Object.assign({}, option, {
    entry: {
      index: path.join(__dirname, 'src/index/index.js')
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
