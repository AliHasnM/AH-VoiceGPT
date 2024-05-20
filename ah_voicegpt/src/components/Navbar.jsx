import React from "react";
import LogoLight from "../assets/ah_logo_white.png";
import LogoDark from "../assets/ah_logo_dark.png";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-zinc-800 bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 shadow-lg flex justify-between items-center">
      <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        <img
          className="w-20 cursor-pointer"
          src={darkMode ? LogoLight : LogoDark}
          alt="logo"
        />
      </div>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 bg-zinc-700 text-white rounded-lg focus:outline-none hover:bg-zinc-500 transition duration-300"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};
export default Navbar;
