const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
    mode: "production",
    plugins: [
        // new CopyPlugin({
        //     patterns: [
        //         { from: "src/assets", to: "assets" },
        //         { from: "public/html", to: "html" },
        //     ],
        // }),
        // new Dotenv({
        //     path: path.resolve(__dirname, "..", "./.env.production"),
        // }),
    ],

    // devtool: "source-map",
});
