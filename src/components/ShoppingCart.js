import React, { useState, useEffect } from "react";
import axios from "axios";

const ShoppingCart = ({ shop, setShop }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/shoppingcart").then((response) => {
      setShoppingCart(response.data);
    });
    setTimeout(() => {
      setShop(shop.concat("newstate"));
    }, 2000);
  }, []);

  return (
    <div>
      {shoppingCart.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
      <p>{shop}</p>
    </div>
  );
};

export default ShoppingCart;
