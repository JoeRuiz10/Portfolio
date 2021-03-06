import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./landing_page";
import Creator from "./creator";
import Developer from "./developer";

ReactDOM.render(
  <BrowserRouter>
       <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/creator" component={Creator} />
        <Route path="/developer" component={Developer} />
      </Switch>
      </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
