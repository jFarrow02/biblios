const path = require('path');
const testRegex = require(path.resolve(__dirname, 'build-config', 'test-regex'));

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.dist.js',
    },
    module: {
        rules: [
            {
                test: testRegex.jsTest,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: testRegex.fileRegex,
                loader: 'file-loader',
            }
        ]
    }
}