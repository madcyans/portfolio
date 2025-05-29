import React from 'react';

const Hero = () => (
  <section id="hero" className="bg-gradient-to-b from-pale-dark-blue to-blue-900 pt-36 pb-20 text-center">
    <div className="mx-auto text-center mx-14 px-8 sm:mx-14 sm:px-8 md:mx-24 md:px-12 lg:mx-30 lg:px-16 xl:mx-36 xl:px-20">
      <h1 className="text-4xl font-normal text-white" style={{ fontFamily: "'Poppins', serif" }}>Hello, I'm{" "}
        <span className="text-indigo-300 font-bold" style={{ fontFamily: "'Poppins', serif" }}>Syan</span>
      </h1>
      <p className="mt-4 text-2xl text-gray-200"> 
        Architect turned aspiring Web Developer <br /> <br />
        – Just beginning my journey in coding, learning every day, and excited to build innovative digital experiences.</p>
    </div>
  </section>
);

export default Hero;