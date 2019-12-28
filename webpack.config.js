const path = require('path');
const testRegex = require(path.resolve(__dirname, 'build-config', 'test-regex'));
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src', 'index'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.dist.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
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
    },//end module
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
        }
    }
}