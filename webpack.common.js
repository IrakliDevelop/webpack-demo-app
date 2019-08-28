const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: './src/vendor.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', //3rd. Inject styles into DOM
                    'css-loader', //2nd. Turns css into commonjs
                    'sass-loader', // 1st. Turns sass into css
                ],
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpg|gif)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'assets/images',
                    },
                },
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/template.html'
    })],
}