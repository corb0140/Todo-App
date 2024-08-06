"use client";

import Image from "next/image";
import mobileBg from "@/public/images/bg-mobile-light.jpg";
import moon from "@/public/images/icon-moon.svg";
import sun from "@/public/images/icon-sun.svg";

import { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="h-[22rem] w-full relative">
      <div className="absolute w-full px-6 top-[5rem] flex justify-between">
        <h1 className="tracking-[0.4em] text-white text-5xl font-bold">TODO</h1>

        <Image
          src={isDarkMode ? moon : sun}
          alt="moon"
          className="h-9 w-9 hover:cursor-pointer"
          onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}
        />
      </div>
      <Image src={mobileBg} alt="alt" className="h-full w-full" />
    </div>
  );
};

export default Header;
