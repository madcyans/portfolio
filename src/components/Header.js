import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // State for header visibility on scroll
  const [showHeader, setShowHeader] = useState(true);
  // New state for controlling the mobile hamburger menu
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Listen to scroll events to show/hide header and close the menu if necessary
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0 || currentScrollY < lastScrollY.current) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
        setMenuOpen(false); // Close the mobile menu on scroll
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" }
  ];

  // This function handles navigation clicks with smooth scrolling
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`bg-slate-950 py-4 fixed top-0 w-full z-50 transition-transform duration-300 border-b-4 border-orange-800 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="flex items-center justify-between px-4">
        {/* Logo on the left */}
        <img
          src="/logo192.png" // Replace with your actual logo path
          alt="Cyanide Towers"
          className="h-10 w-auto md:h-12 lg:h-14 xl:h-16"
        />

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex divide-x divide-cyan-400">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              {href.startsWith("/") ? (
                <Link to={href} className="text-white hover:text-gray-300 px-4 py-2 text-sm md:text-base">
                  {label}
                </Link>
              ) : (
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="text-cyan-100 hover:text-gray-300 px-4 py-2 text-sm md:text-base"
                >
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-cyan-400 focus:outline-none">
            {menuOpen ? (
              // Close icon (X) in cyan
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon in cyan
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-orange-800">
          {/* "items-end" aligns all items to the right */}
          <ul className="flex flex-col items-end">
            {navLinks.map(({ href, label }) => (
              <li key={href} className="border-b border-orange-800 w-full">
                {href.startsWith("/") ? (
                  <Link
                    to={href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-white hover:text-gray-300 px-4 py-2 text-sm text-right"
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className="block text-cyan-100 hover:text-gray-300 px-4 py-2 text-sm text-right"
                  >
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;