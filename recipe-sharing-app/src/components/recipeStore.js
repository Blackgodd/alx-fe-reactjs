import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],  // All recipes
  searchTerm: '',  // Search term for filtering
  favorites: [],  // User's favorite recipes

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

  // Action to add a recipe to favorites
  addToFavorites: (recipeId) =>
    set((state) => {
      const recipe = state.recipes.find((r) => r.id === recipeId);
      if (recipe && !state.favorites.some((r) => r.id === recipeId)) {
        return { favorites: [...state.favorites, recipe] };
      }
      return state;
    }),

  // Action to remove a recipe from favorites
  removeFromFavorites: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((recipe) => recipe.id !== recipeId),
    })),

  // Get recommended recipes based on favorites
  getRecommendations: (state) => {
    // Example recommendation: Recipes with similar ingredients or category
    if (state.favorites.length === 0) return [];
    
    // Placeholder logic for recommendations: Find recipes that match the description
    const favoriteDescriptions = state.favorites.map((r) => r.description.toLowerCase());
    return state.recipes.filter((recipe) =>
      favoriteDescriptions.some((desc) => recipe.description.toLowerCase().includes(desc))
    );
  },
}));

export default useRecipeStore;