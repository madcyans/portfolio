import React from 'react';

const Resume = () => (
  <section id="resume" className="py-8 bg-gradient-to-b from-indigo-950 to-slate-900">
    <div className="max-w-5xl mx-auto px-8 text-center">
      <h2 className="text-3xl font-bold mb-4 text-white">Resume</h2>
      <p className="text-lg text-gray-300">
        Check out and download my detailed resume.
      </p>
      <div className="mt-4">
        <a
          href="/certificates/Torres-Syan-CV.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Download Resume PDF
        </a>
      </div>
    </div>
  </section>
);


export default Resume;

