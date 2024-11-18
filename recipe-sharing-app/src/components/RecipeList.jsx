import React from 'react';
import useRecipeStore from './store/useRecipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes available.</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <strong>{recipe.name}</strong>: {recipe.ingredients.join(', ')}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
