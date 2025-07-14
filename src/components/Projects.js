import React, { useState, useEffect } from 'react';

const Projects = () => {
  // Initialize state with placeholder projects.
  const [projects, setProjects] = useState([
    {
      id: 'ridiculous-quiz-game',
      title: 'Ridiculous Quiz Game',
      description:
        'An engaging quiz game that challenges your knowledge with a variety of questions, built with React/Tailwind using a custom useQuiz hook, Firebase for auth and scores, and dynamic audio effects and transitions for a playful duck-themed trivia experience.',
      url: 'https://auth-boilerplate-2339d.web.app',
      image: '/images/rqgduck.png',
    },
    {
      id: 'quote-generator',
      title: 'Random Quote Generator',
      description:
        'A sleek and interactive web app built with React, designed to deliver thought-provoking, motivational, or humorous quotes at the click of a button.',
      url: 'https://random-quote-generator-madcyans-projects.vercel.app/',
      image: '/images/quote.png',
    },
    {
      id: 'calculator',
      title: 'Calculator',
      description:
        'A simple yet elegant calculator application built with React, featuring basic arithmetic operations and a user-friendly interface.',
      url: 'https://javascript-calculator-silk.vercel.app/',
      image: '/images/calculator.png',
    },
    {
      id: 'drum-machine',
      title: 'Drum Machine',
      description:
        'A fun and interactive drum machine built with React, allowing users to create beats and rhythms using a variety of drum sounds.',
      url: 'https://drum-machine-livid.vercel.app/',
      image: '/images/drum.png',
    },
    {
      id: 'memory-matching-game',
      title: 'Memory Matching Game',
      description:
        'A classic memory matching game enhanced with an API Weather Checker that dynamically updates the background based on your current weather. Test your memory while enjoying an interactive visual experience.',
      url: 'https://memory-matching-game-nine.vercel.app/',
      image: '/images/match.png',
    },
    {
      id: 'nature-architecture-gallery',
      title: 'Nature & Architecture Gallery',
      description:
        'A captivating collection of breathtaking landscapes and stunning architectural designs, seamlessly showcased through PHP and XAMPP. Explore the beauty of nature and human creativity, brought to life with dynamic web technology. Stay connected—contact details are securely stored and managed with MySQL for easy access and interaction.',
      url: 'https://syantorres.infinityfreeapp.com/',
      image: '/images/nature.png',
    },
  ]);

  useEffect(() => {
    // Attempt to fetch projects from the backend API.
    fetch('http://localhost:5000/projects')
      .then((res) => res.json())
      .then((data) => {
        // Update state only if we retrieve a non-empty array.
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data);
        }
      })
      .catch((err) => {
        console.error('Error fetching projects:', err);
        // If an error occurs, the placeholder projects remain.
      });
  }, []);

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-blue-950 to-royal-indigo">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
        <h2 className="text-3xl text-cyan-200 text-center mb-6">Projects</h2>
        {/* Use a flex container that wraps */}
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project) => (
            // Responsive width classes: full width on mobile, one-third on md and above.
            <div key={project.id} className="w-full md:w-1/3 pb-16">
              <div className="relative group">
                <div className="relative h-48">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
                    />
                  </a>
                </div>
                <div
                  className="
                    absolute bottom-0 left-0 w-full
                    transform translate-y-1/2
                    bg-white px-2 py-2
                    rounded-lg border border-orange-500
                    transition-transform duration-500
                    group-hover:translate-y-[120%]
                  "
                >
                  <h3 className="text-lg text-center font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p
                    className="
                      text-sm text-gray-700 
                      overflow-hidden 
                      transition-all duration-500 
                      max-h-20
                      group-hover:max-h-0
                      group-hover:rounded
                    "
                  >
                    {project.description}
                  </p>
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