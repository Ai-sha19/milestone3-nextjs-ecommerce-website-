// src/sanity/lib/fetch.ts
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
