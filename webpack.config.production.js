import path from "path";
import webpack from "webpack";

export default {
  debug: true,
  noInfo: false,
  devtool: "source-map",
  entry: [
    path.resolve(__dirname, "src/index")
  ],
  target: "web",
  output:  {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    //  eleminates duplicate packages
    new webpack.optimize.DedupePlugin();
    //  minify the js files
    new webpack.optimize.UglifyJsPlugin();
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel"] },
      { test: /\.css$/, loaders: ["style", "css"]}
    ]
  }
}
