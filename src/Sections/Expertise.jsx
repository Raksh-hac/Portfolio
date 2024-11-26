import React from 'react';
import { FaCode, FaPaintBrush, FaVideo, FaCube } from 'react-icons/fa';

const Expertise = () => {
  const cards = [
    {
      title: 'WEB DEVELOPMENT',
      description: 'Building and maintaining the website, ensuring that it functions properly on the web.',
    },
    {
      title: 'WEB DESIGN',
      description: 'Designing responsive, engaging, and user-friendly websites.',
    },
    {
      title: '3D RENDERING',
      description: 'Creating lifelike 3D models and visualizations for diverse needs.',
    },
    {
      title: 'MOTION GRAPHICS',
      description: 'Designing dynamic animations to bring ideas to life.',
    },
  ];

  return (
    <section className="bg-transparent backdrop-blur-md p-10">
      <h2 className="flex flex-col text-4xl md:text-6xl font-bold text-left text-white mb-10">
        <span>MY</span>
        <span>EXPERTISE</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* First Row (Single Column) */}
        <div className="flex justify-start gap-2">
          {cards.slice(0, 1).map((card, index) => (
            <div
              key={index}
              className="relative h-full w-full group bg-neutral-950 border-neutral-800 border-2 rounded-lg shadow-md pl-2 lg:pl-4 pt-1 md:pt-5 pr-2 md:pr-16 overflow-hidden">
              <div className="absolute inset-0 bg-slate-300 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
              <FaCode className='expert-icon' />
              <h3 className="text-md lg:text-3xl font-extrabold text-white mb-2 group-hover:text-black relative z-10 duration-300">{card.title}</h3>
              <p className="text-xs lg:text-lg font-semibold text-gray-100 group-hover:text-black relative z-10 duration-300">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Second Row (Divided into Two Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-1 justify-normal gap-3">
          <div
            className="relative h-20 md:h-48 w-full group bg-neutral-950 border-neutral-800 border-2 rounded-lg shadow-md pt-1 md:pt-4 pl-2 md:pl-4 pr-1 md:pr-16 overflow-hidden">
            <div className="absolute inset-0 bg-slate-300 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
            <FaPaintBrush className='expert-icons' />
            <h3 className="text-md md:text-3xl font-extrabold text-white mb-2 group-hover:text-black relative z-10 duration-300">{cards[1].title}</h3>
            <p className="text-xs md:text-lg font-semibold text-gray-100 group-hover:text-black relative z-10 duration-300">{cards[1].description}</p>
          </div>
          <div
            className="relative h-20 md:h-48 group bg-neutral-950 border-neutral-800 border-2 rounded-lg shadow-md pt-1 md:pt-5 pl-2 md:pl-4 pr-4 md:pr-16 overflow-hidden">
            <div className="absolute inset-0 bg-slate-300 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
            <FaVideo className='expert-icons' />
            <h3 className="text-md md:text-3xl font-extrabold text-white mb-2 group-hover:text-black relative z-10 duration-300">{cards[3].title}</h3>
            <p className="text-xs md:text-lg font-semibold text-gray-100 group-hover:text-black relative z-10 duration-300">{cards[3].description}</p>
          </div>
        </div>

        {/* Third Row (Single Column) */}
        <div className="flex justify-center gap-5">
          {cards.slice(2, 3).map((card, index) => (
            <div
              key={index}
              className="relative h-full md:w-full group bg-neutral-950 border-neutral-800 border-2 rounded-lg shadow-md pl-2 md:pl-4 pt-1 md:pt-5 pr-2 md:pr-16 overflow-hidden">
              <div className="absolute inset-0 bg-slate-300 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
              <FaCube className='expert-icon' />
              <h3 className="text-md md:text-3xl font-extrabold text-white mb-2 group-hover:text-black relative z-10 duration-300">{card.title}</h3>
              <p className="text-xs md:text-lg font-semibold text-gray-100 group-hover:text-black relative z-10 duration-300">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
