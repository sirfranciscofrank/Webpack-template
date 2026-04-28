import { merge } from "webpack-merge";
import common from "./webpack.common.js";

// merges common config + adds prod specific stuff on top
export default merge(common, {
  // production mode — minified and optimized for deployment
  mode: "production",
});