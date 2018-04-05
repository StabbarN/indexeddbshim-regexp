var path = require( 'path' ) // eslint-disable-line no-undef

const config = {
  entry: [
    // 'babel-polyfill',
    // '@babel/polyfill',
    './app/app.js'
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.(js)?$/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            ['@babel/preset-env', {
              useBuiltIns: 'entry',
              targets: {
                browsers: [
                  'iOS >= 9',
                ],
              },
            }],
          ],
          plugins: [
            // '@babel/plugin-transform-sticky-regex',
          ],
        },
      }
    ],
  },
}
module.exports = config
