// src/app/all-products/[slug]/page.tsx
import { sanityfetch } from '@/sanity/lib/fetch'; // Fetch function for Sanity
import Image from 'next/image';

interface ProductDetailsProps {
  params: { slug: string }; // Dynamic route parameter
}

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  features: string[];
  dimensions: {
    height: number;
    width: number;
    depth: number;
  };
  tags: string[];
}

export default async function ProductDetailsPage({ params }: ProductDetailsProps) {
  const { slug } = params;

  // Sanity query to fetch product details
  const query = `
    *[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      description,
      price,
      "imageUrl": image.asset->url,
      features,
      dimensions,
      tags
    }
  `;
  const product: Product | null = await sanityfetch({ query, params: { slug } });

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/2">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        {/* Product Details */}
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-4">Price: ${product.price}</p>
          <h3 className="text-xl font-bold mb-2">Features:</h3>
          <ul className="list-disc ml-5 mb-4">
            {product.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h3 className="text-xl font-bold mb-2">Dimensions:</h3>
          <p>
            {product.dimensions?.height} x {product.dimensions?.width} x{' '}
            {product.dimensions?.depth}
          </p>
          <h3 className="text-xl font-bold mb-2">Tags:</h3>
          <p className="text-gray-500">{product.tags?.join(', ')}</p>
        </div>
      </div>
    </div>
  );
}
