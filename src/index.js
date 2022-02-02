import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./scss/main.scss";
// eslint-disable-next-line
import app from "./firebase";
import { Provider } from "react-redux";
import store from "./store";
import { fetchData } from "./reducers/paginateSlice";

store.dispatch(fetchData);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
