import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/createSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
