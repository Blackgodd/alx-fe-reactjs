import React, { useState, useEffect } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch the mock data from the data.json file
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Recipe List
        </h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 p-4"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <h2 className="text-xl font-semibold mt-4 text-gray-700">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;