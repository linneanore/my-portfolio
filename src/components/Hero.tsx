import profileImage from "../assets/me.jpg"

const Hero = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white text-center md:text-left px-6">
      <div className="max-w-3xl md:w-1/2">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Hej, jag heter <span className="text-blue-400">Linnea</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Jag är en frontendutvecklare med intresse för att bygga användarvänliga webbplatser.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <a href="#projects" className="px-8 py-4 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition">
            Se mina projekt
          </a>
          <a href="#contact" className="px-8 py-4 border border-blue-500 text-blue-500 font-bold rounded-lg hover:bg-blue-500 hover:text-white transition">
            Kontakta mig
          </a>
        </div>
      </div>
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={profileImage}
          alt="Bild av mig"
          className="w-64 h-64 rounded-full border-4 border-blue-400 shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;