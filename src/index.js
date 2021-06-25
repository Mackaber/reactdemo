import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Ejercicio1 from "./Ejercicio1";
import Ejercicio2 from "./Ejercicio2";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/Ejercicio1" />
      </Route>
      <Route exact path="/Ejercicio1" component={Ejercicio1} />
      <Route exact path="/Ejercicio2" component={Ejercicio2} />
    </Switch>
  </BrowserRouter>,
  rootElement
);
