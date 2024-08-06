import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const item = action.payload;

      state.todoList.push(item);
    },

    removeTodo: (state, action) => {
      const id = action.payload;

      state.todoList = state.todoList.filter((todo) => todo.id !== id);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
