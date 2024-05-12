import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipesStatus",
  async () => {
    const { data } = await axios.get(
      `https://dummyjson.com/recipes?&limit=300&select=id,name,image,cookTimeMinutes,difficulty,cuisine,mealType,image'`,
    );
    return data;
  },
);

const initialState = {
  items: [],
  status: "loading", // loading | success | error
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });

    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });

    builder.addCase(fetchRecipes.rejected, (state) => {
      state.status = "error";
      state.items = [];
    });
  },
});

export const { setItems } = recipesSlice.actions;

export default recipesSlice.reducer;
