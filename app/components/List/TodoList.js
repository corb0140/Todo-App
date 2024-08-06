import React from "react";
import CreateTodo from "./CreateTodo";
import List from "./List";
import ListView from "./ListView";

export default function TodoList({ toggleTheme }) {
  return (
    <div className="px-6 h-auto w-full flex flex-col gap-y-5 relative bottom-[10rem]">
      <CreateTodo toggleTheme={toggleTheme} />
      <List toggleTheme={toggleTheme} />
      <ListView toggleTheme={toggleTheme} />
    </div>
  );
}
