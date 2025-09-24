import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../src/assets/logo/logot.png";

const Navbar = () => {
  // Theme state (light/dark)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const checkboxRef = useRef(null);

  // Toggle theme
  const handleChange = () => {
    const toggle = checkboxRef.current.checked;
    setTheme(toggle ? "dark" : "light");
  };

  // Apply theme to <html> & save to localStorage
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Active NavLink style
  const linkClasses = ({ isActive }) =>
    isActive
      ? "flex items-center px-4 -mb-1 border-b-2 border-primary font-semibold text-primary"
      : "flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-primary hover:text-primary transition-colors duration-300";

  return (
    <div className="navbar border-b-2 bg-base-100 dark:bg-base-200 bg-opacity-90 shadow-sm fixed top-0 left-0 w-full z-50 text-xl font-bold px-10 transition-colors duration-300">
      
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 dark:bg-base-200 rounded-box mt-3 w-52 p-2 shadow"
          >
            <li><NavLink to="/" className={linkClasses}>Home</NavLink></li>
            <li><NavLink to="/about" className={linkClasses}>About</NavLink></li>
            <li><NavLink to="/skill" className={linkClasses}>Skill</NavLink></li>
            <li><NavLink to="/services" className={linkClasses}>Services</NavLink></li>
            <li><NavLink to="/contact" className={linkClasses}>Contact</NavLink></li>
          </ul>
        </div>

        {/* Logo */}
        <NavLink to="/" className="btn btn-ghost text-xl">
          <img src={logo} className="w-[50px] rounded-full bg-white" alt="logo" />
        </NavLink>
      </div>

      {/* Navbar Center (desktop menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li><NavLink to="/" className={linkClasses}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClasses}>About</NavLink></li>
          <li><NavLink to="/skill" className={linkClasses}>Skill</NavLink></li>
          <li><NavLink to="/services" className={linkClasses}>Services</NavLink></li>
          <li><NavLink to="/contact" className={linkClasses}>Contact</NavLink></li>
        </ul>
      </div>

      {/* Navbar End (Dark/Light toggle) */}
      <div className="navbar-end flex items-center gap-2">
        <label className="swap swap-rotate">
          {/* hidden checkbox */}
          <input type="checkbox" ref={checkboxRef} onChange={handleChange} checked={theme === "dark"} />
          
          {/* Sun icon (light mode) */}
          <svg
            className="swap-off fill-current w-8 h-8 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64 17.657L4.22 19.07l1.414 1.415 1.414-1.414zM12 18a6 6 0 100-12 6 6 0 000 12zM1 13h2v-2H1zm10-10h2V1h-2zm10 10h2v-2h-2zm-4.22-7.657L19.07 4.22l-1.414-1.414-1.415 1.414zM17.657 18.364l1.414-1.414-1.414-1.415-1.414 1.415zM12 23h2v-2h-2z" />
          </svg>

          {/* Moon icon (dark mode) */}
          <svg
            className="swap-on fill-current w-8 h-8 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
