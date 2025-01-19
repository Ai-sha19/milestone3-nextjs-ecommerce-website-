import React from "react";

// // src/app/components/Cart.tsx
interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }
  
  const Cart = () => {
    const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
    return (
      <div>
        <h2>Shopping Cart</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
        <h3>Total Price: ${totalPrice}</h3>
      </div>
    );
  };
  
  export default Cart;
  