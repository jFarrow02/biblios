const path = require('path');
const baseConfg = require(path.resolve(__dirname, 'webpack.config'));

module.exports = {
    ...baseConfg,
    devtool: 'eval-source-map',
}