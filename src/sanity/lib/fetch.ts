import { createClient } from "next-sanity";

// Initialize the Sanity client
const client = createClient({
    projectId: "9b2rdswq", // Replace with your actual Project ID
    dataset: "production", // Replace with your dataset
    useCdn: true, // Enable/disable CDN based on your preference
    apiVersion: "2023-10-10", // Replace with your API version
});

// Define a stricter type for the params object
export async function sanityfetch({
    query,
    params = {},
}: {
    query: string;
    params?: Record<string, unknown>; // Use Record<string, unknown> instead of any
}) {
    return await client.fetch(query, params);
}
