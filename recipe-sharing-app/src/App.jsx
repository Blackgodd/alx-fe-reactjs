import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeSearch from './components/RecipeSearch';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import FavoriteRecipes from './components/FavoriteRecipes';
import Recommendations from './components/Recommendations';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Manager</h1>
        <RecipeSearch /> {/* Search Component */}
        <Routes>
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <RecipeList /> {/* Recipe List */}
            </>
          } />
          <Route path="/favorites" element={<FavoriteRecipes />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;