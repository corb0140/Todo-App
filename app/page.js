"use client";

import Header from "./components/Header/Header";
import TodoList from "./components/List/TodoList";
import { useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main
      className={`relative flex flex-col min-h-screen w-full ${
        isDarkMode
          ? "bg-darkMode-veryDarkBlue"
          : "bg-lightMode-veryLightGrayishBlue "
      }`}
    >
      <Header toggleTheme={isDarkMode} click={toggleTheme} />
      <TodoList toggleTheme={isDarkMode} />
      <p className="absolute bottom-20 left-[50%] -translate-x-[50%] text-[1.28rem] text-lightMode-darkGrayishBlue w-full">
        Drag and drop to reorder list
      </p>
    </main>
  );
}
