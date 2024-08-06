/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-background-image": "url('/bg-mobile-light.jpg')",
      },
      colors: {
        lightMode: {
          veryLightGray: `hsl(0,0%,98%)`,
          veryLightGrayishBlue: `hsl(236, 33%, 92%)`,
          lightGrayishBlue: `hsl(233, 11%, 84%)`,
          darkGrayishBlue: `hsl(236, 9%, 61%)`,
          veryDarkGrayishBlue: `hsl(235, 19%, 35%)`,
        },
        darkMode: {
          veryDarkBlue: `hsl(235, 21%, 11%)`,
          veryDarkDesaturatedBlue: `hsl(235, 24%, 19%)`,
          lightGrayishBlue: `hsl(234, 39%, 85%)`,
          lightGrayishBlueHover: `hsl(236, 33%, 92%)`,
          darkGrayishBlue: `hsl(234, 11%, 52%)`,
          veryDarkGrayishBlue: `hsl(233, 14%, 35%)`,
          veryDarkGrayishBlueHover: `hsl(237, 14%, 26%)`,
        },
      },
      screens: {
        xs: "375px",
        sm: "440px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        Josefin: ["Josefin Sans", "sans-serif"],
      },
      fontSize: {
        bodySize: "18px",
      },
    },
  },
  plugins: [],
};
