// src/components/AllProductsPreview.tsx
import Link from 'next/link';
import { sanityfetch } from '@/sanity/lib/fetch'; // Fetch function for Sanity
import Image from 'next/image'; // Importing Image from next/image

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  slug: {
    current: string;
  };
}

export default async function AllProductsPreview() {
  // Sanity query to fetch only a few products for the homepage
  const query = `
    *[_type == "product"][0..5]{
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
      <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <Link href={`/all-products/${product.slug.current}`}>
              {/* Product Image using Image component */}
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={500} // Set the width of the image
                height={300} // Set the height of the image
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

      <div className="mt-10 text-center">
        <Link href="/all-products">
          {/* View All Products Button with styling */}
          <button className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B] hover:bg-[#2a254b] hover:text-white transition-colors duration-300">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
}
