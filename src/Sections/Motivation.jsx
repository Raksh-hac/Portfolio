import React from 'react';
import { TextGenerateEffect } from '../ui/TextGenrate';

const Motivation = () => {
  return (
    <div className="flex flex-col lg:flex-row px-6 lg:px-12 py-10 bg-black text-white">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left mb-8 lg:mb-0 lg:pr-12">
        MOTIVATION
      </h2>

      {/* Content */}
      <div className="grid grid-cols-1 gap-8 lg:gap-10">
        {/* Paragraph 1 */}
        <TextGenerateEffect
          words="More than a job, web design is an outlet for your vision. You have the power to take an idea from concept to reality. Your sites can tell a story, show off a brand, or change lives. As the web expands, so do the possibilities. You also have the flexibility to work remotely or in a fun agency setting. And nothing beats the rush of seeing your live sites in action."
          className="text-lg md:text-xl font-semibold text-justify md:text-left"
          filter={true}
          duration={0.4}
        />

        {/* Paragraph 2 */}
        <TextGenerateEffect
          words="As a web developer, you get to blend art and technology to create digital experiences that inform, entertain, and inspire. Every day is different - one day you may be sketching site layouts on paper, the next you're coding up responsive page templates. Web design and development keeps you on your toes!"
          className="text-lg md:text-xl font-semibold text-justify md:text-left"
          filter={true}
          duration={0.4}
        />
      </div>
    </div>
  );
};

export default Motivation;
