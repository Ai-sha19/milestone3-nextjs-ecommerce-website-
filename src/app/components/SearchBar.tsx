const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
    return (
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 rounded w-full"
        onChange={(e) => onSearch(e.target.value)}
      />
    );
  };
  
  export default SearchBar;
  