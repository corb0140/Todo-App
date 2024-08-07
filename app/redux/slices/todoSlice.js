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

    changeViewState: (state, action) => {
      state.viewState = action.payload;
    },

    reorderTodos: (state, action) => {
      state.todoList = action.payload;
    },

    removeTodo: (state, action) => {
      const id = action.payload;

      state.todoList = state.todoList.filter((todo) => todo.id !== id);
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateTodo,
  changeViewState,
  reorderTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
