import React from "react";

const ShoppingCart = ({ shop }) => {
  return (
    <div>
      {shop.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default ShoppingCart;
