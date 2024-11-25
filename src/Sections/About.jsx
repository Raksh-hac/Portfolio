import React from 'react';
import AnimatedTitle from '../ui/AnimatedLines';
import { motion } from 'framer-motion';
import ProfileImage from '../assets/Images/Profile.jpeg';
import { TextGenerateEffect } from '../ui/TextGenrate';


const buttonVariants = {
  hover: {
    scale: 1.1,
    color: "white",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    backgroundColor: "black",
    transition: {
      yoyo: 10
    }
  }
}

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

      <AnimatedTitle
        title='about<br/>me'
        containerClass="flex flex-col relative text-center text-3xl lg:text-8xl font-bold mb-4 z-50"/>
        
        {/* <p className="relative z-10 text-white text-2xl font-bold px-24 justify-center leading-relaxed mb-6 text-center">
        I'M AN INNOVATIVE DESIGNER AND DEVELOPER. 
        MY PASSION FOR MINIMALIST AESTHETICS, ELEGANT DESIGN, AND INTUITIVE DEVELOPMENNT SHINES THROUGH IN MY WORK.
        </p> */}

        <TextGenerateEffect
        words="I'M AN INNOVATIVE DESIGNER AND DEVELOPER. MY PASSION FOR MINIMALIST AESTHETICS, ELEGANT DESIGN, AND INTUITIVE DEVELOPMENNT SHINES THROUGH IN MY WORK."
        className='relative z-10 text-white text-2xl font-bold px-24 justify-center leading-relaxed mb-6 text-center'
        filter={true}
        duration={0.4}
        />

        <div className="relative z-10 text-white text-2xl px-24 justify-center leading-relaxed mb-6 text-center">
          {/* <p>
          I'm on the cutting edge of no-code tools that allow me to bring my creative visions to life. Though my methods may be unconventional, my dedication to the craft is unparalleled. I thrive on finding "unexpected solutions" and believe that with the right perspective, design can elevate the human experience.
          </p> */}

          <TextGenerateEffect 
          words="I'm on the cutting edge of no-code tools that allow me to bring my creative visions to life. Though my methods may be unconventional, my dedication to the craft is unparalleled. I thrive on finding unexpected solutions and believe that with the right perspective, design can elevate the human experience."
          filter={true}
          duration={0.4}
          />
        </div>

        <motion.button 
          variants={buttonVariants}
          whileHover="hover"
        className="rounded-full uppercase font-bold text-xl px-4 py-2 border text-black border-white bg-slate-200">
          download resume
        </motion.button>
     
    </section>
  );
}

export default AboutMe;
