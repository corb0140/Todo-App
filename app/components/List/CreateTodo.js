"use client";

import { addTodo } from "@/app/redux/slices/todoSlice";
import { useDispatch } from "react-redux";
import { useRef } from "react";

const CreateTodo = ({ toggleTheme }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const addTodoHandler = (ev) => {
    ev.preventDefault();
    const todo = {
      id: Math.floor(Math.random() * 100000),
      text: inputRef.current.value,
      completed: false,
    };

    dispatch(addTodo(todo));
    ev.target.reset();
  };

  return (
    <div
      className={`h-[4.8rem] w-full ${
        toggleTheme ? "bg-darkMode-veryDarkDesaturatedBlue" : "bg-white"
      } rounded-lg flex items-center px-5 gap-x-5`}
    >
      <div className="h-8 w-8 rounded-full border border-lightMode-lightGrayishBlue"></div>

      <form onSubmit={addTodoHandler} className="w-2/3">
        <input
          ref={inputRef}
          type="text"
          placeholder="Create a new todo..."
          className="text-lg lg:text-[16px] outline-none w-full text-lightMode-darkGrayishBlue bg-transparent"
        />
      </form>
    </div>
  );
};

export default CreateTodo;
