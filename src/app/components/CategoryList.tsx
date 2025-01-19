const CategoryList = ({
    categories,
    onCategorySelect,
  }: {
    categories: string[];
    onCategorySelect: (category: string) => void;
  }) => {
    return (
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    );
  };
  
  export default CategoryList;
  