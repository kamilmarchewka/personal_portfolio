const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
const SocialTags = require("social-tags-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new CleanWebpackPlugin(),
    // new HtmlWebpackTagsPlugin({
    //   metas: [
    //     {
    //       path: "og_home.png",
    //       attributes: {
    //         property: "og:image",
    //       },
    //     },
    //   ],
    // }),
    // new SocialTags({
    //   appUrl: "http://kamilmarchewka.design/",
    //   facebook: {
    //     // 'fb:app_id': "123456789",
    //     "og:url": "http://kamilmarchewka.design/index.html",
    //     "og:type": "website",
    //     "og:title": "Content Title",
    //     "og:image": "src/og_home.png",
    //     "og:description": "Description Here",
    //     "og:site_name": "Site Name",
    //     // 'og:locale': "en_US",
    //     // 'og:article:author': "",
    //   },
    //   twitter: {
    //     // "twitter:card": "summary",
    //     // "twitter:site": "@site_account",
    //     // "twitter:creator": "@individual_account",
    //     "twitter:url": "http://kamilmarchewka.design/index.html",
    //     "twitter:title": "Content Title",
    //     "twitter:description": "Content description less than 200 characters",
    //     "twitter:image": "./src/og_home.png",
    //   },
    // }),
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
