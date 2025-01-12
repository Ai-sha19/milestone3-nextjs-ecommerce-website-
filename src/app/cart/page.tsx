'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Define the type for a cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart) as CartItem[]);
    }
  }, []);

  const handleRemoveItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    alert('Proceeding to Checkout');
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty!</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <Image src={item.image} alt={item.name} width={150} height={100} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="price">Price: {item.price}</p>
                <p className="quantity">Quantity: {item.quantity}</p>
                <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <button onClick={handleCheckout} className="checkout-button">
          Checkout
        </button>
      )}

      <style jsx>{`
        .cart-container {
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }
        .cart-title {
          text-align: center;
          font-size: 24px;
          font-weight: bold;
          color: white;
          padding: 10px;
          background: #2a254b;
          border-radius: 5px;
        }
        .cart-items {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .cart-item {
          display: flex;
          align-items: center;
          gap: 15px;
          background: #fff;
          padding: 10px;
          border-radius: 5px;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        }
        .cart-item-details {
          flex-grow: 1;
        }
        .price,
        .quantity {
          background: #e0e0e0;
          padding: 5px;
          border-radius: 3px;
          display: inline-block;
          margin: 5px 0;
        }
        .remove-button {
          background: #ff4d4d;
          color: white;
          padding: 5px 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .remove-button:hover {
          background: #cc0000;
        }
        .checkout-button {
          display: block;
          width: 100%;
          padding: 10px;
          background: #28a745;
          color: white;
          font-size: 18px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          text-align: center;
          margin-top: 15px;
          transition: background 0.3s;
        }
        .checkout-button:hover {
          background: #218838;
        }
        @media (max-width: 480px) {
          .cart-item {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Cart;
