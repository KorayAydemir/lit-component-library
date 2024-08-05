const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const { DefinePlugin } = require("webpack");
const paths = require("./webpack.paths");

const config = {
    entry: {
        main: paths.entries.main,
        reactMain: paths.entries.reactMain,
    },
    output: {
        path: paths.build,
        filename: "[name].js",
        library: {
            // Output ESM exports
            type: "module",
        },
    },
    experiments: {
        // Required to output ESM
        outputModule: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            // Input file
            template: `${paths.playground}/index.html`,
            // Output file
            filename: `./index.html`,
            scriptLoading: "module"
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
                        { source: `src/assets/to-root`, destination: `${paths.build}/` },
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
                { loader: 'lit-css-loader' },
                { loader: 'sass-loader' },
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
