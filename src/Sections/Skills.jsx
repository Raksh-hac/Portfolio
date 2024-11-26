import React from 'react';
import {
  FaCss3,
  FaHtml5,
  FaReact,
  FaJs,
  FaBootstrap,
  FaGit,
  FaTools,
  FaBolt,
} from 'react-icons/fa';
import { AiOutlineFileText } from 'react-icons/ai';

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 className="text-2xl lg:text-6xl" />, id: 1 },
    { icon: <FaCss3 className="text-2xl lg:text-6xl" />, id: 2 },
    { icon: <FaJs className="text-2xl lg:text-6xl" />, id: 3 },
    { icon: <FaReact className="text-2xl lg:text-6xl" />, id: 4 },
    { icon: <FaTools className="text-2xl lg:text-6xl" />, id: 5 },
    { icon: <AiOutlineFileText className="text-2xl lg:text-6xl" />, id: 6 },
    { icon: <FaBootstrap className="text-2xl lg:text-6xl" />, id: 7 },
    { icon: <FaBolt className="text-2xl lg:text-6xl" />, id: 8 },
    { icon: <FaGit className="text-2xl lg:text-6xl" />, id: 9 },
  ];

  return (
    <div id="skills" className="flex flex-col items-center mt-20">
      <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 uppercase">Skills</h2>
      <div className="flex flex-row space-x-5 overflow-hidden">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="p-5 bg-neutral-950 border border-neutral-900 rounded-xl hover:scale-105 transition-transform animate-float text-white"
          >
            {skill.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
