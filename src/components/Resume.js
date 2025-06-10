import React from 'react';

const Resume = () => (
  <section id="resume" className="py-8 bg-gradient-to-b from-indigo-950 to-slate-900">
    <div className="max-w-2xl mx-auto px-2 py-4 text-center border-4 border-orange-700 rounded-full">
      <h2 className="text-3xl text-cyan-200 mb-6 pb-4 text-cyan-200">Resume</h2>
      <div className="mt-4">
        <a
          href="/certificates/Torres-Syan-CV.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
        >
          DOWNLOAD RESUME
        </a>
      </div>
      <p className="text-lg text-cyan-100 py-3">
        Check out and download my detailed resume.
      </p>
    </div>
  </section>
);


export default Resume;

