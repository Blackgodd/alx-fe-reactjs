import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipe data from the mock JSON file
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Recipe Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {recipe.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{recipe.summary}</p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-500 hover:text-blue-700 underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
