import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/AppStyles.scss";
import "./styles/toastr.css";
import configureStore from "./store/configureStore";
import AppRouter from "./routers/MainRouter";

const loader = document.querySelector(".loader");
const hideLoader = () => loader.classList.add("loader--hide");
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter hideLoader={hideLoader} />
  </Provider>,

  document.getElementById("root")
);
