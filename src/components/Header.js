import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // State to control header visibility
  const [showHeader, setShowHeader] = useState(true);
  // A ref to keep track of the last scroll position
  const lastScrollY = useRef(0);

  // Listen to scroll events to show/hide the header based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setShowHeader(true);
      } else if (currentScrollY < lastScrollY.current) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" }
  ];

  // onClick handler to scroll such that the target element is centered
  const handleNavClick = (e, href) => {
    e.preventDefault(); // Prevent the default jump
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <header
      className={`bg-slate-950 py-6 fixed top-0 w-full z-50 transform transition-transform duration-300 border-b-4 border-orange-800 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav>
        <ul className="flex justify-center space-x-6 md:space-x-12">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              {/* For internal anchor links, use the smooth scroll behavior */}
              {href.startsWith("/") ? (
                <Link className="text-xs md:text-base text-white hover:text-gray-300" to={href}>
                  {label}
                </Link>
              ) : (
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="text-xs md:text-base text-white hover:text-gray-300"
                >
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;