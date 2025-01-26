// src/app/all-products/[slug]/page.tsx
import { sanityfetch } from '@/sanity/lib/fetch';
import { ProductDetailsClient } from './ProductDetailsClient';

interface ProductDetailsProps {
  params: { slug: string };
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
  sizes: string[];
  colors: string[];
}

export default async function ProductDetailsPage({ params }: ProductDetailsProps) {
  const { slug } = params;

  const query = `
    *[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      description,
      price,
      "imageUrl": image.asset->url,
      features,
      dimensions,
      tags,
      sizes,
      colors
    }
  `;
  
  const product: Product | null = await sanityfetch({ query, params: { slug } });

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetailsClient product={product} />;
}
