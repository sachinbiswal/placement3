import React, { useState } from 'react';
import Cart from './Cart';
import './style.css';

function Product() {
  const Products = [
    { id: 1, name: 'Product-1', price: 100 },
    { id: 2, name: 'Product-2', price: 200 },
    { id: 3, name: 'Product-3', price: 300 },
  ];

  const [productCounts, setProductCounts] = useState({});

  const handleIncrement = (productId) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    if (productCounts[productId] > 0) {
      setProductCounts((prevCounts) => ({
        ...prevCounts,
        [productId]: prevCounts[productId] - 1,
      }));
    }
  };

  return (
    <div className='home'>
      <div className='product'>
        <h2>Products</h2>
        {Products.map((product) => (
          <p key={product.id}>
            <div>{product.name} </div> {product.price} 
            <div className='btn'>
              <button className='btn1' onClick={() => handleDecrement(product.id)}>-</button>
              <span>{productCounts[product.id] || 0}</span>
              <button className='btn1' onClick={() => handleIncrement(product.id)}>+</button>
            </div>
          </p>
        ))}
      </div>
      <div className='cart'>
        <Cart
          products={Products}
          productCounts={productCounts}
          incrementQuantity={handleIncrement}
          decrementQuantity={handleDecrement}
        />
      </div>
    </div>
  );
}

export default Product;
