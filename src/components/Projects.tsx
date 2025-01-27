const projects = [
  {
    title: "Cinecom – Biobokningssystem",
    description: "Ett biobokningssystem byggt med React, TypeScript och Supabase för realtidsuppdateringar.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    link: "https://github.com/ditt-repo/cinecom",
  },
  {
    title: "Tillgänglighetsanalys med WCAG",
    description: "En studie av tillgänglighet på populära webbplatser med hjälp av Lighthouse och Axe.",
    tech: ["Lighthouse", "Axe", "WCAG"],
    link: "https://github.com/ditt-repo/wcag-analysis",
  },
  {
    title: "Portfolio",
    description: "Min personliga portfolio byggd med React, TypeScript och Tailwind CSS.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    link: "https://github.com/ditt-repo/portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">Projekt</h2>
        <p className="text-lg text-gray-300 mb-10">
          Här är några av mina senaste projekt.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="mt-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="text-sm bg-blue-500 text-white px-3 py-1 rounded-full mr-2">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-400 hover:underline"
              >
                Se projektet →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;