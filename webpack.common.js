const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      favicon: "./src/favicon.png",
      // meta: {
      // 'Content-Security-Policy': { 'http-equiv': 'Content-Security-Policy', 'content': 'default-src https:' },
      // // Will generate: <meta http-equiv="Content-Security-Policy" content="default-src https:">
      // // Which equals to the following http header: `Content-Security-Policy: default-src https:`
      // 'set-cookie': { 'http-equiv': 'set-cookie', content: 'name=value; expires=date; path=url' },
      // // Will generate: <meta http-equiv="set-cookie" content="value; expires=date; path=url">
      // // Which equals to the following http header: `set-cookie: value; expires=date; path=url`
      // "og:image": { content: "./src/og_home.png" },
      // <meta property="og:image" content="./og_home.png" />

      // },
      // meta: {
      // 'description': { name: 'description', contnet: '...' },
      // 'keyword': { name: 'keywords', content: '...' },
      // 'og:title': { property: 'og:title', content: '...' },
      // 'og:description': { property: 'og:description', content: '...' },
      // 'og:type': { property: 'og:type', content: 'website' },
      // 'og:url': { property: 'og:url', content: '...' },
      // "og:image": { property: "og:image", content: "/og_home.png" },
      // 'twitter:card': { name: 'twitter:card', content: 'summary_large_image' },
      // 'twitter:title': { name: 'twitter:title', content: '...' },
      // 'twitter:description': { name: 'twitter:description', content: '...' },
      // 'twitter:image': { name: 'twitter:image', content: '...' }
      // },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      // {
      //   test: /\.html$/i,
      //   loader: "html-loader",
      //   options: {
      //     sources: {
      //       list: [
      //         {
      //           tag: "meta",
      //           attribute: "content",
      //           type: "src",
      //           filter: (tag, attribute, attributes, resourcePath) => {
      //             if (
      //               attributes.value === "og:image" ||
      //               attributes.name === "twitter:image"
      //             ) {
      //               return true;
      //             }

      //             return false;
      //           },
      //         },
      //       ],
      //     },
      //   },
      // },
    ],
  },
};
