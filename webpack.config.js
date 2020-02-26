const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/Cartesian.js",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "Cartesian.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env']
            }
          }
      }
    ]
  },
  externals: {
    react: "commonjs react"
  }
};
