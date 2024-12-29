import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const render = (Component: React.FC) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};
render(App);

declare const module: {
  hot?: {
    accept: (path: string, callback: () => void) => void;
  };
};

if ((module as any).hot) {
  module.hot?.accept("./App", () => {
    const NextApp = require("./App").default;
    render(NextApp);
  });
}
