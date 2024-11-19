import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],  // Array to hold all recipes
  searchTerm: '',  // To store the search term

  // Action to add a new recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { id: Date.now(), ...recipe }],
    })),

  // Action to update a recipe
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  // Action to delete a recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Action to set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Computed filtered recipes based on the search term
  filteredRecipes: (state) => {
    const { searchTerm, recipes } = state;
    return recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
}));

export default useRecipeStore;
