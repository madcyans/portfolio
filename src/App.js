import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import ResumePage from './pages/ResumePage';  // The resume page
import QuoteMachine from './components/QuoteMachine';
import CircleNavigator from './components/CircleNavigator';

const Portfolio = () => (
  <div className="text-white relative" style={{ fontFamily: "'Poppins', serif" }} >
    {/* Header stays above the mist */}
    <Header />
    
    {/* Global vertical line remains in place */}
    <div className="hidden lg:block">
      <CircleNavigator />
    </div>
    {/* Main content container that gets the mist overlay */}
    <div className="relative z-20">
      {/* Mist overlay covers only the main content container */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: "url('/images/mist.png')", // mist image in public/images folder
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.10, // Adjust the opacity for a subtle effect
        }}
      ></div>
      
      {/* Main page components that display content */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
    
    {/* Footer remains unaffected by the mist */}
    <QuoteMachine />
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/resume-page" element={<ResumePage />} />
    </Routes>
  </Router>
);

export default App;