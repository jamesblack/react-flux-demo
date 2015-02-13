module.exports = {
  entry: "./public/javascripts/entry.jsx",
  output: {
    path: __dirname + "/public/javascripts",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "jsx-loader?harmony"},
      { test: /\.json$/, loader: "json-loader"}
    ]
  },
  devtool: "#inline-source-map"
};
