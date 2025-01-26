// src/app/all-products/[slug]/ProductDetailsClient.tsx
'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext'; // Assuming you have a CartContext setup
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  sizes: string[];
  colors: string[];
}

interface ProductDetailsClientProps {
  product: Product;
}

export function ProductDetailsClient({ product }: ProductDetailsClientProps) {
  const { addToCart } = useCart(); // Use the cart context
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    const cartProduct = {
      id: product._id,
      name: product.name,
      price: product.price,
      quantity,
      imageUrl: product.imageUrl,
    };

    addToCart(cartProduct); // Add item to the cart
    alert('Product added to cart!');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-48 object-cover rounded"
            width={300}
            height={300}
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-4">Price: ${product.price}</p>
          <div className="mb-4">
            <label htmlFor="quantity" className="block font-bold mb-2">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              className="border p-2 rounded w-full"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-[#F9F9F9] text-[#2A254B] hover:bg-[#2a254b] hover:text-white transition-colors duration-300 px-6 py-3 rounded-lg font-medium"
            >
              Add to Cart
            </button>
            <button className="bg-[#F9F9F9] text-[#2A254B] hover:bg-[#2a254b] hover:text-white transition-colors duration-300 px-6 py-3 rounded-lg font-medium">
              <Link href="/cart">View Cart</Link>
            </button>

            <button className="bg-[#F9F9F9] text-[#2A254B] hover:bg-[#2a254b] hover:text-white transition-colors duration-300 px-6 py-3 rounded-lg font-medium">
              <Link href="/all-products">Continue Shopping</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
