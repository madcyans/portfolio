import React from 'react';

// NavLink component for navigation links
// React component that renders a styled link
// Accepts 'href' for the link destination and 'children' for the link text
const NavLink = ({ href, children }) => {
  const linkClasses = "text-white hover:text-gray-300";
  return (
    <a className={linkClasses} href={href}>
      {children}
    </a>
  );
};

// Header component that contains the navigation bar
// Renders a header with navigation links
const Header = () => (
  <header className="bg-gray-800 py-4">
    <nav>
      <ul className="flex justify-center space-x-6">
        <li><NavLink href="#hero">Home</NavLink></li>
        <li><NavLink href="#about">About</NavLink></li>
        <li><NavLink href="#skills">Skills</NavLink></li>
        <li><NavLink href="#projects">Projects</NavLink></li>
        <li><NavLink href="#resume">Resume</NavLink></li>
        <li><NavLink href="#contact">Contact</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;