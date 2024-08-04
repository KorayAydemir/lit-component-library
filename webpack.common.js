const fs = require("fs");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const { DefinePlugin } = require("webpack");
const paths = require("./webpack.paths");

const config = {
    entry: paths.entry,

    output: {
        path: `${paths.build}`,
        filename: "bundles/[name].[contenthash].js",
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: `${paths.playground}/index.html`,
            filename: `./index.html`,
            chunks: 'test',
        }),
        new DefinePlugin({
            PRODUCTION: process.env.NODE_ENV.startsWith("production"),
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        }),
        new FileManagerPlugin({
            runTasksInSeries: true,
            events: {
                onStart: {
                    delete: [`${paths.build}/`],
                    mkdir: [`${paths.build}/`],
                },
                onEnd: {
                    copy: [
                        { source: `${paths.src}/assets/to-root`, destination: `${paths.build}/` },
                    ],
                },
            },
        }),
    ],

    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            use: [{
                loader: "esbuild-loader",
                options: {
                    loader: "ts",
                    target: "es6",
                },
            }],
        }, {
            test: /.(scss|css)$/,
            use: [
                'lit-css-loader',
                'sass-loader',
            ],
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            type: "asset/resource",
        }],
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js", ".css", ".scss"],
        plugins: [new TsconfigPathsPlugin()],
    },
};

module.exports = config;
