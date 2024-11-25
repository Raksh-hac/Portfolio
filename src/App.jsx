import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import Navbar from './Components/Navbar';
import Hero from './Sections/Hero';
import AboutMe from './Sections/About';
import Interests from './Sections/Interests';
import Education from './Sections/Education';
import Skills from './Sections/Skills';
import Expertise from './Sections/Expertise';
import Motivation from './Sections/Motivation';
import Footer from './Components/Footer';
import Projects from './Sections/Projects';

function App() {

  const { scrollYProgress } = useScroll()
  

  return (
    <Router>
      <div id='home' className="bg-black overflow-x-hidden">
        <motion.div className='fixed top-14 left-0 w-full h-2 bg-white z-50'
        style={{ scaleX: scrollYProgress }}
        />
       <Navbar />
         <Hero />
         <Projects />
         <AboutMe />
         <Interests />
         <Expertise />
         <Motivation />
         <Education />
         <Skills />
         <Footer />
      </div>
      </Router>
  );
}

export default App;
