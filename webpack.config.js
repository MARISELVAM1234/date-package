const path = require("./src/index");

module.exports = {
  entry: "./src/index.ts", // Adjust the entry point as needed
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel",
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        include: [
          path.resolve(__dirname, "node_modules/date-package-format/src"),
        ],
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ["react", "es2015"],
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  // Add any plugins or additional configurations as needed
};
