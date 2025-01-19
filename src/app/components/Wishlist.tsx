// import React from "react";

// // src/app/components/Wishlist.tsx
// interface WishlistItem {
//     id: string;
//     name: string;
//     price: number;
//   }
  
//   const Wishlist = () => {
//     const [wishlistItems, setWishlistItems] = React.useState<WishlistItem[]>([]);
  
//     React.useEffect(() => {
//       const savedItems = localStorage.getItem('wishlist');
//       if (savedItems) {
//         setWishlistItems(JSON.parse(savedItems));
//       }
//     }, []);
  
//     return (
//       <div>
//         <h2>Wishlist</h2>
//         {wishlistItems.length > 0 ? (
//           wishlistItems.map((item) => (
//             <div key={item.id}>
//               <h3>{item.name}</h3>
//               <p>Price: ${item.price}</p>
//             </div>
//           ))
//         ) : (
//           <p>Your wishlist is empty</p>
//         )}
//       </div>
//     );
//   };
  
//   export default Wishlist;
  