import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className='products-container'>
      {products.map((product) => (
        <div className='product' key={product.id}>
          <img src={product.img} alt='alt' />
          <p>{product.title}</p>
          <p>${product.price}</p>
          <button>add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
