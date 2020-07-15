import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = ({ shop, setShop }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleAddProduct = (id) => {
    let productToAdd = products.find((product) => {
      return product.id === id;
    });
    setShop(shop.concat(productToAdd));
  };

  return (
    <div className='products-container'>
      {products.map((product) => (
        <div className='product' key={product.id}>
          <img src={product.img} alt='alt' />
          <p>{product.title}</p>
          <p>{product.price} тенге</p>
          <button
            onClick={() => {
              handleAddProduct(product.id);
            }}
          >
            Добавить в корзину
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
