import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const RecipeDetails = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );

  if (!recipe) {
    // Handle case where the recipe doesn't exist
    return <p>Recipe not found. <Link to="/">Go back to recipes</Link></p>;
  }

  return (
    <div>
      <h2>Curry Powder{recipe.name}</h2>
      <p>Made of mix of natural spices. Hibiscus leaves, cloves, salt, cinamon etc.{recipe.description}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
      <Link to={`/recipes/${recipe.id}/edit`}>Edit Recipe</Link>
    </div>
  );
};

export default RecipeDetails;
