const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const { DuplicatesPlugin } = require("inspectpack/plugin");
const { mergeWithRules } = require("webpack-merge");
const common = require("./webpack.common");
const paths = require("./webpack.paths");

const config = mergeWithRules({
    module: {
        rules: {
            test: "match",
            use: {
                loader: "match",
                options: "replace",
            },
        },
    },
})(common, {
    mode: "production",

    externals: {
        react: 'react',
    },

    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            use: [{ loader: "minify-html-literals-loader" }],
        }, {
            test: /.(scss|css)$/,
            use: [{
                loader: "lit-css-loader",
                options: { uglify: true },
            }],
        }],
    },

    //plugins: [
    //    new FileManagerPlugin({
    //        events: {
    //            onEnd: {
    //                archive: [
    //                    { source: `${paths.build}/`, destination: `${paths.build}/build.zip` },
    //                ],
    //            },
    //        },
    //    }),
    //],

    optimization: {
        minimize: true,

        minimizer: [
            new TerserPlugin({
                terserOptions: { format: { comments: false } },
                extractComments: false,
            }),
            new CssMinimizerPlugin(),
        ],

        // not bothering with chunks for now so that i can emit single file and import it in other projects 
        //runtimeChunk: "single",
        //splitChunks: {
        //    cacheGroups: {
        //        vendor: {
        //            test: /[\\/]node_modules[\\/]/,
        //            name: "vendors",
        //            chunks: "all",
        //        },
        //    },
        //},
    },
});

// This plugin brakes stats.json
if (!process.env.NODE_ENV.endsWith("stats"))
    config.plugins.push(new DuplicatesPlugin());

module.exports = config;
