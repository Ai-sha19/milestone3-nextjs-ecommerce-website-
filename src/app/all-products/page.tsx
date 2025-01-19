// src/app/all-products/page.tsx
import Link from 'next/link';
import { sanityfetch } from '@/sanity/lib/fetch'; // Fetch function for Sanity
import Image from 'next/image';

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  slug: {
    current: string;
  };
}

export default async function AllProductsPage() {
  // Sanity query to fetch all products
  const query = `
    *[_type == "product"]{
      _id,
      name,
      price,
      "imageUrl": image.asset->url,
      slug
    }
  `;

  const products: Product[] = await sanityfetch({ query });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <Link href={`/all-products/${product.slug.current}`}>
              {/* Product Image */}
              <Image
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
              />
              {/* Product Name */}
              <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
              {/* Product Price */}
              <p className="text-gray-700 mt-2">Price: ${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
