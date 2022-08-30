const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development', 
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: '[name][contenthash].js', // default is main.js
        clean: true, // deletes old built files
        assetModuleFilename: '[name][ext]' // To avoid image loader changing the names
    },
    devtool: 'source-map', // Adds js.map source file
    devServer: { 
        static: {
            directory: path.resolve(__dirname, 'dist')
        }, 
        port: 3000,  // Development
        open: true, 
        hot: true, 
        compress: true, 
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/, // Loaders
                use: [
                    'style-loader', 
                    'css-loader', 
                    'sass-loader'
                ]
            }, 
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader', // Babel 
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, 
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, // Image loader
                type: 'asset/resource'
            }
        ]
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Starter', // HTML template bundle
            filename: 'index.html', 
            template: 'src/template.html'
        }), 
        new BundleAnalyzerPlugin() // Bundle analyzer
    ]
}