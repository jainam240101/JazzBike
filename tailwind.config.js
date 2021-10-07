/** @format */

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Comfortaa: ["Comfortaa"],
        sans: ["DM Sans"],
        OpenSans: ["Open Sans"],
        Montserrat: ["Montserrat"],
        Jura: ["Jura"],
      },
      colors: {
        blue: {
          800: "#011A31",
          900: "#02203C",
        },
        pink: {
          800: "#f44292",
        },
        purple: {
          800: "#626EE3",
          900: "#6c5ce7",
        },
        gray: {
          900: "#02203c",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
