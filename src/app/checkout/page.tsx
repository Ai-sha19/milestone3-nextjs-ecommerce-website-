'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { cart } = useCart();
  const router = useRouter();

  // Billing Information State
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // Check if all fields are filled
    if (Object.values(billingInfo).some((field) => field.trim() === '')) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    alert('Order placed successfully!');
    router.push('/'); // Redirect to home page after placing the order
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart is Empty</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Billing Information Form */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={billingInfo.name}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={billingInfo.email}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={billingInfo.address}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={billingInfo.city}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded"
          />
          <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            value={billingInfo.zipCode}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={billingInfo.country}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded"
          />
        </div>
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </div>

      {/* Order Summary */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="text-right mt-4 text-xl font-bold">
          Total: ${totalAmount.toFixed(2)}
        </div>
      </div>

      {/* Place Order Button */}
      <button
        onClick={handlePlaceOrder}
        className="w-full bg-[#dcdcdc] px-6 py-3 rounded-lg text-[#2A254B] hover:bg-[#2a254b] hover:text-white transition-colors duration-300"
      >
        Place Order
      </button>
    </div>
  );
}
