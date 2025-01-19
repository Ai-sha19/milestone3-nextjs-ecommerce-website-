// // src/app/products/page.tsx

// import Image from 'next/image';
// import Link from 'next/link';

// const products = [
//   { id: 1, name: 'The Dendy Chair', price: '$250', image: '/product-images/product1.png' },
//   { id: 2, name: 'Rustic VaseSet', price: '$155', image: '/product-images/product2.png' },
//   { id: 3, name: 'The Silky Vase', price: '$125', image: '/product-images/product3.png' },
//   { id: 4, name: 'The Lucky Lamp', price: '$399', image: '/product-images/product4.png' },
//   { id: 5, name: 'The modern golden hanging lamps.', price: '$250', image: '/product-images/product5.png' },
//   { id: 6, name: 'White Vase', price: '$155', image: '/product-images/product6.png' },
//   { id: 7, name: 'Round Stool', price: '$125', image: '/product-images/product7.png' },
//   { id: 8, name: 'Comfortable chair.', price: '$399', image: '/product-images/product8.png' },
// ];

// const ProductList = () => (
//   <div style={{
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
//     gap: '20px',
//     padding: '20px',
//     margin: '0 auto',
//     maxWidth: '1200px',
//   }}>
//     {products.map((product) => (
//       <div key={product.id} style={{ textAlign: 'center' }}>
//         <Image src={product.image} alt={product.name} width={200} height={200} style={{ width: '100%', borderRadius: '8px' }} />
//         <h3>{product.name}</h3>
//         <p>{product.price}</p>
//         <Link
//           href={`/products/${product.id}`}
//           className="bg-[#2a254b] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#3b3365] transition-all duration-300 inline-block text-center"
//         >
//           View Details
//         </Link>

//       </div>
//     ))}
//   </div>
// );

// export default ProductList;













// src/app/products/page.tsx

import Image from 'next/image';
import Link from 'next/link';

// Define the Product type to avoid any errors and ensure type safety
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'The Dendy Chair', price: '$250', image: '/product-images/product1.png' },
  { id: 2, name: 'Rustic VaseSet', price: '$155', image: '/product-images/product2.png' },
  { id: 3, name: 'The Silky Vase', price: '$125', image: '/product-images/product3.png' },
  { id: 4, name: 'The Lucky Lamp', price: '$399', image: '/product-images/product4.png' },
  { id: 5, name: 'The modern golden hanging lamps.', price: '$250', image: '/product-images/product5.png' },
  { id: 6, name: 'White Vase', price: '$155', image: '/product-images/product6.png' },
  { id: 7, name: 'Round Stool', price: '$125', image: '/product-images/product7.png' },
  { id: 8, name: 'Comfortable chair.', price: '$399', image: '/product-images/product8.png' },
];

const ProductList = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
      padding: '20px',
      margin: '0 auto',
      maxWidth: '1200px',
    }}
  >
    {products.map((product) => (
      <div key={product.id} style={{ textAlign: 'center' }}>
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          style={{ width: '100%', borderRadius: '8px' }}
        />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <Link
          href={`/products/${product.id}`}
          className="bg-[#2a254b] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#3b3365] transition-all duration-300 inline-block text-center"
        >
          View Details
        </Link>
      </div>
    ))}
  </div>
);

export default ProductList;

