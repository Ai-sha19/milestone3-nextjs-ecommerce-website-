"use strict";

import axios from "axios"; // Use ES Module syntax for axios
import { client } from "./sanityClient.js"; // Sanity client import
import slugify from "slugify"; // Import slugify

// Upload image to Sanity
async function uploadImageToSanity(imageUrl) {
    try {
        const response = await axios.get(imageUrl, { responseType: "arraybuffer", timeout: 10000 });
        const buffer = Buffer.from(response.data);
        const asset = await client.assets.upload("image", buffer, {
            filename: imageUrl.split("/").pop(),
        });
        console.log("✅ Image uploaded successfully:", asset);
        return asset._id;
    } catch (error) {
        console.error("❌ Failed to upload image:", imageUrl, error.message);
        return null;
    }
}

// Create or fetch category in Sanity
async function createCategory(category, counter) {
    try {
        const categorySlug = slugify(category.name || `default-category-${counter}`, { lower: true, strict: true });

        // Check if category already exists
        const categoryExist = await client.fetch(
            `*[_type == "category" && slug.current == $slug][0]`,
            { slug: categorySlug }
        );

        if (categoryExist) {
            return categoryExist._id; // Return existing category ID
        }

        // Create a new category
        const catObj = {
            _type: "category",
            _id: `category-${counter}`, // Unique category ID
            name: category.name || `Default Category ${counter}`,
            slug: {
                _type: "slug",
                current: categorySlug,
            },
        };

        const response = await client.createOrReplace(catObj);
        console.log("✅ Category created successfully:", response);
        return response._id; // Return the new category ID
    } catch (error) {
        console.error("❌ Failed to create category:", category.name, error.message);
        return null;
    }
}

// Import products into Sanity
async function importData() {
    try {
        const response = await axios.get("https://hackathon-apis.vercel.app/api/products");
        const products = response.data;
        let counter = 1;

        for (const product of products) {
            let imageRef = null;
            let catRef = null;

            // Upload product image
            if (product.image) {
                imageRef = await uploadImageToSanity(product.image);
            }

            // Create or fetch category reference
            if (product.category?.name) {
                catRef = await createCategory(product.category, counter);
            }

            // Define the product object
            const sanityProduct = {
                _id: `product-${counter}`, // Unique product ID
                _type: "product",
                name: product.name || `Default Product ${counter}`,
                slug: {
                    _type: "slug",
                    current: slugify(product.name || `default-product-${counter}`, {
                        lower: true,
                        strict: true,
                    }),
                },
                price: product.price || 0,
                category: catRef
                    ? {
                          _type: "reference",
                          _ref: catRef,
                      }
                    : undefined,
                tags: product.tags || [],
                quantity: 50, // Default quantity
                image: imageRef
                    ? {
                          _type: "image",
                          asset: {
                              _type: "reference",
                              _ref: imageRef,
                          },
                      }
                    : undefined,
                description:
                    product.description ||
                    "A timeless design, with premium materials features as one of our most popular and iconic pieces.",
                features: product.features || ["Premium material", "Handmade upholstery", "Quality timeless classic"],
                dimensions: product.dimensions || {
                    _type: "dimensions",
                    height: "110cm",
                    width: "75cm",
                    depth: "50cm",
                },
            };

            // Increment counter
            counter++;

            // Log and upload product
            console.log("🚀 Uploading product:", sanityProduct.name);
            await client.createOrReplace(sanityProduct);
            console.log(`✅ Imported product: ${sanityProduct.name}`);
        }

        console.log("🎉 All products imported successfully!");
    } catch (error) {
        console.error("❌ Error importing data:", error.message);
    }
}

// Start data import
importData();
