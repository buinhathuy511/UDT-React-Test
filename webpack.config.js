const path = require("path");
const nodeExternals = require("webpack-node-externals");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const clientConfig = {
  mode: "development",
  entry: [
    "webpack-hot-middleware/client?reload=true", // Kích hoạt Hot Module Replacement (HMR) thông qua webpack-hot-middleware
    "./src/client/index.tsx",
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "client.bundle.js",
    publicPath: "/", // Đường dẫn tới thư mục chứa file bundle trên server
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Sử dụng babel-loader cho các file .ts hoặc .tsx
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: "babel-loader",
      },
      {
        test: /\.scss$/, // Thêm loader cho file .scss
        use: ["style-loader", "css-loader", "sass-loader"], // Sử dụng các loader để xử lý file .scss
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    hot: true, // Kích hoạt Hot Module Replacement (HMR)
    open: true, // Mở trình duyệt khi chạy server
    port: 3000, // Port mặc định cho webpack-dev-server
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new webpack.HotModuleReplacementPlugin(), // Kích hoạt Hot Module Replacement (HMR)
  ],
};

const serverConfig = {
  mode: "development",
  entry: "./src/server/server.tsx",
  target: "node", // Xác định ứng dụng chạy trên môi trường Node
  externals: [nodeExternals()], // Loại trừ các module trong node_modules khỏi bundle
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/, // Thêm loader cho file .scss
        use: ["style-loader", "css-loader", "sass-loader"], // Sử dụng các loader để xử lý file .scss
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};

module.exports = [clientConfig, serverConfig];
