import React from "react";
import { NavLink } from "react-router-dom";

import logo from '../../../src/assets/logo/logot.png';

const Navbar = () => {

  //Active NavLink
  const linkClasses = ({ isActive }) =>
    isActive
      ? "flex items-center px-4 -mb-1 border-b-2 border-violet-600 text-black font-semibold"
      : "flex items-center px-4 -mb-1 border-b-2 border-transparent";

  return (
    <div className="navbar bg-base-100 bg-black bg-opacity-50 text-white shadow-sm fixed top-0 left-0 w-full z-50 text-xl font-bold">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
              <NavLink to="/item3" className={linkClasses}>
                Item 3
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          <img src={logo} className="w-[100px]" alt="" />
        </NavLink>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li>
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
          </li>
          <li>
           <NavLink to='about' className={linkClasses}>About</NavLink>
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
            <NavLink to="/Contact" className={linkClasses}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar End Dark Light Button */}
      <div className="navbar-end">
        <h2>Dark / Light</h2>
        <label className="toggle text-base-content">
  <input type="checkbox" />
  <svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="4"
      fill="none"
      stroke="currentColor"
    >
      <path d="M20 6 9 17l-5-5"></path>
    </g>
  </svg>
  <svg
    aria-label="disabled"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
</label>
      </div>
    </div>
  );
};

export default Navbar;
