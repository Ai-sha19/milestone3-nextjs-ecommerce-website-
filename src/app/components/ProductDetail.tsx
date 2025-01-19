import { useRouter } from 'next/router';
import { fetchProductBySlug } from '@/sanity/lib/fetch';
import React from 'react';

const ProductDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [product, setProduct] = React.useState<any>(null);

  React.useEffect(() => {
    if (slug) {
      fetchProductBySlug(slug as string).then((data: any) => setProduct(data));
    }
  }, [slug]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-xl text-green-600 font-semibold mt-4">
        ${product.price}
      </p>
      <p className="mt-2">
        <span className="font-bold">Available Sizes: </span>
        {product.sizes.join(', ')}
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-6 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
