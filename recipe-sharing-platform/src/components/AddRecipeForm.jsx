import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required.";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientList = ingredients.split(",").map((item) => item.trim());
      if (ingredientList.length < 2) {
        newErrors.ingredients = "Include at least two ingredients.";
      }
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const newRecipe = {
        title,
        ingredients: ingredients.split(",").map((item) => item.trim()),
        steps,
      };

      console.log("Recipe Submitted:", newRecipe);
      alert("Recipe added successfully!");
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 max-w-full md:max-w-md w-full"
      >
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
          Add a New Recipe
        </h1>

        {Object.keys(errors).length > 0 && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
            <ul>
              {Object.entries(errors).map(([key, error]) => (
                <li key={key}>{error}</li>
              ))}
            </ul>
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
            className={`w-full p-2 sm:p-3 border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring-2 ${
              errors.title ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
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
            className={`w-full p-2 sm:p-3 border ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring-2 ${
              errors.ingredients ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
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
            className={`w-full p-2 sm:p-3 border ${
              errors.steps ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring-2 ${
              errors.steps ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
            rows="6"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 sm:py-3 rounded hover:bg-blue-600 transition duration-300"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
