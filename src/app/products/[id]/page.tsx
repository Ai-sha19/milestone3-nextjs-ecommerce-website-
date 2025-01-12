'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type ProductDetailProps = {
  params: {
    id: string;
  };
};

const products = [
  { id: 1, name: 'A modern black chair', price: '$250', description: 'A modern black chair.', image: '/product-images/product1.png' },
  { id: 2, name: 'A set of rustic vases.', price: '$155', description: 'A set of rustic vases.', image: '/product-images/product2.png' },
  { id: 3, name: 'A smooth gray vase.', price: '$125', description: 'A smooth gray vase.', image: '/product-images/product3.png' },
  { id: 4, name: 'A sleek black lamp.', price: '$399', description: 'A sleek black lamp.', image: '/product-images/product4.png' },
  { id: 5, name: 'The modern golden hanging lamps.', price: '$250', description: 'The modern golden hanging lamps.', image: '/product-images/product5.png' },
  { id: 6, name: 'White vase.', price: '$155', description: 'White vase.', image: '/product-images/product6.png' },
  { id: 7, name: 'Round Stool.', price: '$125', description: 'Round Stool.', image: '/product-images/product7.png' },
  { id: 8, name: 'Comfortable chair', price: '$399', description: 'Comfortable chair.', image: '/product-images/product8.png' },
];

const ProductDetail = ({ params }: ProductDetailProps) => {
  const product = products.find((p) => p.id === parseInt(params.id));
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  if (!product) return <p>Product not found!</p>;

  const addToCart = () => {
    const cartItem = {
      ...product,
      quantity,
    };

    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    currentCart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(currentCart));

    alert('Added to cart!');
  };

  return (
    <div className="product-detail">
      <div className="product-image">
        <Image src={product.image} alt={product.name} width={500} height={500} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">{product.price}</p>
        <p>{product.description}</p>
        <div className="quantity-controls">
          <button onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button onClick={addToCart} className="add-to-cart-button">Add to Cart</button>
      </div>
      <div>
        <button onClick={() => router.push('/cart')} className="view-cart-button">View Cart</button>
      </div>

      <style jsx>{`
        .product-detail {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 20px;
          padding: 20px;
          gap: 20px;
          flex-wrap: wrap;
        }
        .product-image img {
          max-width: 100%;
          height: auto;
        }
        .product-info {
          max-width: 500px;
          text-align: left;
        }
        .price {
          color: green;
          font-size: 1.5rem;
          margin: 10px 0;
        }
        .quantity-controls {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .add-to-cart-button, .view-cart-button {
          background-color: #4CAF50;
          color: white;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          font-size: 16px;
          margin-top: 20px;
          border-radius: 5px;
        }
        .add-to-cart-button:hover, .view-cart-button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

export default ProductDetail;
