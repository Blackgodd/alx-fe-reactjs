import React from 'react';
import useRecipeStore from '../recipeStore';

const RecipeSearch = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);  // Update the search term in the store
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for recipes..."
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default RecipeSearch;