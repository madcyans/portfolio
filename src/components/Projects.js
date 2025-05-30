import React, { useState, useEffect } from 'react';

const Projects = () => {
  // Initialize state with a placeholder project.
  const [projects, setProjects] = useState([
    {
      id: 'quote-generator',
      title: 'Random Quote Generator',
      description: 'A sleek and interactive web app built with React, designed to deliver thought-provoking, motivational, or humorous quotes at the click of a button.',
      url: 'https://random-quote-generator-madcyans-projects.vercel.app/',
      image: '/images/quote.png'
    },
    {
      id: 'calculator',
      title: 'Calculator',
      description: 'A simple yet elegant calculator application built with React, featuring basic arithmetic operations and a user-friendly interface.',
      url: 'https://javascript-calculator-silk.vercel.app/',
      image: '/images/calculator.png'
    },
    {
      id: 'drum-machine',
      title: 'Drum Machine',
      description: 'A fun and interactive drum machine built with React, allowing users to create beats and rhythms using a variety of drum sounds.',
      url: 'https://drum-machine-livid.vercel.app/',
      image: '/images/drum.png'
    },
    {
      id: 'memory-matching-game',
      title: 'Memory Matching Game',
      description: 'A classic memory matching game built with React, where players can test their memory skills by matching pairs of cards.',
      url: 'https://memory-matching-game-nine.vercel.app/',
      image: '/images/match.png'
    },
  ]);

  useEffect(() => {
    // Attempt to fetch projects from the backend API.
    fetch('http://localhost:5000/projects')
      .then((res) => res.json())
      .then((data) => {
        // Update state only if we retrieved a non-empty array.
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data);
        }
      })
      .catch((err) => {
        console.error('Error fetching projects:', err);
        // If an error occurs, the placeholder project remains.
      });
  }, []);

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-blue-950 to-royal-indigo">
      <div className="text-center mx-auto  mx-14 px-8 sm:mx-14 sm:px-8  md:mx-24 md:px-12 lg:mx-30 lg:px-16 xl:mx-36 xl:px-20">
        <h2 className="text-3xl font-bold text-center mx-auto mb-6 </div>">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="pb-16">
              <div className="relative group">
                {/* Clickable image card */}
                <div  className='relative h-48'>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_5px_5px_rgba(0,0,0,5)]"
                    />
                  </a>
                </div>
                {/* Overlapping description panel */}
                <div className="
                    absolute bottom-0 left-0 w-full
                    transform translate-y-1/2
                    bg-white bg-opacity-80 px-4 py-2
                    rounded-lg border border-orange-500
                    transition-transform duration-500
                    group-hover:translate-y-[120%]"
                >
                  <h3 className="text-lg text-center font-semibold text-gray-800">{project.title}</h3>
                  <p className="
                    text-sm text-gray-700 
                    overflow-hidden 
                    transition-all duration-500 
                    max-h-20 
                    group-hover:max-h-0
                    group-hover:rounded
                    "
                  >{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;