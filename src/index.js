import React from "react";
import ReactDOM from "react-dom";
//import { createStore } from "redux";
import { Provider } from "react-redux";
import "./styles/AppStyles.scss";
import "./styles/toastr.css";
//import reportWebVitals from "./reportWebVitals";
import configureStore  from "./store/configureStore";
import AppRouter from "./routers/MainRouter";
const loader = document.querySelector(".loader");

const hideLoader = () => loader.classList.add("loader--hide");

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <AppRouter  hideLoader={hideLoader}/>
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
