import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { HashRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./landing_page";
import Creator from "./creator";
import Developer from "./developer";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/creator" component={Creator} />
      <Route path="/developer" component={Developer} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();