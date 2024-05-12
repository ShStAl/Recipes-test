import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cuisine: "All",
  dishType: "Any",
  difficulty: "Any",
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCuisine: (state, action) => {
      state.cuisine = action.payload;
    },
    setDishType: (state, action) => {
      state.dishType = action.payload;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setDefault: (state) => {
      state.cuisine = "All";
      state.dishType = "Any";
      state.difficulty = "Any";
    },
    setRandom: (state, action) => {
      state.cuisine = action.payload.cuisinesRand;
      state.dishType = action.payload.dishTypesRand;
      state.difficulty = action.payload.difficultiesRand;
    },
  },
});

export const {
  setCuisine,
  setDishType,
  setDifficulty,
  setCurrentPage,
  setDefault,
  setRandom,
} = filterSlice.actions;

export default filterSlice.reducer;
