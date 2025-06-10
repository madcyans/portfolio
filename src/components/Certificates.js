import React, { useState, useEffect, useMemo } from 'react';

// Static data moved outside the component.
const certificateCategories = {
  row1: [
    {
      category: "HTML & CSS Certificates",
      certificates: [
        { title: "HTML Essential Training", issuer: "LinkedIn Learning", date: "-Feb 09, 2025", pdfLink: "/certificates/HTML-Essential-Training.jpg" },
        { title: "CSS Essential Training", issuer: "LinkedIn Learning", date: "-Feb 26, 2025", pdfLink: "/certificates/CSS-Essential-Training.jpg" },
        { title: "Responsive Web Design", issuer: "freeCodeCamp", date: "-Feb 02, 2025", pdfLink: "/certificates/Certificate-ResponsiveWebDesign.jpg" },
      ],
    },
    {
      category: "JavaScript Certificates",
      certificates: [
        { title: "Learning JavaScript Language", issuer: "LinkedIn Learning", date: "-Feb 04, 2025", pdfLink: "/certificates/Learning-the-JavaScript-Language.jpg" },
        { title: "JavaScript Algorithms & Data Structures", issuer: "freeCodeCamp", date: "-Mar 2025", pdfLink: "/certificates/Certificate-Javascript.jpg" },
      ],
    },
  ],
  row2: [
    {
      category: "React Certificate",
      certificates: [
        { title: "Front End Development Libraries", issuer: "freeCodeCamp", date: "-Apr 2025", pdfLink: "/certificates/Certificate-FrontEndDev.jpg" },
      ],
    },
    {
      category: "Node.js & PHP Certificates",
      certificates: [
        { title: "Back End Development and APIs", issuer: "freeCodeCamp", date: "-May 20, 2025", pdfLink: "/certificates/Certificate-BackEndDev.jpg" },
        { title: "Introduction to PHP", issuer: "Simplilearn", date: "-June 07, 2025", pdfLink: "/certificates/PHP-Introduction.jpg" },
      ],
    },
  ],
};

const Certificates = () => {
  // Flatten the certificate list and memoize it.
  const certificateList = useMemo(() => {
    const list = [];
    Object.values(certificateCategories).forEach((row) => {
      row.forEach((categoryObj) => {
        categoryObj.certificates.forEach((cert) => {
          list.push({ ...cert, category: categoryObj.category });
        });
      });
    });
    return list;
  }, []);

  // State for current certificate index and maximum image height.
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxImageHeight, setMaxImageHeight] = useState(0);

  // Preload images to compute the maximum natural height.
  useEffect(() => {
    let maxH = 0;
    let loadedCount = 0;
    certificateList.forEach((cert) => {
      const img = new Image();
      img.src = cert.pdfLink;
      img.onload = () => {
        loadedCount++;
        if (img.naturalHeight > maxH) {
          maxH = img.naturalHeight;
        }
        if (loadedCount === certificateList.length) {
          setMaxImageHeight(maxH || 300);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === certificateList.length) {
          setMaxImageHeight(maxH || 300);
        }
      };
    });
  }, [certificateList]);

  // Navigation handlers.
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificateList.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === certificateList.length - 1 ? 0 : prev + 1
    );
  };

  // Auto-advance using setTimeout that resets on each currentIndex change.
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === certificateList.length - 1 ? 0 : prev + 1
      );
    }, 6000);
    return () => clearTimeout(timer);
  }, [currentIndex, certificateList.length]);

  // Get current certificate data.
  const currentCertificate = certificateList[currentIndex];
  const imageUrl = currentCertificate.pdfLink;
  const pdfUrl = imageUrl.replace('.jpg', '.pdf');

  return (
    <section
      id="certificates"
      className="pb-16 pt-8 bg-gradient-to-b from-royal-indigo to-indigo-950"
    >
      <div className="container mx-auto relative">
        <h2 className="text-3xl text-cyan-200 text-center mb-6">Certificates</h2>
        <div className="relative max-w-lg mx-auto">
          {/* Certificate Card with fixed overall height */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center transition duration-300 h-[600px] flex flex-col">
            {/* Certificate Category Heading */}
            <h2 className="text-2xl font-extrabold text-cyan-200 mb-4">
              {currentCertificate.category}
            </h2>
            {/* Image Container */}
            <div
              className="w-full flex justify-center items-center mb-4 overflow-hidden"
              style={{
                height: maxImageHeight ? `${maxImageHeight}px` : '400px',
              }}
            >
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={imageUrl}
                  alt={currentCertificate.title}
                  className="max-w-full max-h-full object-contain rounded-md"
                />
              </a>
            </div>
            {/* Certificate Details */}
            <h3 className="text-xl font-bold text-cyan-100">
              {currentCertificate.title}
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Issued by <strong>{currentCertificate.issuer}</strong>{' '}
              {currentCertificate.date}
            </p>
            {/* Button linking to the PDF */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 border border-cyan-200 text-cyan-200 rounded hover:bg-cyan-200 hover:text-indigo-950 transition"
            >
              View PDF
            </a>
          </div>

          {/* Desktop Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="hidden sm:block absolute -left-24 top-1/2 transform -translate-y-1/2 text-6xl text-cyan-200 hover:text-white focus:outline-none"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="hidden sm:block absolute -right-24 top-1/2 transform -translate-y-1/2 text-6xl text-cyan-200 hover:text-white focus:outline-none"
          >
            &#8594;
          </button>

          {/* Mobile Navigation Arrows positioned below the card, side by side, smaller */}
          <div className="flex justify-between items-center sm:hidden mt-4">
            <button
              onClick={handlePrev}
              className="text-3xl text-cyan-200 hover:text-white focus:outline-none"
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              className="text-3xl text-cyan-200 hover:text-white focus:outline-none"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;