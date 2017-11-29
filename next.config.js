const path = require('path')
const glob = require('glob')

const webpack = require('webpack')

module.exports = {
  webpack: (config, { dev }) => {
    if (config.resolve.alias) {
      delete config.resolve.alias.react
      delete config.resolve.alias['react-dom']
    }
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      }
    ,
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      }
    ,
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    )
    config.plugins.push(
      new webpack.DefinePlugin({
      "global.GENTLY": false,

      }))
    return config
  },
  node: {
    __dirname: true,
  },
}
