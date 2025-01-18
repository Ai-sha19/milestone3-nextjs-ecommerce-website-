// sanityClient.ts
import { createClient } from '@sanity/client';
import dotenv from "dotenv"

dotenv.config()
export const client = createClient({
  projectId: "9b2rdswq", // Replace with your project ID
  dataset: 'production',        // Or your dataset name
  apiVersion: '2024-01-04',     // Today's date or latest API version
  useCdn: false,                // Disable CDN for real-time updates
  token:"skkugNd6kQsaER3jVmTcdWuzv5Xk5PodogqjsIPIr2bnwxIfPovPORxDJuYaoshyzAe61PYHVGa85rDs206QN41OCrhljtaJHwy2rY6AQPetFEH9jgBJimlucIjT7FFYCUAhWMxB6wN9fiOHAAtdvOWNUhnekwiGkVbbncWYR7jkbrNb0r12",
});