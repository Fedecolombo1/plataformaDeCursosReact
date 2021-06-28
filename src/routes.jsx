import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home'
import Detail from "./Pages/Detail/Detail";
import Cursos from './Pages/Cursos/Cursos'

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
          <Route path="/cursos">
            <Cursos />
          </Route>
          <Route path="/cursos/:id">
            <Detail />
          </Route>
        </Switch>
    </Router>
  );
}