import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home'
import Detail from "./Pages/Detail/Detail";

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detalle">
            <Detail />
          </Route>
        </Switch>
    </Router>
  );
}