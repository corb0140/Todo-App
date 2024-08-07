import React from "react";
import CreateTodo from "./CreateTodo";
import List from "./List";
import ListView from "./ListView";
import { changeViewState } from "@/app/redux/slices/todoSlice";

import { useSelector, useDispatch } from "react-redux";

export default function TodoList({ toggleTheme }) {
  const dispatch = useDispatch();
  const { todoList, viewState } = useSelector((state) => state.todo);

  const handleViewState = (view) => {
    dispatch(changeViewState(view));
  };

  const filteredTodos = todoList.filter((todo) => {
    if (viewState === "completed") return todo.completed;
    if (viewState === "active") return !todo.completed;
    return true;
  });

  return (
    <div className="px-6 h-auto w-full flex flex-col gap-y-5 relative bottom-[10rem]">
      <CreateTodo toggleTheme={toggleTheme} />

      <List todos={filteredTodos} toggleTheme={toggleTheme} />

      <ListView toggleTheme={toggleTheme} handleViewState={handleViewState} />
    </div>
  );
}
