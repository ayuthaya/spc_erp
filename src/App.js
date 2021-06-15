import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/Home";

import * as ROUTES from "./constants/routes";
import "./App.css";

export default function App() {
  return (
    <Router basename={ROUTES.PUBLIC_PATH}>
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomePage} />
      </Switch>
    </Router>
  );
}
