const path = require('path');
//const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //mode: ""
    entry: {
        index: path.resolve(__dirname, './src/js/index.js'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist', 'assets', 'js'),
    },
    module: {
        rules: []
    },
    plugins: []
}
