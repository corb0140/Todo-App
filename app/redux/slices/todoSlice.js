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

    updateTodo: (state, action) => {
      const { id } = action.payload;

      const todo = state.todoList.find((todo) => todo.id === id);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    removeTodo: (state, action) => {
      const id = action.payload;

      state.todoList = state.todoList.filter((todo) => todo.id !== id);
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
