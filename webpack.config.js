const path = require('path')

const COMMON = {
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'app')
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
          presets: ['react']
        }
      }
    ]
  }
}

const FRONTEND = {
  entry: {
    index: path.join(__dirname, 'src/index/index.js')
  },
  target: 'electron-renderer'
}

const BACKEND = {
  entry: {
    main: path.join(__dirname, 'src/main/index.js')
  },
  target: 'electron',
  node: {
    __dirname: false
  }
}

module.exports = [
  Object.assign({}, COMMON, FRONTEND),
  Object.assign({}, COMMON, BACKEND)
]
