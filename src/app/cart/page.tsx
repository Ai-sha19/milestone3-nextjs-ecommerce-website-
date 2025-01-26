'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function ShoppingCartPage() {
  const { cart, updateCartItem, removeCartItem } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart is Empty</h1>
        <Link href="/all-products">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b pb-4">
            <div>
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p>${item.price} x {item.quantity} = ${item.price * item.quantity}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => updateCartItem(item.id, item.quantity - 1)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateCartItem(item.id, item.quantity + 1)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
              <button
                onClick={() => removeCartItem(item.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='flex gap-2 sm:gap-4 md:gap-4 mt-6 justify-between'>
        <div className="">
          <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p></div>
          <div className="flex flex-col sm:flex-row gap-4">
  <Link href="/checkout">
    <button className="bg-[#F9F9F9] text-[#2A254B] hover:bg-[#2a254b] hover:text-white transition-colors duration-300 px-6 py-3 rounded-lg font-medium">
      Proceed to Checkout
    </button>
  </Link>
  <Link href="/all-products">
    <button className="bg-[#F9F9F9] text-[#2A254B] hover:bg-[#2a254b] hover:text-white transition-colors duration-300 px-6 py-3 rounded-lg font-medium">
      Continue Shopping
    </button>
  </Link>
</div>


      </div>
    </div>
  );
}
