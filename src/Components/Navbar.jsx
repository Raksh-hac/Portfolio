import React, { useState } from 'react';
import { Link } from 'react-scroll'

function Navbar() {

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-black text-white border-b-[0.5px] border-slate-500 z-50 overflow-x-hidden floating-nav">
      {/* Logo */}
      <div className="text-xl font-extrabold">VIKASH</div>

      {/* Right-Side Links (Hidden on Small Screens) */}
      <div className="hidden sm:flex space-x-6">
        <Link
        to="home"
        smooth={true}
        duration={350}
        className="nav-hover-btn cursor-pointer"
        >
          <a href="#home">Home</a>
        </Link>
        <Link
         to="skills"
         smooth={true}
         duration={350}
         className="nav-hover-btn cursor-pointer"
        >
          <a href="#skills">Skills</a>
        </Link>
        <Link
         to="contact"
         smooth={true}
         duration={350}
         className="nav-hover-btn cursor-pointer"
        >
          <a href="#contact">Contact</a>
        </Link>
        <Link
         to="about"
         smooth={true}
         duration={350}
         className="nav-hover-btn cursor-pointer"
        >
          <a href="#contact">About</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
