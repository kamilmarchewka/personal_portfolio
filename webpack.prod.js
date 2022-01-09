const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
const SocialTags = require("social-tags-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "src/og_home.png",
          to: "og_home.png",
        },
        {
          from: "src/favicon",
          to: "favicon",
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
});
