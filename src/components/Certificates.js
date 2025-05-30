import React from 'react';

const Certificates = () => {
  // Define certificate data grouped by category.
  const certificateCategories = {
    row1: [
      {
        category: "HTML & CSS Certificates",
        certificates: [
          { title: "HTML Essential Training", issuer: "LinkedIn Learning", date: "-Feb 09, 2025", pdfLink: "/certificates/HTML-Essential-Training.pdf" },
          { title: "CSS Essential Training", issuer: "LinkedIn Learning", date: "-Feb 26, 2025", pdfLink: "/certificates/CSS-Essential-Training.pdf" },
          { title: "Responsive Web Design", issuer: "freeCodeCamp", date: "-Feb 02, 2025", pdfLink: "/certificates/Certificate-ResponsiveWebDesign.pdf" },
        ],
      },
      {
        category: "JavaScript Certificates",
        certificates: [
          { title: "Learning JavaScript Language", issuer: "LinkedIn Learning", date: "-Feb 04, 2025", pdfLink: "/certificates/Learning-the-JavaScript-Language.pdf" },
          { title: "JavaScript Algorithms & Data Structures", issuer: "freeCodeCamp", date: "-Mar 2025", pdfLink: "/certificates/Certificate-Javascript.pdf" },
        ],
      },
    ],
    row2: [
      {
        category: "React Certificate",
        certificates: [
          { title: "Front End Development Libraries", issuer: "freeCodeCamp", date: "-Apr 2025", pdfLink: "/certificates/Certificate-FrontEndDev.pdf" },
        ],
      },
      {
        category: "Node.js Certificate",
        certificates: [
          { title: "Back End Development and APIs", issuer: "LinkedIn Learning", date: "-May 20, 2025", pdfLink: "/certificates/Certificate-BackEndDev.pdf" },
        ],
      },
    ],
  };

  // Certificate card component
  const CertificateCard = ({ certificate }) => (
    <a
      href={certificate.pdfLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-smoke-white bg-opacity-0 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 p-2 hover:bg-opacity-20"
    >
      <h3 className="text-md font-semibold text-gray-200 group-hover:underline">{certificate.title}</h3>
      <div className="text-md flex items-center justify-between gap-4">
        <span className="text-gray-300">{certificate.issuer}</span>
        <span className="text-gray-300 text-sm">{certificate.date}</span>
      </div>
    </a>
  );
  
  return (
    
    <section id="certificates" className="pb-16 pt-8 bg-gradient-to-b from-royal-indigo to-indigo-950">
      <div className="container mx-auto">
        {/* Divider at the very top */}
        <hr className="border-t-2 border-gray-300 mb-14" />

        <h2 className="text-3xl font-bold text-center mb-6">Certificates</h2>

        {/* Grid with 2 rows and 2 columns on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 text-xl gap-8">
          {/* Row 1: HTML/CSS + JavaScript */}
          {certificateCategories.row1.map((categoryObj, index) => {
            // Set grid classes based on category name.
            const gridColsClasses = categoryObj.category === "HTML & CSS Certificates"
              ? "grid-cols-1 sm:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2";

            return (
              <div key={index}>
                <h3 className="font-bold mb-1">{categoryObj.category}</h3>
                <div className={`w-full text-sm grid ${gridColsClasses} gap-4`}>
                  {categoryObj.certificates.map((cert, idx) => (
                    <CertificateCard certificate={cert} key={idx} />
                  ))}
                </div>
              </div>
            );
          })}

          {/* Row 2: React + Node.js */}
          {certificateCategories.row2.map((categoryObj, index) => (
            <div key={index}>
              <h3 className="font-bold mb-1">{categoryObj.category}</h3>
              <div className="w-fit text-sm grid grid-cols-1 gap-6">
                {categoryObj.certificates.map((cert, idx) => (
                  <CertificateCard certificate={cert} key={idx} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;