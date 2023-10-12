const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    devServer: {
        port: 3000,
    },
    module:{
        rules: [{ test: /\.css$/i, use: ['style-loader','css-loader'] }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}