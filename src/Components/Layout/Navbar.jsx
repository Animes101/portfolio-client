import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../src/assets/logo/logot.png";

const Navbar = () => {
  // 🌙 Theme state (light / dark)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const checkboxRef = useRef(null);

  // 🌓 Theme toggle handler
  const handleChange = () => {
    const toggle = checkboxRef.current.checked;
    setTheme(toggle ? "dark" : "light");
  };

  // 🧠 Apply theme using Tailwind's 'dark' class
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  // 🎯 Active NavLink styling
  const linkClasses = ({ isActive }) =>
    isActive
      ? "flex items-center px-4 -mb-1 border-b-2 text-buttonBankground border-borderColor font-semibold transition-colors duration-300"
      : "flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-borderColor transition-colors duration-300";

  return (
    <div className="transition-colors duration-300  text-textColor dark:text-textColor border-b-2 border-b-borderColor bg-backgroundBg dark:bg-backgroundDark bg-opacity-90 shadow-sm fixed top-0 left-0 w-full">
      <div className="navbar container mx-auto bg-backgroundDark w-[90%] dark:bg-backgroundDark z-50 text-xl font-bold px-10 rounded-br-[100px] border-r-2 border-borderColor">
        {/* =====================================================
          🌐 NAVBAR START SECTION
      ====================================================== */}
        <div className="navbar-start">
          {/* 📱 Mobile Dropdown Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {/* ☰ Mobile Menu Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 dark:text-textColor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* 📋 Mobile Dropdown Items */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-textColor dark:text-textColor bg-backgroundBg dark:bg-backgroundDark rounded-box mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/" className={linkClasses}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={linkClasses}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/skill" className={linkClasses}>
                  Skill
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={linkClasses}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={linkClasses}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* 🖼️ Logo Section */}
          <NavLink to="/" className="bg-backgroundDark dark:bg-backgroundDark text-xl">
            <img
              src={logo}
              className=" w-[30px] md:w-[50px] rounded-full bg-backgroundBg shadow-md shadow-borderColor"
              alt="logo"
            />
          </NavLink>
        </div>

        {/* =====================================================
          💻 NAVBAR CENTER (Desktop Menu)
      ====================================================== */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl dark:text-textColor">
            <li>
              <NavLink to="/" className={linkClasses}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkClasses}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/skill" className={linkClasses}>
                Skill
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={linkClasses}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkClasses}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

         {/* =====================================================
          🌗 NAVBAR END (Theme Toggle)
      ====================================================== */}
        <div className="navbar-end">
          {/* 🌓 Dark / Light Toggle Switch */}
          <label className="swap swap-rotate">
            {/* 🔘 Hidden Checkbox */}
            <input
              type="checkbox"
              ref={checkboxRef}
              onChange={handleChange}
              checked={theme === "dark"}
            />

            {/* ☀️ Sun Icon */}
            <svg
              className="swap-off fill-current w-8 h-8 text-textColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64 17.657L4.22 19.07l1.414 1.415 1.414-1.414zM12 18a6 6 0 100-12 6 6 0 000 12zM1 13h2v-2H1zm10-10h2V1h-2zm10 10h2v-2h-2zm-4.22-7.657L19.07 4.22l-1.414-1.414-1.415 1.414zM17.657 18.364l1.414-1.414-1.414-1.415-1.414 1.415zM12 23h2v-2h-2z" />
            </svg>

            {/* 🌙 Moon Icon */}
            <svg
              className="swap-on fill-current w-8 h-8 text-textColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </label>
        </div>

        
      </div>
     
    </div>
  );
};

export default Navbar;
