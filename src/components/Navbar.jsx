import React, { useEffect, useState } from "react";
import logo from "/images/logo.svg";
import { IoSunnyOutline } from "react-icons/io5";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <nav className="flex justify-between items-center px-6 py-3 rounded-xl shadow bg-(--nav)">
      <div>
        <img src={logo} alt="Extension logo" />
      </div>
      <button className="shadow px-2 py-2 rounded-lg">
        <IoSunnyOutline onClick={handleMode} />
      </button>
    </nav>
  );
};

export default Navbar;
