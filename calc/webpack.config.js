const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./app/main.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html",
    }),
  ],
};
