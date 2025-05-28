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
      <h2 className="text-3xl font-bold text-center mb-4">Skills</h2>
      <ul className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <li key={skill} className={liClasses}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Skills;