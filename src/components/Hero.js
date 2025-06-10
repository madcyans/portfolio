import React from 'react';

const Hero = () => (
  <section 
    id="hero" 
    className="bg-gradient-to-b from-pale-dark-blue to-blue-900 text-center min-h-screen flex flex-col justify-center items-center relative"
  >
    <div className="mx-auto text-center px-8 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-10 sm:pt-28">
      <h1 className="font-normal text-white font-headerArtistic">
        <span className="text-5xl">Hello, I'm </span>
        <span className="text-5xl text-cyan-500 font-bold">Syan</span>
      </h1>
      <br/><br/>
      <p className="mt-4 text-2xl text-gray-300"> 
        <span className="text-cyan-200 text-4xl">Architect</span> <br /> 
        <span className="text-gray-200 text-3xl">turned</span> <br /> 
        <span className="italic text-cyan-300 text-4xl font-bold">Aspiring Web Developer</span> <br /> 
        <br /> <br /> <br /> <br /> <br />
        Just beginning my journey in coding, learning every day, and excited to build innovative digital experiences.
      </p>
    </div>

    {/* Movable thin line at the bottom */}
    <div className="absolute w-full border-t-4 border-cyan-500 bottom-24"></div>
  </section>
);

export default Hero;