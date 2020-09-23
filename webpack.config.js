const path = require(`path`);
const portFinderSync = require(`portfinder-sync`);
const port = portFinderSync.getPort(1338);
const MomentLocalesPlugin = require(`moment-locales-webpack-plugin`);
const webpack = require(`webpack`);

module.exports = {
  entry: `./src/index.tsx`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `docs`)
  },
  devServer: {
    contentBase: path.join(__dirname, `docs`),
    historyApiFallback: true,
    watchContentBase: true,
    open: true,
    hot: true,
    port,
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, `src/components/`),
      '@src': path.resolve(__dirname, `src/`),
    },
    extensions: [`.ts`, `.tsx`, `.js`, `json`]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: `ts-loader`
      }
    ],
  },
  devtool: `source-map`,
  plugins: [
    new MomentLocalesPlugin({
      localesToKeep: [`es-us`]
    }),
    new webpack.DefinePlugin({
      [`process.env.PUBLIC_URL`]: JSON.stringify(process.env.PUBLIC_URL)
    })
  ]
};
