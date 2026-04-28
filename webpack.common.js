import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  // starting point — Webpack traces all imports from here
  entry: "./src/index.js",
  output: {
    // output bundle filename
    filename: "main.js",
    // output to dist/ folder
    path: path.resolve(import.meta.dirname, "dist"),
    // wipe dist/ clean before every build
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // base HTML template — auto injects script tag
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        // handle CSS imports
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        // handle image src paths in HTML
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        // handle images imported in JS
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};