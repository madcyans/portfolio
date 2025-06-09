import React from 'react';

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "PHP",
  "XAMPP",
];

const Skills = () => (
  <section id="skills" className="py-2 bg-blue-950">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl text-cyan-200 text-center mt-8 tracking-wider">Skills</h2>
    </div>

    <div className="max-w-full mx-auto py-2 pb-6 rounded-3xl">
      <div className="bg-gradient-to-b from-indigo-950/5 via-slate-950/50 to-indigo-950/5 rounded-3xl p-8">
        <div className="md:mx-2 md:px-2 lg:mx-4 lg:px-4 xl:mx-6 xl:px-6">
          <ul className="flex flex-wrap justify-center gap-12">
            {skills.map((skill) => (
              <li key={skill} className=" py-2 px-6 rounded-3xl p-8 bg-[radial-gradient(circle,_rgba(30,64,175)_0%,_rgba(30,64,175,0.2)_100%)] text-cyan-100 rounded-xl text-2xl">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;