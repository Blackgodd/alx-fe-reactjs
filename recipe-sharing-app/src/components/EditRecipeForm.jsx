import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './useRecipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) => 
    state.recipes.find((r) => r.id === parseInt(id))
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [formState, setFormState] = useState(recipe);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(parseInt(id), formState);
    navigate(`/recipes/${id}`);
  };

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" value={formState.name} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formState.description}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
