import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Manager</h1>
        <Routes>
          {/* Home Page - Displays the list of recipes */}
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          } />

          {/* Recipe Details Page */}
          <Route path="/recipes/:id" element={<RecipeDetails />} />

          {/* Edit Recipe Page */}
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
