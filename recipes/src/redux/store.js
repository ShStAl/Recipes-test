import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filter/FilterSlice";
import recipeReducer from "./recipes/RecipesSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    recipes: recipeReducer,
  },
});
