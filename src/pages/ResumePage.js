import React, { useRef } from 'react';
import ReactToPdf from 'react-to-pdf';

const ResumePage = () => {
    const resumeRef = useRef(); // Declare the ref to be attached to the content container
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header for the resume page */}
      <section className="py-8 text-center">
        <h1 className="text-4xl font-bold">My Resume</h1>
      </section>
      
      {/* Resume Content */}
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
        
        {/* Download Resume PDF Button */}
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