const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/Cartesian.js',
    output: {
        path: path.resolve('lib'),
        filename: 'Cartesian.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}
