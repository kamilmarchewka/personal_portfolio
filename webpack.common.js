const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
      entry: "./src/index.js",
      plugins: [
            new HtmlWebpackPlugin({
                  template: "./src/template.html",
            }),
      ],
      module: {
            rules: [
                  {
                        test: /\.html$/,
                        use: ["html-loader"],
                  },
            ],
      },
};
