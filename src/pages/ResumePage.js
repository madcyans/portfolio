/* import React, { useRef } from 'react';
import ReactToPdf from 'react-to-pdf';

const ResumePage = () => {
    const resumeRef = useRef(); // Declare the ref to be attached to the content container
  return (
    <div className="min-h-screen bg-gray-100">
      
      <section className="py-8 text-center">
        <h1 className="text-4xl font-bold">My Resume</h1>
      </section>
      
      <section className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mt-4">Profile</h2>
        <p className="mb-4">
          I am a licensed architect transitioning into web development. I am dedicated to learning new technologies and building creative solutions.
        </p>
        
        <h2 className="text-2xl font-bold mt-4">Skills</h2>
        <ul className="list-disc list-inside mb-4">
          <li>HTML, CSS, JavaScript</li>
          <li>React &amp; Tailwind CSS</li>
          <li>Node.js &amp; Express</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-4">Experience &amp; Education</h2>
        <p>
          [Add details about your work experience, projects, and educational background here.]
        </p>
        
        
        <div className="mt-8 flex justify-center">
            <ReactToPdf
                targetRef={resumeRef}
                filename="MyResume.pdf"
                options={{ orientation: 'portrait', format: 'a4' }}
            >
                {({ toPdf }) => (
                <button
                    onClick={toPdf}
                    className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                    Download Resume PDF
                </button>
                )}
            </ReactToPdf>
        </div>
      </section>
    </div>
  );
};

export default ResumePage; 
*/

/* from resume.js
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

export default Resume; */