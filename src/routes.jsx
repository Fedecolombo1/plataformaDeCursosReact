import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home'
import Detail from "./Pages/Detail/Detail";
import Cursos from './Pages/Cursos/Cursos'
import Carrito from './Pages/Carrito/Carrito'
import PagoExitoso from './Pages/PagoExitoso/PagoExitoso'
import Pagar from './Components/Pagar/Pagar'

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/category/:categoryId">
            <Cursos />
          </Route>
          <Route path="/:category/:id">
            <Detail />
          </Route>
          <Route path="/cart">
            <Carrito />
          </Route>
          <Route path="/pagar">
            <Pagar />
          </Route>
          <Route path="/pagoExitoso">
            <PagoExitoso />
          </Route>
        </Switch>
    </Router>
  );
}