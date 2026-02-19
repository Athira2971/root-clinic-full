import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-pink-400 border-b-2 border-pink-400 pb-1 transition"
    : "hover:text-pink-300 transition duration-300";
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-16 py-6">
      <div className="max-w-7xl mx-auto relative">

        {/* Main Navbar */}
        <div className="flex justify-between items-center bg-white/10 backdrop-blur-md rounded-full px-8 py-3 border border-white/20 shadow-lg">

          {/* Logo */}
          <NavLink to="/" end>
            <img
              src={logo}
              alt="logo"
              className="w-20 md:w-28 h-auto"
            />
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 text-white font-semibold">
            <li>
              <NavLink to="/" end className={navLinkStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/ReadMore" className={navLinkStyle}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={navLinkStyle}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkStyle}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full md:hidden mt-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-8 space-y-6 shadow-2xl text-white font-bold border "
            >
              <li>
                <NavLink
                  to="/"
                  end
                  onClick={() => setIsOpen(false)}
                  className={navLinkStyle}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ReadMore"
                  onClick={() => setIsOpen(false)}
                  className={navLinkStyle}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  onClick={() => setIsOpen(false)}
                  className={navLinkStyle}
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={navLinkStyle}
                >
                  Contact
                </NavLink>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
};

export default Navbar;
