import Image from 'next/image';

const ProductListing = ({ products }: { products: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 shadow-sm hover:shadow-md"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="font-bold text-lg">{product.name}</h2>
          <p className="text-gray-600">${product.price}</p>
          <p
            className={`text-sm ${
              product.inStock ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
