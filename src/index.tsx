import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Web3 Provider
import { Web3Provider } from "./components/providers";

// Redux Provider
import { Provider } from "react-redux";
import { store } from "./redux/store";

// react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Web3Provider>
    <Provider store={store}>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={false}
        hideProgressBar
        closeOnClick
      />
    </Provider>
  </Web3Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
