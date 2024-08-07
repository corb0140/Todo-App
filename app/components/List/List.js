"use client";

import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "@/app/redux/slices/todoSlice";
import check from "@/public/images/icon-check.svg";
import cross from "@/public/images/icon-cross.svg";

export default function List({ todos, toggleTheme }) {
  const { todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const toggleCompleted = (id) => {
    const item = todoList.find((todo) => todo.id === id);

    if (item) {
      dispatch(updateTodo({ id: item.id }));
    }
  };

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const clearCompleted = () => {
    const completedTodos = todoList.filter((todo) => todo.completed);

    completedTodos.forEach((todo) => {
      dispatch(removeTodo(todo.id));
    });
  };

  return (
    <div className="h-auto w-full rounded-lg flex flex-col shadow-lg">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`relative h-[4.8rem] w-full flex items-center px-5 gap-x-5 ${
            toggleTheme ? "bg-darkMode-veryDarkDesaturatedBlue" : "bg-white"
          } border-${
            toggleTheme ? "darkMode" : "lightMode"
          }-darkGrayishBlue [&:not(:last-child)]:border-b first:rounded-t-lg last:rounded-b-lg`}
        >
          <div
            className={`h-8 w-8 rounded-full border-${
              toggleTheme ? "darkMode" : "lightMode"
            }-lightGrayishBlue ${
              todo.completed
                ? "bg-gradient-to-br from-lightBlue to-purple"
                : "border"
            } flex items-center justify-center`}
            onClick={() => {
              toggleCompleted(todo.id);
            }}
          >
            {todo.completed && (
              <Image
                src={check}
                alt="check mark to show task is completed"
                className="h-2 w-2 "
              />
            )}
          </div>

          <p
            className={`text-lg ${
              toggleTheme ? "text-white" : "text-lightMode-darkGrayishBlue"
            }
            ${todo.completed ? "line-through" : ""}
            `}
          >
            {todo.text}
          </p>

          <Image
            src={cross}
            alt="cross"
            className="absolute z-10 right-10 hover:cursor-pointer"
            onClick={() => {
              removeTodoHandler(todo.id);
            }}
          />
        </div>
      ))}

      {todoList.length > 0 && (
        <div
          className={`h-[4.8rem] w-full flex justify-between items-center px-5 gap-x-5 ${
            toggleTheme ? "bg-darkMode-veryDarkDesaturatedBlue" : "bg-white"
          } border-${
            toggleTheme ? "darkMode" : "lightMode"
          }-darkGrayishBlue [&:not(:last-child)]:border-b first:rounded-t-lg last:rounded-b-lg`}
        >
          <p
            className={`text-lg ${
              toggleTheme ? "text-white" : "text-lightMode-darkGrayishBlue"
            }`}
          >
            {todoList.length} items left
          </p>

          <p
            className={`text-lg ${
              toggleTheme ? "text-white" : "text-lightMode-darkGrayishBlue"
            } hover:cursor-pointer`}
            onClick={clearCompleted}
          >
            Clear Completed
          </p>
        </div>
      )}
    </div>
  );
}
