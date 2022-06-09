import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./reducers/users";
import questions from "./reducers/questions";
import authedUser from "./reducers/authedUser";
import logger from "./middlewares/logger";
import { loadingBarReducer } from "react-redux-loading";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    users,
    questions,
    authedUser,
    loadingBarReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk).concat(logger),
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
