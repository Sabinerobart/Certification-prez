import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { Router } from "react-router-dom";
import "./style/reset.scss";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducersList";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
