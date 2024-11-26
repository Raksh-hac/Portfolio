import React from 'react';
import { motion } from 'framer-motion';
import ProfileImage from '../assets/Images/Profile.jpeg';
import { TextGenerateEffect } from '../ui/TextGenrate';

const  AboutMe = () => {
  return (
    <section id="about" className="flex flex-col min-h-screen w-screen items-center bg-black text-white relative">

        <div className="flex justify-center mb-8">
        <img
          src={ProfileImage}
          alt="Vikash Yadav"
          className="rounded-full w-60 lg:w-72 h-80 lg:h-96 object-cover"
        />
      </div>

      <h1 className='flex flex-col uppercase relative text-center justify-center text-3xl lg:text-6xl font-bold mb-4 z-50'>
        More About <span className='flex justify-center'> Me </span>
      </h1>
        
        <div className='grid grid-cols-1 p-5 md:px-32'>
        <TextGenerateEffect
        words="I'M AN INNOVATIVE DESIGNER AND DEVELOPER. MY PASSION FOR MINIMALIST AESTHETICS, ELEGANT DESIGN, AND INTUITIVE DEVELOPMENNT SHINES THROUGH IN MY WORK."
        className='text-lg md:text-xl font-semibold text-justify md:text-center'
        filter={true}
        duration={0.4}
        />

          <TextGenerateEffect 
          words="I'm on the cutting edge of no-code tools that allow me to bring my creative visions to life. Though my methods may be unconventional, my dedication to the craft is unparalleled. I thrive on finding unexpected solutions and believe that with the right perspective, design can elevate the human experience."
          className='text-lg md:text-xl font-semibold text-justify md:text-center'
          filter={true}
          duration={0.4}
          />
        </div>

        <button className="hov-btn">
          <a 
          href="./resume.pdf" 
          download="Vikash_Resume.pdf" 
          >
          download resume
          </a>
        </button>
     
    </section>
  );
}

export default AboutMe;
