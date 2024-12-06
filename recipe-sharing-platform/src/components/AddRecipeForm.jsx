import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation: Ensure all fields are filled and ingredients have at least 2 items
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    const ingredientList = ingredients.split(",").map((item) => item.trim());
    if (ingredientList.length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }

    setError("");
    const newRecipe = {
      title,
      ingredients: ingredientList,
      steps,
    };

    console.log("Recipe Submitted:", newRecipe);
    alert("Recipe added successfully!");
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Add a New Recipe
        </h1>
        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
            {error}
          </div>
        )}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-semibold mb-2"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-gray-700 font-semibold mb-2"
          >
            Ingredients (comma-separated)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="steps"
            className="block text-gray-700 font-semibold mb-2"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="6"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
