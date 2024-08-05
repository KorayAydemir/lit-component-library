const path = require("path");

const getAbsolutePath = (pathRelativeToProjectRoot) => {
    return path.join(__dirname, pathRelativeToProjectRoot)
}

// noinspection WebpackConfigHighlighting
const paths = {
    build: getAbsolutePath("/build"),
    entries: {
        main: getAbsolutePath("/src/exports.ts"),
        reactMain: getAbsolutePath("/src/react-exports.ts"),
    },
    playground: getAbsolutePath("/src/playground")
};

module.exports = paths;
