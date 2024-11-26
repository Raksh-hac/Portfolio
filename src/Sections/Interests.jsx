import React from 'react';
import { FaPlane, FaMusic, FaCoffee, FaTshirt, FaGamepad } from 'react-icons/fa'; // Importing the gaming icon

function Interests() {
  return (
    <section className="my-1 w-full flex flex-col items-center bg-black text-white py-16 px-8 lg:px-24">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
        MY INTERESTS
      </h2>

      {/* Icons for each interest */}
      <div className="flex justify-center flex-wrap gap-6 md:gap-8">
        {/* Icon Wrapper */}
        {[
          { Icon: FaPlane, label: 'Traveling' },
          { Icon: FaMusic, label: 'Music' },
          { Icon: FaCoffee, label: 'Coffee' },
          { Icon: FaTshirt, label: 'Fashion' },
          { Icon: FaGamepad, label: 'Gaming' },
        ].map(({ Icon, label }, index) => (
          <div
            key={index}
            className="bg-black p-6 rounded-3xl border-2 border-white shadow-lg flex items-center justify-center 
                       transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-3 
                       cursor-pointer"
            title={label}
          >
            <Icon className="text-3xl md:text-4xl lg:text-5xl text-white" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Interests;
