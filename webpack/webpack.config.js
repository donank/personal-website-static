const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ContextReplacementPlugin } = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/main.ts'
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: "index.bundle.js",
    },
    resolve: {
        extensions: ['.js', '.ts', '.html', '.css', '.scss']
    },
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        port: 9000
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            { test: /\.ts$/, use: ['awesome-typescript-loader', 'angular2-template-loader'] },
            { test: /\.html$/, use: 'raw-loader' },
            { test: /\.(s*)css$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            showErrors: true,
            title: "Personal App",
            path: path.join(__dirname, '../dist'),
            hash: true
        }),
        new ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, '../src')
        )
    ]
    
}