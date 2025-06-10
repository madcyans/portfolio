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
      className={`bg-slate-950 py-4 fixed top-0 w-full z-50 transform transition-transform duration-300 border-b-4 border-orange-800 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="flex items-center justify-between px-4">
        {/* Logo */}
        <img 
          src="/logo192.png"
          alt="Cyan Towers"
          className="h-14 w-auto md:h-16 lg:h-18 xl:h-20"
        />

        <ul className="flex justify-center divide-x divide-cyan-400">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              {/* For internal anchor links, use the smooth scroll behavior */}
              {href.startsWith("/") ? (
                <Link to={href} className="text-white hover:text-gray-300">
                  <span className="inline-block px-4 py-2 text-sm md:text-base lg:text-md xl:text-lg">
                    {label}
                  </span>
                </Link>
              ) : (
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="text-cyan-100 hover:text-gray-300"
                >
                  <span className='inline-block px-2 xl:px-12 py-2 text-sm md:text-base lg:text-md xl:text-lg'>
                    {label}
                  </span>
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