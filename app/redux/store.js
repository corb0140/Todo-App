import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./slices/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoSliceReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
