import { client } from './client';  // Corrected import path

export const sanityfetch = async ({
    query,
    params = {},
}: {
    query: string;
    params?: Record<string, unknown>;  // Using Record<string, unknown> instead of any
}) => {
    try {
        return await client.fetch(query, params);
    } catch (error) {
        console.error('Error fetching data from Sanity:', error);
        throw new Error('Failed to fetch data');
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
        console.error('Error fetching product by slug:', error);
        throw new Error('Failed to fetch product');
    }
};










// // src/sanity/lib/fetch.ts
// import { client } from './client';  // Corrected import path

// export const sanityfetch = async ({
//     query,
//     params = {},
// }: {
//     query: string;
//     params?: Record<string, unknown>;  // Using Record<string, unknown> instead of any
// }) => {
//     try {
//         return await client.fetch(query, params);
//     } catch (error) {
//         console.error('Error fetching data from Sanity:', error);
//         throw new Error('Failed to fetch data');
//     }

// };






// import { createClient } from "next-sanity";

// const client = createClient({
//     projectId:"qqrrdyfv",
//     dataset:"production",
//     useCdn:true,
//     apiVersion:"2023-10-10"
// })

// export async function sanityfetch({query, params = {}}:{query:string, params?:any} )
// {
//     return await client.fetch (query,params)
// }
