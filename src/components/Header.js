import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const Header = () => {
  // State to control header visibility
  const [showHeader, setShowHeader] = useState(true);
  // A ref to keep track of the last scroll position
  const lastScrollY = useRef(0);

  // Listen to scroll events to show/hide the header based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Always show header when at the very top of the page.
      if (currentScrollY === 0) {
        setShowHeader(true);
      } else if (currentScrollY < lastScrollY.current) {
        // User scrolled up.
        setShowHeader(true);
      } else {
        // User scrolled down.
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
    { href: "/resume", label: "Resume" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    // Using fixed positioning so the header stays at the top of the viewport.
    // The transform classes animate the header sliding in and out.
    <header
      className={`bg-slate-950 py-6 fixed top-0 w-full z-50 transform transition-transform duration-300 border-b-4 border-orange-800 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav>
        <ul className="flex justify-center space-x-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              {href.startsWith("/") ? (
                <Link className="text-white hover:text-gray-300" to={href}>
                  {label}
                </Link>
              ) : (
                <a className="text-white hover:text-gray-300" href={href}>
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