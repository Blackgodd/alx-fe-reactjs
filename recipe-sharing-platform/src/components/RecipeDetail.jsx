import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams(); // Extract the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the mock data from data.json
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const recipeDetail = data.find((item) => item.id === parseInt(id, 10));
        setRecipe(recipeDetail);
      })
      .catch((error) => console.error("Error loading recipe details:", error));
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="rounded-lg w-full h-64 object-cover mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
        <p className="text-gray-600 mb-6">{recipe.summary}</p>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-600 space-y-2">
          {recipe.instructions?.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
