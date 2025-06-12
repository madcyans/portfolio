import React from 'react';
import { FaFacebookMessenger, FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Contact = () => (
  <section id="contact" className="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
    <div className="mx-auto mx-14 px-8 sm:mx-14 sm:px-8 md:mx-24 md:px-12 lg:mx-30 lg:px-16 xl:mx-36 xl:px-20">
      <h2 className="text-3xl text-cyan-200 text-center mb-8">Contact Me</h2>
      {/* Parent container ensures inline layout but wraps when needed */}
      <div className="w-full flex flex-wrap justify-center gap-8">
        
        {/* Messenger */}
        <div className="flex items-center space-x-4 transform hover:translate-y-1 transition duration-300">
          <FaFacebookMessenger className="text-blue-600 text-2xl" />
          <a 
            href="https://m.me/TorresSyanVale" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl text-cyan-100 hover:text-cyan-400"
          >
            Chat with me on Messenger!
          </a>
        </div>

        {/* Gmail */}
        <div className="flex items-center space-x-4 transform hover:translate-y-1 transition duration-300">
          <SiGmail className="text-red-600 text-2xl" />
          <a 
            href="mailto:torressyanvale@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl text-cyan-100 hover:text-cyan-400"
          >
            Email @ torressyanvale@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-4 transform hover:translate-y-1 transition duration-300">
          <FaPhoneAlt className="text-green-600 text-2xl" />
          <a 
            href="tel:+639298172574"
            target="_blank"
            rel="noopener noreferrer" 
            className="text-xl text-cyan-100 hover:text-cyan-400"
          >
            +63 929 817 2574
          </a>
        </div>

      </div>
    </div>
  </section>
);

export default Contact;