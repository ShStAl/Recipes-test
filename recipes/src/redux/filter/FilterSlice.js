import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: "All",
  dishType: "Any",
  difficulty: 0,
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
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
      state.country = "All";
      state.dishType = "Any";
      state.difficulty = 0;
    },
  },
});

export const {
  setCountry,
  setDishType,
  setDifficulty,
  setCurrentPage,
  setDefault,
} = filterSlice.actions;

export default filterSlice.reducer;
