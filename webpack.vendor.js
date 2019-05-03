const path = require("path");

module.exports = {
    target: "node",
    mode: "production",
    entry: {
        entry: "./src/index.js"
    },
    output: {
        filename: "index.js",
        library: "[name]"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [path.resolve(__dirname, "src/resolvers")]
            }
        ]
    }
};
