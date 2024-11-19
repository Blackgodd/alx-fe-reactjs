import React from 'react';
import useRecipeStore from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const addToFavorites = useRecipeStore((state) => state.addToFavorites);
  const removeFromFavorites = useRecipeStore((state) => state.removeFromFavorites);
  const favorites = useRecipeStore((state) => state.favorites);

  const isFavorite = (id) => favorites.some((recipe) => recipe.id === id);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <button
              onClick={() =>
                isFavorite(recipe.id)
                  ? removeFromFavorites(recipe.id)
                  : addToFavorites(recipe.id)
              }
            >
              {isFavorite(recipe.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
