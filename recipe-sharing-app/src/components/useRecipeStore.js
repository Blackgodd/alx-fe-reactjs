import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  initializeRecipes: (initialRecipes) => {
    set({ recipes: initialRecipes });
  },
  addRecipe: (recipe) => {
    set((state) => ({
      recipes: [...state.recipes, recipe],
    }));
  },
}));

export default useRecipeStore;
