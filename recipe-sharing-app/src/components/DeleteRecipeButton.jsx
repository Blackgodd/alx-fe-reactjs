import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe); // Access delete action
  const navigate = useNavigate(); // For navigating after deletion

  const handleDelete = () => {
    deleteRecipe(id); // Remove the recipe from the store
    navigate('/'); // Redirect to the home page or recipe list
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
