const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "./dist"),
        publicPath: '/',
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                    exposes: ["$", "jQuery"],
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './',
                        },
                    },
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: [
                    {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: "fonts",
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: "images",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            template: './src/projects.html',
            filename: 'projects.html',
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            template: './src/project-details.html',
            filename: 'project-details.html',
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            template: './src/blog.html',
            filename: 'blog.html',
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            template: './src/blog-details.html',
            filename: 'blog-details.html',
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            template: './src/add-blog.html',
            filename: 'add-blog.html',
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            template: './src/about.html',
            filename: 'about.html',
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            template: './src/contact.html',
            filename: 'contact.html',
            inject: 'body',
        }),
        new MiniCssExtractPlugin(),
    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}