import React from 'react';

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express"
];

const liClasses = "px-4 bg-blue-500 text-white rounded";

const Skills = () => (
  <section id="skills" className="py-2 bg-blue-950">
    <div className="max-w-3xl mx-auto px-4 bg-orange-800">
      <div className='mx-auto mx-14 px-8 sm:mx-14 sm:px-8 md:mx-24 md:px-12 lg:mx-30 lg:px-16 xl:mx-36 xl:px-20'>
        <h2 className="text-3xl font-bold text-center mb-4">Skills</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <li key={skill} className={liClasses}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;