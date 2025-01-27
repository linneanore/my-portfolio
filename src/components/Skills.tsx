const skills = [
  { name: "HTML", level: "Avancerad" },
  { name: "CSS", level: "Avancerad" },
  { name: "JavaScript", level: "Avancerad" },
  { name: "TypeScript", level: "Medel" },
  { name: "React", level: "Avancerad" },
  { name: "Node.js", level: "Medel" },
  { name: "Tailwind CSS", level: "Avancerad" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">Färdigheter</h2>
        <p className="text-lg text-gray-300 mb-10">
          Här är några av de teknologier jag arbetar med.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-white">{skill.name}</h3>
              <p className="text-gray-400">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;