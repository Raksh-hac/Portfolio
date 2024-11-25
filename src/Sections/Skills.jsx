import React from 'react'
import {FaCss3, FaHtml5, FaReact, FaJs, FaBootstrap, FaGit, FaTools, FaBolt} from 'react-icons/fa';
import { AiOutlineFileText } from 'react-icons/ai';

const Skills = () => {
  return (
    <div>
      <div id='skills' className='flex lg:flex-row flex-col mt-10'>
        <h2 className="flex flex-row text-6xl font-bold text-left text-white mb-10 pl-10 pt-20 uppercase">
        skills
      </h2>
      <div className='grid grid-col w-screen lg:w-full mb-10 p-4'>
        <div className='flex flex-row border w-full lg:w-9/12 relative lg:left-96 p-2 lg:p-5 mb-10 space-x-2 lg:space-x-5 rounded-xl bg-neutral-950 border-neutral-900 hover:scale-105 transition-all'>
          <div className='text-white border border-neutral-800 bg-neutral-900 w-10 lg:w-20 h-10 lg:h-20 p-2 lg:p-4 rounded-xl'>
            <FaHtml5 className='text-2xl lg:text-5xl'/>
          </div>
          <p className="flex flex-col font-semibold text-left text-white p-2 lg:pl-5 w-full pb-5 pt-8 rounded-xl border border-neutral-800 bg-neutral-900">
           <span className='uppercase text-xl lg:text-2xl mb-5'>html5</span>
           <span className='uppercase text-md lg:text-xl'>The backbone of modern web development, HTML5 brings structure and semantics to the web, powering rich, interactive experiences.</span>
          </p>
        </div>
        <div className='flex flex-row border w-full lg:w-9/12 relative lg:left-96 p-2 lg:p-5 space-x-2 lg:space-x-5 mb-10 rounded-xl bg-neutral-950 border-neutral-900 hover:scale-105 transition-all'>
          <div className='uppercase text-white border border-neutral-800 bg-neutral-900 w-10 lg:w-20 h-10 lg:h-20 p-2 lg:p-4 rounded-xl'>
          <FaCss3 className='text-2xl lg:text-5xl'/>
          </div>
          <p className="flex flex-col font-semibold text-left text-white pl-2 lg:pl-5 w-full pb-5 pt-8 rounded-xl border border-neutral-800 bg-neutral-900">
           <span className='uppercase text-xl lg:text-2xl mb-5'>css3</span>
           <span className='uppercase text-md lg:text-xl'>CSS3 elevates web design with sleek, responsive layouts, stunning animations, and elegant visual styles that adapt to any device.</span>
          </p>
        </div>
        <div className='flex flex-row border w-full lg:w-9/12 relative lg:left-96 p-2 lg:p-5 space-x-2 lg:space-x-5 rounded-xl bg-neutral-950 border-neutral-900 hover:scale-105 transition-all'>
          <div className='uppercase text-white border border-neutral-800 bg-neutral-900 w-10 lg:w-20 h-10 lg:h-20 p-2 lg:p-4 rounded-xl'>
          <FaJs className='text-2xl lg:text-5xl'/>
          </div>
          <p className="flex flex-col font-semibold text-left text-white pl-2 lg:pl-5 w-full pb-5 pt-8 rounded-xl border border-neutral-800 bg-neutral-900">
           <span className='uppercase text-xl lg:text-2xl mb-5'>js</span>
           <span className='uppercase text-md lg:text-xl'>JavaScript is the language of the web, enabling dynamic, interactive, and engaging user experiences through code.</span>
          </p>
        </div>
        <div className='flex flex-row border w-full lg:w-9/12 relative lg:left-96 p-2 lg:p-5 mt-10 space-x-2 lg:space-x-5 rounded-xl bg-neutral-950 border-neutral-900 hover:scale-105 transition-all'>
          <div className='uppercase text-white border border-neutral-800 bg-neutral-900 w-10 lg:w-20 h-10 lg:h-20 p-2 lg:p-4 rounded-xl'>
          <FaReact className='text-2xl lg:text-5xl'/>
          </div>
          <p className="flex flex-col font-semibold text-left text-white pl-2 lg:pl-5 w-full pb-5 pt-8 rounded-xl border border-neutral-800 bg-neutral-900">
           <span className='uppercase text-xl lg:text-2xl mb-5'>react</span>
           <span className='uppercase text-md lg:text-xl'>React JS makes building fast, scalable, and interactive UIs a breeze, with a component-based approach and efficient rendering.</span>
          </p>
        </div>
        <div className='flex flex-row border w-full lg:w-9/12 relative lg:left-96 p-2 lg:p-5 mt-10 space-x-2 lg:space-x-5 rounded-xl bg-neutral-950 border-neutral-900 hover:scale-105 transition-all'>
          <div className='uppercase text-white border border-neutral-800 bg-neutral-900 w-10 lg:w-20 h-10 lg:h-20 p-2 lg:p-4 rounded-xl'>
          <FaTools className='text-2xl lg:text-5xl'/>
          </div>
          <p className="flex flex-col font-semibold text-left text-white pl-2 lg:pl-5 w-full pb-5 pt-8 rounded-xl border border-neutral-800 bg-neutral-900">
           <span className='uppercase text-xl lg:text-2xl mb-5'>framer-motion</span>
           <span className='uppercase text-md lg:text-xl'>Framer Motion adds fluid, smooth animations to your React apps, making transitions and interactions feel natural and intuitive.</span>
          </p>
        </div>
        <div className='flex flex-row border w-full lg:w-9/12 relative lg:left-96 p-2 lg:p-5 mt-10 space-x-2 lg:space-x-5 rounded-xl bg-neutral-950 border-neutral-900 hover:scale-105 transition-all'>
          <div className='uppercase text-white border border-neutral-800 bg-neutral-900 w-10 lg:w-20 h-10 lg:h-20 p-2 lg:p-4 rounded-xl'>
          <AiOutlineFileText className='text-2xl lg:text-5xl'/>
          </div>
          <p className="flex flex-col font-semibold text-left text-white pl-2 lg:pl-5 w-full pb-5 pt-8 rounded-xl border border-neutral-800 bg-neutral-900">
           <span className='uppercase text-xl lg:text-2xl mb-5'>tailwind css</span>
           <span className='uppercase text-md lg:text-xl'>Tailwind CSS offers a utility-first approach to styling, allowing for fast, customizable designs without writing a single line of custom CSS.</span>
          </p>
        </div>
        <div className='flex flex-row border w-full lg:w-9/12 relative lg:left-96 p-2 lg:p-5 mt-10 space-x-2 lg:space-x-5 rounded-xl bg-neutral-950 border-neutral-900 hover:scale-105 transition-all'>
          <div className='uppercase text-white border border-neutral-800 bg-neutral-900 w-10 lg:w-20 h-10 lg:h-20 p-2 lg:p-4 rounded-xl'>
          <FaBootstrap className='text-2xl lg:text-5xl'/>
          </div>
          <p className="flex flex-col font-semibold text-left text-white pl-2 lg:pl-5 w-full pb-5 pt-8 rounded-xl border border-neutral-800 bg-neutral-900">
           <span className='uppercase text-xl lg:text-2xl mb-5'>bootstrap</span>
           <span className='uppercase text-md lg:text-xl'>Bootstrap is a powerful framework for building responsive, mobile-first websites with pre-built components and customizable layouts.</span>
          </p>
        </div>
        <div className='flex flex-row border w-full lg:w-9/12 relative lg:left-96 p-2 lg:p-5 mt-10 space-x-2 lg:space-x-5 rounded-xl bg-neutral-950 border-neutral-900 hover:scale-105 transition-all'>
          <div className='uppercase text-white border border-neutral-800 bg-neutral-900 w-10 h-10 lg:w-20 lg:h-20 p-2 lg:p-4 rounded-xl'>
          <FaBolt className='text-2xl lg:text-5xl'/>
          </div>
          <p className="flex flex-col font-semibold text-left text-white pl-2 lg:pl-5 w-full pb-5 pt-8 rounded-xl border border-neutral-800 bg-neutral-900">
           <span className='uppercase text-xl lg:text-2xl mb-5'>vite</span>
           <span className='uppercase text-md lg:text-xl'>Vite is a lightning-fast build tool that optimizes your development workflow, offering blazing fast reloads and efficient production builds.</span>
          </p>
        </div>
        <div className='flex flex-row border w-full lg:w-9/12 relative lg:left-96 p-2 lg:p-5 mt-10 space-x-2 lg:space-x-5 rounded-xl bg-neutral-950 border-neutral-900 hover:scale-105 transition-all'>
          <div className='uppercase text-white border border-neutral-800 bg-neutral-900 w-10 h-10 lg:w-20 lg:h-20 p-2 lg:p-4 rounded-xl'>
          <FaGit className='text-2xl lg:text-5xl'/>
          </div>
          <p className="flex flex-col font-semibold text-left text-white pl-2 lg:pl-5 w-full pb-5 pt-8 rounded-xl border border-neutral-800 bg-neutral-900">
           <span className='uppercase text-xl lg:text-2xl mb-5'>git</span>
           <span className='uppercase text-md lg:text-xl'>Git is the version control system that powers collaboration, enabling teams to track, manage, and share code with ease.</span>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Skills