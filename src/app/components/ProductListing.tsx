import React from "react";

// src/app/components/ProductListing.tsx
interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductListing = () => {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data: Product[] = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product._id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
          <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded" />
          <p className="text-gray-700 mt-2">Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
