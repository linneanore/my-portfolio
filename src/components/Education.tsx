const educationData = [
  {
    degree: "Frontendutvecklare",
    school: "KYH Yrkeshögskola",
    period: "2023 - 2025",
    description: "Studerade webbutveckling med fokus på React, TypeScript, JavaScript och tillgänglighet (WCAG).",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">Utbildning</h2>
        <p className="text-lg text-gray-300 mb-10">
          Här är en översikt över min utbildningsbakgrund.
        </p>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold">{edu.degree}</h3>
              <p className="text-blue-400 font-semibold">{edu.school} - {edu.period}</p>
              <p className="text-gray-300 mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;