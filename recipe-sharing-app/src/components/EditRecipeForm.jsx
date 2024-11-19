import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const navigate = useNavigate(); // Navigate programmatically after form submission
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  // Initialize form state with recipe data
  const [formState, setFormState] = useState({
    name: recipe?.name || '',
    description: recipe?.description || '',
    ingredients: recipe?.ingredients.join(', ') || '',
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (!recipe) return;

    updateRecipe(parseInt(id), {
      ...formState,
      ingredients: formState.ingredients.split(',').map((item) => item.trim()),
    });

    navigate(`/recipes/${id}`); // Redirect to the recipe details page
  };

  // Handle case where the recipe does not exist
  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={formState.description}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Ingredients (comma-separated):
        <input
          type="text"
          name="ingredients"
          value={formState.ingredients}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
