import { client } from './client';

export const sanityfetch = async ({
  query,
  params = {},
}: {
  query: string;
  params?: Record<string, unknown>;
}) => {
  try {
    return await client.fetch(query, params);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error fetching data from Sanity:', errorMessage);
    throw new Error(`Failed to fetch data: ${errorMessage}`);
  }
};

// Fetching a product by slug
export const fetchProductBySlug = async (slug: string) => {
  const query = `
    *[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      description,
      price,
      sizes,
      "imageUrl": image.asset->url
    }
  `;
  const params = { slug };
  try {
    const product = await sanityfetch({ query, params });
    return product;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error fetching product by slug:', errorMessage);
    throw new Error('Failed to fetch product');
  }
};