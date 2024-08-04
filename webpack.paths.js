const path = require("path");

// noinspection WebpackConfigHighlighting
const paths = {
    src: path.join(__dirname, "/src"),
    build: path.join(__dirname, "/build"),
    nodeModules: path.resolve(__dirname, "node_modules"),
    playground: path.join(__dirname, "/src/playground"),
    entry: path.join(__dirname, "/src/exports.ts"),
};

module.exports = paths;
