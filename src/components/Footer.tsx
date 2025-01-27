const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-bold">Tack för att du besöker min portfolio!</p>

        <div className="mt-4 flex justify-center space-x-6">
          <a href="https://github.com/ditt-github" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/ditt-linkedin" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition">
            LinkedIn
          </a>
          <a href="mailto:dinemail@example.com" className="text-blue-400 hover:text-blue-600 transition">
            E-post
          </a>
        </div>

        <p className="mt-6 text-gray-400 text-sm">© {new Date().getFullYear()} Linnea Nore. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
};

export default Footer;