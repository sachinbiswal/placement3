import React from 'react';
import './style.css'
const Cart = ({ products, productCounts, incrementQuantity, decrementQuantity }) => {
  const productsInCart = products.filter((product) => productCounts[product.id] > 0);

  const calculateTotal = () => {
    return productsInCart.reduce((total, product) => {
      return total + productCounts[product.id] * product.price;
    }, 0);
  };

  return (
    <div>
      <h2>Cart</h2>
      {productsInCart.length === 0 ? (
        <p>No products in the cart</p>
      ) : (
        <div >
            {productsInCart.map((product) => (
              <p key={product.id}>
                {product.name}  {product.price} * {productCounts[product.id]}
              </p>
            ))}
          <h3 className='total'>Total: {calculateTotal()}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
