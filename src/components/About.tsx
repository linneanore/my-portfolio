const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white flex justify-center px-6 md:px-20">
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">Om mig</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Jag är en passionerad frontendutvecklare med ett stort intresse för att skapa
          moderna, användarvänliga och tillgängliga webbapplikationer. Jag har erfarenhet
          av att arbeta med teknologier som React, TypeScript, och Tailwind CSS.
        </p>
        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          Mitt mål är att alltid leverera högkvalitativa lösningar som kombinerar snygg design
          med funktionalitet och tillgänglighet.
        </p>
        <div className="mt-8">
          <a href="#projects" className="px-8 py-4 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition">
            Se mina projekt
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;