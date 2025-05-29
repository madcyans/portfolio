import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => (
  <section id="resume" className="py-8 bg-gradient-to-b from-indigo-950 to-slate-900">
    <div className="text-center mx-auto mx-14 px-8 sm:mx-14 sm:px-8 md:mx-24 md:px-12 lg:mx-30 lg:px-16 xl:mx-36 xl:px-20">
      <h2 className="text-3xl font-bold mb-4">Resume</h2>
      <p className="text-lg text-gray-700">
        Check out and Download my detailed resume.
      </p>
      <div className="mt-4">
        <Link
          to="/resume-page"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          View My Resume
        </Link>
      </div>
    </div>
  </section>
);

export default Resume;