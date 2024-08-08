"use client";

import Image from "next/image";
import mobileBgLight from "@/public/images/bg-mobile-light.jpg";
import mobileBgDark from "@/public/images/bg-mobile-dark.jpg";
import desktopBgLight from "@/public/images/bg-desktop-light.jpg";
import desktopBgDark from "@/public/images/bg-desktop-dark.jpg";
import moon from "@/public/images/icon-moon.svg";
import sun from "@/public/images/icon-sun.svg";

const Header = ({ toggleTheme, click }) => {
  return (
    <div className="h-[22rem] lg:h-[25rem] w-full relative">
      <div className="absolute w-full px-6 lg:px-[35rem] top-[5rem] flex justify-between">
        <h1 className="tracking-[0.4em] text-white text-5xl font-bold">TODO</h1>

        <Image
          src={toggleTheme ? sun : moon}
          alt="moon"
          className="h-9 w-9 hover:cursor-pointer"
          onClick={click}
        />
      </div>
      <Image
        src={toggleTheme ? mobileBgDark : mobileBgLight}
        alt="alt"
        className="h-full w-full lg:hidden"
      />
      <Image
        src={toggleTheme ? desktopBgDark : desktopBgLight}
        alt="alt"
        className="h-full w-full hidden lg:block"
      />
    </div>
  );
};

export default Header;
