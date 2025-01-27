const experiences = [

  {
    title: "Felsökare",
    company: "Footway",
    period: "2020 - 2023",
    description: "Ansvarade för felsökning av SynQ robotsystem från Swisslog, samt hantering av WMS-system och varumottagning.",
  },
  {
    title: "Lagerarbetare",
    company: "Footway",
    period: "2019 - 2023",
    description: "Arbetade som truckförare och hanterade varuflöden inom e-handelslager.",
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">Arbetslivserfarenhet</h2>
        <p className="text-lg text-gray-300 mb-10">
          Här är en översikt över min arbetslivserfarenhet.
        </p>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="p-6 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold">{exp.title}</h3>
              <p className="text-blue-400 font-semibold">{exp.company} - {exp.period}</p>
              <p className="text-gray-300 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;