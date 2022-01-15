// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: './src/main.ts',
//     resolve: {
//         extensions: ['.ts', '.js']
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.ts$/,
//                 use: ['ts-loader', 'angular2-template-loader']
//             },
//             {
//                 test: /\.(html|css)$/,
//                 use: 'raw-loader'
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({ template: './src/index.html' }),
//         new webpack.DefinePlugin({
//             // global app config object
//             config: JSON.stringify({
//                 // apiUrl: 'http://localhost:4000'
//                 apiUrl: 'http://localhost:4200'
//             })
//         })
//     ],
//     devServer: {
//         historyApiFallback: true
//     }
// }

//====
import { DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const entry = './src/main.ts';
export const resolve = {
    extensions: ['.ts', '.js']
};
export const module = {
    rules: [
        {
            test: /\.ts$/,
            use: ['ts-loader', 'angular2-template-loader']
        },
        {
            test: /\.(html|css)$/,
            use: 'raw-loader'
        }
    ]
};
export const plugins = [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new DefinePlugin({
        // global app config object
        config: JSON.stringify({
            // apiUrl: 'http://localhost:4000'
            apiUrl: 'http://localhost:4200'
        })
    })
];
export const devServer = {
    historyApiFallback: true
};