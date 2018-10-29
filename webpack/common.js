import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'


const basePath = (file) => path.resolve(process.cwd(), file)

const webpackConfig = {

  entry: {
    'app': basePath('src/index.js'),
  },

  output: {
    path: basePath('build'),
    filename: '[name].[hash:6].js',
    chunkFilename: '[id].[hash:6].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            loader: 'eslint-loader',
            options: {
              cache: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[hash:base64:4]',
            },
          },
          {
            loader: 'sass-loader',
          },
        ]
      },
    ],
  },

  resolve: {
    modules: [
      basePath('src'),
      'node_modules',
    ],
    extensions: [ '.js', '.scss' ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Scentbird',
      template: basePath('site/index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
    }),
  ],
}


export default webpackConfig
