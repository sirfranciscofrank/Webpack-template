import { merge } from "webpack-merge";
import common from "./webpack.common.js";

// merges common config + adds dev specific stuff on top
export default merge(common, {
  // development mode — readable output, easier to debug
  mode: "development",
  // maps error messages back to your original source files
  devtool: "eval-source-map",
  devServer: {
    // watch HTML template for changes too
    watchFiles: ["./src/template.html"],
  },
});