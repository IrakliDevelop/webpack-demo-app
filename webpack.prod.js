const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contentHash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin()] // minifies css
    },
    plugins: [
        new CleanWebpackPlugin(), // used to delete old files and recreate dist folder on build
        new MiniCssExtractPlugin({ filename: '[name].[contentHash].css'})
    ], 
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader, //3rd. Exstract css into files
                'css-loader', //2nd. Turns css into commonjs
                'sass-loader', // 1st. Turns sass into css
            ],
        }],
    }
});