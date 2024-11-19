import React from 'react';
import useRecipeStore from '../recipeStore';

const RecommendationsList = () => {
  const getRecommendations = useRecipeStore((state) => state.getRecommendations.map(id =>
    state.recipes.find(recipe => recipe.id === id)
  ));

  const recommendedRecipes = getRecommendations();

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendedRecipes.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        recommendedRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
