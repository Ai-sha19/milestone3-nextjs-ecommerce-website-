const Cart = ({ cartItems }: { cartItems: any[] }) => {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.name}</span>
            <span>{item.quantity} x ${item.price}</span>
          </div>
        ))}
        <div className="font-bold mt-4">Total: ${totalPrice}</div>
      </div>
    );
  };
  
  export default Cart;
  