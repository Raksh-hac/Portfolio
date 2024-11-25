import React from 'react';

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
      <h2 className="flex flex-col text-6xl font-bold text-left text-white mb-10">
        <span>MY</span>
        <span>EXPERTISE</span>
      </h2>
      <div className="grid grid-row gap-5 overflow-hidden">
        {/* First Column */}
        <div className="flex flex-row gap-2 lg:gap-5 overflow-hidden">
          {cards.slice(0, 3).map((card, index) => (
            <div
              key={index}
              className="relative h-52 w-40 lg:w-1/3 group bg-neutral-950 border-neutral-800  border-2 rounded-lg shadow-md pl-1 lg:pl-4 pt-8 lg:pt-16 pr-2 lg:pr-4 overflow-hidden">
               <div className="absolute inset-0 bg-slate-300 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
              <h3 className="text-md lg:text-2xl font-extrabold text-white mb-2 group-hover:text-black relative z-10 duration-300">{card.title}</h3>
              <p className="text-xs lg:text-md font-semibold text-gray-100 group-hover:text-black relative z-10 duration-300">{card.description}</p>
            </div>
          ))}
        </div>
        {/* Second Column */}
        <div className="w-full lg:w-full overflow-hidden">
          <div
            className="relative h-52 group bg-neutral-950 border-neutral-800 border-2 rounded-lg shadow-md pt-16 pl-4 pr-4 overflow-hidden">
            <div className="absolute inset-0 bg-slate-300 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
            <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-black relative z-10 duration-300">{cards[3].title}</h3>
            <p className="text-md font-semibold text-gray-100 group-hover:text-black relative z-10 duration-300">{cards[3].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
