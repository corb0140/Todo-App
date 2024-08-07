"use client";

import Link from "next/link";
import { useState } from "react";

export default function ViewStateUi({ handleViewState, toggleTheme }) {
  const [activeLink, setActiveLink] = useState(0);

  const handleActiveLink = (index) => {
    setActiveLink(index);
  };

  return (
    <ul className="h-full w-full flex items-center justify-center gap-x-7">
      <li className="text-xl font-semibold">
        <Link
          href="#"
          className={`${
            activeLink === 0 ? "text-primary" : "text-lightMode-darkGrayishBlue"
          } ${
            toggleTheme
              ? "hover:text-white text-lightMode-darkGrayishBlue"
              : "text-lightMode-darkGrayishBlue hover:text-darkMode-veryDarkBlue"
          } transition duration-300`}
          onClick={() => {
            handleActiveLink(0);
            handleViewState("all");
          }}
        >
          All
        </Link>
      </li>
      <li className="text-xl font-semibold">
        <Link
          href="#"
          className={`${
            activeLink === 1 ? "text-primary" : "text-lightMode-darkGrayishBlue"
          } ${
            toggleTheme
              ? "hover:text-white text-lightMode-darkGrayishBlue"
              : "text-lightMode-darkGrayishBlue hover:text-darkMode-veryDarkBlue"
          } transition duration-300`}
          onClick={() => {
            handleActiveLink(1);
            handleViewState("active");
          }}
        >
          Active
        </Link>
      </li>
      <li className="text-xl font-semibold">
        <Link
          href="#"
          className={`${
            activeLink === 2 ? "text-primary" : "text-lightMode-darkGrayishBlue"
          } ${
            toggleTheme
              ? "hover:text-white text-lightMode-darkGrayishBlue"
              : "text-lightMode-darkGrayishBlue hover:text-darkMode-veryDarkBlue"
          } transition duration-300`}
          onClick={() => {
            handleActiveLink(2);
            handleViewState("completed");
          }}
        >
          Completed
        </Link>
      </li>
    </ul>
  );
}
