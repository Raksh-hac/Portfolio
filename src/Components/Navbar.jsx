import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll'
import Dropdown from './Dropdown';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-black text-white border-b-[0.5px] border-slate-500 z-50 overflow-x-hidden floating-nav">
      {/* Logo */}
      <div className="text-xl font-extrabold">VIKASH</div>

      {/* Right-Side Links (Hidden on Small Screens) */}
      <div className="hidden sm:flex space-x-6">
        <Link
        to="home"
        smooth={true}
        duration={500}
        className="nav-hover-btn cursor-pointer"
        >
          <a href="#home">Home</a>
        </Link>
        <Link
         to="skills"
         smooth={true}
         duration={500}
         className="nav-hover-btn cursor-pointer"
        >
          <a href="#skills">Skills</a>
        </Link>
        <Link
         to="contact"
         smooth={true}
         duration={500}
         className="nav-hover-btn cursor-pointer"
        >
          <a href="#contact">Contact</a>
        </Link>
        <Link
         to="about"
         smooth={true}
         duration={500}
         className="nav-hover-btn cursor-pointer"
        >
          <a href="#contact">About</a>
        </Link>
      </div>

      {/* Hamburger Menu (Visible on Small Screens) */}
      <div
        className=" flex flex-col z-99 justify-center items-center space-y-1 cursor-pointer"
        onClick={toggleDropdown}
      >
        <span
          className={`w-6 h-[2px] bg-white transition-transform duration-300 ${
            isDropdownOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span
          className={`w-6 h-[2px] bg-white transition-opacity duration-300 ${
            isDropdownOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`w-6 h-[2px] bg-white transition-transform duration-300 ${
            isDropdownOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
      </div>

      {/* Dropdown Component */}
      <AnimatePresence>{isDropdownOpen && <Dropdown onClose={toggleDropdown} />}</AnimatePresence>
    </nav>
  );
}

export default Navbar;
