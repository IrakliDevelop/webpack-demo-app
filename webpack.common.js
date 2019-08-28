const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
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
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/template.html'
    })],
}