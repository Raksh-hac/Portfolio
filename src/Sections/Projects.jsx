import React from "react";
import { TextGenerateEffect } from "../ui/TextGenrate";
import { motion } from "framer-motion";
import myVideo from '../assets/Images/Kiriko _ New Hero Gameplay Trailer _ Overwatch 2.mp4';
import webDev from '../assets/Images/971.jpg';

const Projects = () => {
  return (
    <div className="bg-transparent text-white p-5 md:p-10">
      <div className="relative">
        <h1 className="text-2xl lg:text-6xl font-bold mb-6 md:mb-10">
          Featured <br />
          Work
        </h1>
        <TextGenerateEffect
          words="My creative spirit comes alive in the digital realm. With nimble fingers flying across the keyboard, I craft clear experiences out of nothing but ones and zeroes."
          className="absolute left-2 lg:left-1/2 -mt-5 lg:-mt-32 text-xs lg:text-xl text-justify px-0 lg:px-4"
          duration={0.8}
        />
      </div>

      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-5 mt-52 lg:mt-1">
        <motion.a href="https://gaming-website-gray.vercel.app/" 
        className=""
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        >
        <div className="project-main">
          <video
            autoPlay
            muted
            loop
            className="rounded-t-xl h-60 md:h-80 w-full object-cover"
          >
            <source src={myVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3 className="project-subMain">
            Gaming Website
            <p className="flex nav-hover-btn">View</p>
          </h3>
        </div>
        </motion.a>

        <motion.a href="https://demo-delta-ten.vercel.app/" 
        className=""
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 40, duration: 2 }}
        >
        <div className="project-main">
          <img
            src={webDev}
            alt="project"
            className="w-full h-60 md:h-80 rounded-t-xl object-cover"
          />
          <h3 className="project-subMain">
            Landing Page
            <p className="flex nav-hover-btn">View</p>
          </h3>
        </div>
        </motion.a>
      </div>
    </div>
  );
};

export default Projects;
