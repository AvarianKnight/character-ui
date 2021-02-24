const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    target: "web",
    devServer: {
        contentBase: path.resolve(__dirname, "..", "./dist"),
        open: true,
        hot: true,
        port: 8080,
    },
});
