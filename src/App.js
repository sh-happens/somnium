import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

const App = () => {
  const [shop, setShop] = useState([]);

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route
            path='/'
            exact
            render={(routeProps) => (
              <Products shop={shop} setShop={setShop} {...routeProps} />
            )}
          />
          <Route
            path='/shoppingcart'
            exact
            render={(routeProps) => (
              <ShoppingCart shop={shop} setShop={setShop} {...routeProps} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
