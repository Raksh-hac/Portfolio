import React from "react";

function Education() {
  return (
    <div id="education" className="flex flex-col px-5 md:px-10 mt-14">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-left text-white mb-10 uppercase">
        Education
      </h2>

      {/* Education Cards */}
      <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
        {/* Master’s Card */}
        <div className="nav-hover-btn border-b border-slate-500 p-5 rounded-lg hover:scale-105 transition-all">
          <p className="flex flex-col text-xl md:text-2xl font-semibold text-left text-white">
            <span className="uppercase mb-3">Master's</span>
            <span className="uppercase">GD Goenka University</span>
            <p className="text-right mt-5 md:mt-3">
              <span>2022-2024</span>
            </p>
          </p>
        </div>

        {/* Bachelor’s Card */}
        <div className="nav-hover-btn border-b border-slate-500 p-5 rounded-lg hover:scale-105 transition-all">
          <p className="flex flex-col text-xl md:text-2xl font-semibold text-left text-white">
            <span className="uppercase mb-3">Bachelor's</span>
            <span className="uppercase">Dr. RMLA University</span>
            <p className="text-right mt-5 md:mt-3">
              <span>2017-2020</span>
            </p>
          </p>
        </div>

        {/* Web Development Card */}
        <div className="nav-hover-btn border-b border-slate-500 p-5 rounded-lg hover:scale-105 transition-all">
          <p className="flex flex-col text-xl md:text-2xl font-semibold text-left text-white">
            <span className="uppercase mb-3">Web Development</span>
            <span className="uppercase">ZTM-Udemy</span>
            <p className="text-right mt-5 md:mt-3">
              <span>2022</span>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
