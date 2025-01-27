const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">Kontakt</h2>
        <p className="text-lg text-gray-300 mb-10">
          Har du frågor eller vill samarbeta? Tveka inte att höra av dig!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left space-y-4">
            <p className="text-xl font-bold">Kontaktuppgifter:</p>
            <p className="text-gray-300">📧 E-post: <a href="mailto:nore.linnea@gmail.com" className="text-blue-400 hover:underline">nore.linnea@gmail.com</a></p>
            <p className="text-gray-300">📞 Telefon: +46 73 529 47 70</p>
            <p className="text-gray-300">📍 Plats: Eskilstuna, Sverige</p>
          </div>

          <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4 text-left">
            <div>
              <label className="block text-gray-400">Namn</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:ring focus:ring-blue-400"
                placeholder="Ditt namn"
              />
            </div>
            <div>
              <label className="block text-gray-400">E-post</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:ring focus:ring-blue-400"
                placeholder="Din e-post"
              />
            </div>
            <div>
              <label className="block text-gray-400">Meddelande</label>
              <textarea
                name="message"
                required
                className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:ring focus:ring-blue-400"
                placeholder="Skriv ditt meddelande här"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
            >
              Skicka meddelande
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;