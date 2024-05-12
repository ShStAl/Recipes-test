import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../redux/filter/FilterSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});
