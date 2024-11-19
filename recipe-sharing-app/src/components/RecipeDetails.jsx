import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from './useRecipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) => 
    state.recipes.find((r) => r.id === parseInt(id))
  );

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
      <p>Ingredients: {recipe.ingredients.join(', ')}</p>
    </div>
  );
};

export default RecipeDetails;
