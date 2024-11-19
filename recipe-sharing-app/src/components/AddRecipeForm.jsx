import React, { useState } from 'react';
import useRecipeStore from './RecipeStore';

const AddRecipeForm = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !ingredients) return;

    const newRecipe = {
      id: Date.now(), // Unique ID for the recipe
      name,
      ingredients: ingredients.split(',').map((item) => item.trim()),
    };

    addRecipe(newRecipe);
    setName('');
    setIngredients('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Recipe</h2>
      <div>
        <label>Recipe Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Ingredients (comma-separated):</label>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
