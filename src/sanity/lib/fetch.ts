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
