import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => (
  <section id="resume" className="py-8 bg-gradient-to-b from-indigo-950 to-slate-900">
    <div className="max-w-4xl mx-auto px-4 text-center">
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