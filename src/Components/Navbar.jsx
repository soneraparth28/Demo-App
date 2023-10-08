import React, { useState } from "react";
import logo from '../assets/nerd-cloud.png'
import Button from "./Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between md:justify-center">
        <img
          className="text-white text-2xl font-semibold m-5 p-5"
          src={logo}
          alt="Logo"
        />

        <button
          className="md:hidden px-4 py-2 text-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <ul
          className={`${menuOpen ? "block" : "hidden"
            } md:flex bg-gray-800 px-5 py-2 space-x-6 border rounded-md`}
        >
          <li>
            <a
              href="#"
              className={`${window.location.pathname === "/" ? "text-green-400" : "text-white"
                } hover:text-green-400`}
            >
              Home
            </a>
          </li>
          <li><a href="#" className="text-white hover:text-green-400">About</a></li>
          <li><a href="#" className="text-white hover:text-green-400">Pricing</a></li>
          <li><a href="#" className="text-white hover:text-green-400">Blog</a></li>
          <li><a href="#" className="text-white hover:text-green-400">FAQ</a></li>
          <li><a href="#" className="text-white hover:text-green-400">Contact</a></li>
        </ul>

        <Button />
      </div>
    </>
  );
}
