import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { BrowserRouter } from "react-router-dom";

// document.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
// });
// document.onkeydown = (e: any) => {
//   if (e.keyCode === 123) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode && e.shiftKey === "I".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode && e.shiftKey === "C".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode && e.shiftKey === "J".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode === "A".charCodeAt(0)) {
//     return false;
//   }
// };

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
