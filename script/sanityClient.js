"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
const client_1 = require("@sanity/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.client = (0, client_1.createClient)({
    projectId: "9b2rdswq", // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2024-01-04', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token:"skkugNd6kQsaER3jVmTcdWuzv5Xk5PodogqjsIPIr2bnwxIfPovPORxDJuYaoshyzAe61PYHVGa85rDs206QN41OCrhljtaJHwy2rY6AQPetFEH9jgBJimlucIjT7FFYCUAhWMxB6wN9fiOHAAtdvOWNUhnekwiGkVbbncWYR7jkbrNb0r12",
});