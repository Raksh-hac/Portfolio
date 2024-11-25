// src/components/Dropdown.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { XIcon } from '@heroicons/react/solid';

function useLocalTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

function Dropdown({ onClose }) {
  const time = useLocalTime();
  return (
    <motion.div
      className="fixed inset-0 bg-black text-white z-40 pt-16 flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 40 }}
    >
      {/* Dropdown Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-2 bg-black text-white border-b-[0.5px] border-gray-500">
        <div className="text-md font-bold">{time}</div>
        <button className="rounded-full px-4 py-2 border-2 border-white text-sm hover:border-white hover:bg-white hover:font-bold hover:text-black transition-all duration-200">
          Schedule Call
        </button>
        <button onClick={onClose} className="text-white">
          <XIcon className="w-8 h-8" />
        </button>
        
      </nav>

      {/* Dropdown Content */}
      {/* <div className="text-center space-y-4 px-2 mt-10 text-7xl lg:text-9xl font-bold">
        {['Home', 'Skills', 'Contact', 'About Me'].map((text, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer text-slate-500 hover:text-white transition-colors duration-200"
            whileHover="glowing"
            variants={glowEffect}
          >
            {text}
          </motion.div>
        ))}
      </div> */}

<section className="grid place-content-center gap-2 bg-black px-8 py-24 text-white">
      <FlipLink href="#">Home</FlipLink>
      <FlipLink href="#">Skills</FlipLink>
      <FlipLink href="#">About Me</FlipLink>
      <FlipLink href="#">Contact</FlipLink>
    </section>
    </motion.div>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block text-center justify-center m-5 overflow-hidden text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-120%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default Dropdown;
