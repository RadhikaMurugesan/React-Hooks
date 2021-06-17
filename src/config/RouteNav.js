import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

function RouteNav() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="home" />
        <Route path="/home" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route
          path="/products/category/electronics"
          component={() => <Home pageName="electronics" />}
        />
        <Route
          path="/products/category/jewelery"
          component={() => <Home pageName="jewelery" />}
        />
        <Route
          path="/products/category/mens"
          component={() => <Home pageName="mens" />}
        />
        <Route
          path="/products/category/womens"
          component={() => <Home pageName="womens" />}
        />
      </Switch>
    </BrowserRouter>
  );
}
export default RouteNav;
