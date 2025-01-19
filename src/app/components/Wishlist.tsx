const Wishlist = ({ wishlistItems }: { wishlistItems: any[] }) => {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
        {wishlistItems.map((item) => (
          <div key={item.id} className="mb-2">
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Wishlist;
  