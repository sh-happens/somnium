import React from "react";

const ShoppingCart = ({ shop, setShop }) => {
  const handleClear = () => {
    localStorage.clear();
    setShop([]);
  };

  return (
    <div>
      <Total total={shop} />
      <Clear handleDeleteItem={handleClear} />
      <div className='products-container'>
        {shop.map((product) => (
          <div className='product' key={product.id}>
            <img src={product.img} alt='alt' />
            <p>{product.title}</p>
            <p>{product.price} тенге</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Total = ({ total }) => {
  return (
    <div>
      <p>
        <b>
          Итого:{" "}
          {total.reduce((sum, book) => {
            return sum + book.price;
          }, 0)}
          {""} тенге
        </b>
      </p>
    </div>
  );
};

const Clear = ({ handleDeleteItem }) => {
  return (
    <button
      onClick={() => {
        handleDeleteItem();
      }}
    >
      Очистить корзину
    </button>
  );
};

export default ShoppingCart;
