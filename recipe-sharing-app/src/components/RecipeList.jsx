import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../useRecipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
          {' | '}
          <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
