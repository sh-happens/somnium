import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

const App = () => {
  const [shop, setShop] = useState(() => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(shop));
  }, [shop]);

  return (
    <Router>
      <div className='App'>
        <Navbar />
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
      </div>
    </Router>
  );
};

export default App;
