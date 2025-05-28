import React from 'react';

const Hero = () => (
  <section id="hero" className="bg-gradient-to-b from-blue-800 to-blue-900 pt-36 pb-20 text-center">
    <div className="relative pl-16 md:pl-20 lg:pl-24 xl:pl-28 max-w-7xl mx-auto">
      <h1 className="text-4xl font-normal text-white" style={{ fontFamily: "'Poppins', serif" }}>Hi, my name is{" "}
        <span className="text-indigo-300 font-bold" style={{ fontFamily: "'Poppins', serif" }}>Syan Torres</span>
      </h1>
      <p className="mt-4 text-xl text-gray-200"> 
        Architect turned aspiring Web Developer <br /> 
        – Just beginning my journey in coding, learning every day, and excited to build innovative digital experiences.</p>
    </div>
  </section>
);

export default Hero;