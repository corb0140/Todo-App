import React from "react";
import { useSelector } from "react-redux";

export default function List({ toggleTheme }) {
  const { todoList } = useSelector((state) => state.todo);

  return <div className="h-auto w-full bg-white rounded-lg"></div>;
}
