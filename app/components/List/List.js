import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "@/app/redux/slices/todoSlice";
import check from "@/public/images/icon-check.svg";
import cross from "@/public/images/icon-cross.svg";
import { useState } from "react";

export default function List({ toggleTheme }) {
  const [completed, setCompleted] = useState(false);
  const { todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const toggleCompleted = (id) => {
    todoList.map((todo) => {
      if (todo.id === id) {
        setCompleted(!completed);
        console.log(todo);
      }
    });
  };

  const removeTodoHandler = (id) => {
    todoList.map((todo) => {
      if (todo.id === id) {
        dispatch(removeTodo(todo.id));
      }
    });
  };

  return (
    <div className="h-auto w-full rounded-lg flex flex-col shadow-lg">
      {todoList.map((todo) => (
        <div
          key={todo.id}
          className={`relative h-[4.8rem] w-full flex items-center px-5 gap-x-5 ${
            toggleTheme ? "bg-darkMode-veryDarkDesaturatedBlue" : "bg-white"
          } border-${
            toggleTheme ? "darkMode" : "lightMode"
          }-darkGrayishBlue border-b`}
        >
          <div
            className={`h-8 w-8 rounded-full border border-${
              toggleTheme ? "darkMode" : "lightMode"
            }-lightGrayishBlue ${
              completed ? "bg-gradient-to-br from-lightBlue to-purple" : ""
            } flex items-center justify-center`}
            onClick={() => {
              toggleCompleted(todo.id);
            }}
          >
            {completed && (
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
            }`}
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
    </div>
  );
}
