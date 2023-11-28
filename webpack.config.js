// const path = require("path");

// module.exports = {
//   entry: "./src/index.ts",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "index.js",
//     libraryTarget: "umd",
//     library: "ThemeSwitcher",
//     umdNamedDefine: true,
//   },
//   mode: "development",
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         loader: "ts-loader",
//         exclude: /node_modules/,
//         options: {
//           transpileOnly: true,
//           // Add other options...
//         },
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".js"],
//   },
//   externals: {
//     react: "react",
//   },
// };

const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
    library: "ThemeSwitcher",
    umdNamedDefine: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
          // Add other options...
        },
      },
      {
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  externals: {
    react: "react",
  },
};
