import React from 'react';

const Certificates = () => {
  // Define certificate data grouped by category/row.
  const certificateCategories = {
    htmlCss: [
      {
        title: "HTML Essential Training",
        issuer: "LinkedIn Learning",
        date: "-Feb 09, 2025",
        pdfLink: "/certificates/HTML-Essential-Training.pdf",
      },
      {
        title: "CSS Essential Training",
        issuer: "LinkedIn Learning",
        date: "-Feb 26, 2025",
        pdfLink: "/certificates/CSS-Essential-Training.pdf",
      },
      {
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "-Feb 02, 2025",
        pdfLink: "/certificates/Certificate-ResponsiveWebDesign.pdf",
      },
    ],
    javascript: [
      {
        title: "Learning the JavaScript Language",
        issuer: "LinkedIn Learning",
        date: "-Feb 04, 2025",
        pdfLink: "/certificates/Learning-the-JavaScript-Language.pdf",
      },
      {
        title: "Javascript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        date: "-Mar 2025",
        pdfLink: "/certificates/Certificate-Javascript.pdf",
      },
    ],
    react: [
      {
        title: "Front End Development Libraries",
        issuer: "freeCodeCamp",
        date: "-Apr 2025 ",
        pdfLink: "/certificates/Certificate-FrontEndDev.pdf",
      },
    ],
    nodejs: [
      {
        title: "Back End Development and APIs",
        issuer: "LinkedIn Learning",
        date: "-May 20 2025",
        pdfLink: "/certificates/Certificate-BackEndDev.pdf",
      },
    ],
  };

  // A small card component returning a clickable certificate card.
  const CertificateCard = ({ certificate }) => (
    <a
      href={certificate.pdfLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-smoke-white bg-opacity-0 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 p-2 hover:bg-opacity-20"
    >
      <h3 className="text-lg font-semibold text-gray-200 group-hover:underline">{certificate.title}</h3>
      <div className="text-md flex items-center justify-between gap-3 w-full">
        <span className="text-gray-300">{certificate.issuer}</span>
        <span className="text-gray-300 text-sm">{certificate.date}</span>
      </div>
    </a>
  );

  return (
    <section id="certificates" className="py-16 bg-gradient-to-b from-royal-indigo to-indigo-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Certificates</h2>

        {/* Row 1: HTML & CSS Certificates */}
        <div className="text-xl">
          <div className="mb-4">
            <h3 className="font-bold mb-1">HTML & CSS Certificates</h3>
            <div className="w-fit text-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {certificateCategories.htmlCss.map((cert, index) => (
                <CertificateCard certificate={cert} key={index} />
              ))}
            </div>
          </div>

          {/* Row 2: JavaScript Certificate */}
          <div className="mb-4">
            <h3 className="font-bold mb-1">JavaScript Certificates</h3>
            <div className="w-fit text-sm grid grid-cols-1 sm:grid-cols-2 gap-2">
              {certificateCategories.javascript.map((cert, index) => (
                <CertificateCard certificate={cert} key={index} />
              ))}
            </div>
          </div>

          {/* Row 3: React Certificate */}
          <div className="mb-4">
            <h3 className="font-bold mb-1">React Certificate</h3>
            <div className="w-fit text-sm grid grid-cols-1 gap-6">
              {certificateCategories.react.map((cert, index) => (
                <CertificateCard certificate={cert} key={index} />
              ))}
            </div>
          </div>

          {/* Row 4: Node.js Certificate */}
          <div>
            <h3 className="font-bold mb-1">Node.js Certificate</h3>
            <div className="w-fit text-sm grid grid-cols-1 gap-6">
              {certificateCategories.nodejs.map((cert, index) => (
                <CertificateCard certificate={cert} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;