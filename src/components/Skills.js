import React from 'react';

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express"
];

const Skills = () => (
  <section id="skills" className="py-2 bg-blue-950">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Skills</h2>
    </div>

    <div className="max-w-3xl mx-auto px-4 bg-gradient-to-r from-gray-300 to-gray-100 py-8 rounded-3xl">
      <div className="md:mx-2 md:px-2 lg:mx-4 lg:px-4 xl:mx-6 xl:px-6">
        <ul className="flex flex-wrap justify-center gap-8">
          {skills.map((skill) => (
            <li key={skill} className="px-4 bg-blue-500 text-white rounded">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;