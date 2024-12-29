import path from "path";
import nodeExternals from "webpack-node-externals";
import HtmlWebpackPlugin from "html-webpack-plugin";

const clientConfig = {
  mode: "development",
  entry: "./src/client/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "client.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Sử dụng babel-loader cho các file .ts hoặc .tsx
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: "babel-loader",
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
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
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
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};

module.exports = [clientConfig, serverConfig];
