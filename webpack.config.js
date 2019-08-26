const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'none',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', //3rd. Inject styles into DOM
                    'css-loader', //2nd. Turns css into commonjs
                    'sass-loader', // 1st. Turns sass into css
                ]
            }
        ]
    }
}