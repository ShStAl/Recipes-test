import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleRecipe = createAsyncThunk(
  "singleRecipe/fetchSingleRecipe",
  async (id) => {
    const { data } = await axios.get(`https://dummyjson.com/recipes/${id}`);
    return data;
  },
);

const initialState = {
  recipe: {},
  status: "loading", // loading | success | error
};

const singleRecipeSlice = createSlice({
  name: "singleRecipe",
  initialState,
  reducers: {
    setRecipe(state, action) {
      state.recipe = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSingleRecipe.pending, (state) => {
      state.status = "loading";
      state.recipe = {};
    });

    builder.addCase(fetchSingleRecipe.fulfilled, (state, action) => {
      state.recipe = action.payload;
      state.status = "success";
    });

    builder.addCase(fetchSingleRecipe.rejected, (state) => {
      state.status = "error";
      state.items = {};
    });
  },
});

export const { setRecipe } = singleRecipeSlice.actions;

export default singleRecipeSlice.reducer;
