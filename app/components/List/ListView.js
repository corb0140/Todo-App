"use client";

import Link from "next/link";
import { useState } from "react";

export default function ListView() {
  const [activeLink, setActiveLink] = useState(0);

  const handleActiveLink = (index) => {
    setActiveLink(index);
  };

  return (
    <div className="h-[4.8rem] w-full bg-white rounded-lg px-5">
      <ul className="h-full w-full flex items-center justify-center gap-x-7">
        <li className="text-xl font-semibold">
          <Link
            href="#"
            className={activeLink === 0 ? "" : "text-lightMode-darkGrayishBlue"}
            onClick={() => handleActiveLink(0)}
          >
            All
          </Link>
        </li>
        <li className="text-xl font-semibold">
          <Link
            href="#"
            className={activeLink === 1 ? "" : "text-lightMode-darkGrayishBlue"}
            onClick={() => handleActiveLink(1)}
          >
            Active
          </Link>
        </li>
        <li className="text-xl font-semibold">
          <Link
            href="#"
            className={activeLink === 2 ? "" : "text-lightMode-darkGrayishBlue"}
            onClick={() => handleActiveLink(2)}
          >
            Completed
          </Link>
        </li>
      </ul>
    </div>
  );
}
