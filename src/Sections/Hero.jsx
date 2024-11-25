import React, { useEffect, useState } from 'react';

function Hero() {
  const [time, setTime] = useState('');

  // Update clock every second
  useEffect(() => {
    const updateClock = () => setTime(new Date().toLocaleTimeString());
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-96 lg:h-4/5 flex flex-col items-center justify-center mb-4 bg-black text-white relative">
      {/* Blinking Available text closer to the name */}
      <div className="relative flex items-center space-x-2 mt-2 lg:mt-36 text-xl lg:text-4xl font-semibold">
        <span className="bg-green-500 w-2 h-2 rounded-full animate-pulse"></span>
        <span className="text-slate-500  font-semibold">Available</span>
      </div>

      {/* Centered Name with responsive font sizes */}
      <div className="flex flex-col items-center mb-4 font-bold leading-tight text-center relative z-10">
        <span
          className="hero-heading" 
        >
          VIKASH
        </span>
        <span
          className="hero-heading"
        >
          YADAV
        </span>
      </div>

      {/* Bottom Information */}
      <div className="bottom-20 w-full flex justify-between px-5 text-sm lg:text-lg">
        <span>Based in Gorakhpur, India</span>
        <div className="text-right">
          <span>Coordinates: 26.7606° N, 83.3732° E</span> <br />
          <span className='text-slate-500'>Current Time: {time}</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
