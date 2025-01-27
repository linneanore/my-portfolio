import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="text-2xl font-bold tracking-wide">
          Min Portfolio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-400 transition duration-300">Om mig</a>
          <a href="#projects" className="hover:text-blue-400 transition duration-300">Projekt</a>
          <a href="#skills" className="hover:text-blue-400 transition duration-300">Färdigheter</a>
          <a href="#contact" className="hover:text-blue-400 transition duration-300">Kontakt</a>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-gray-800 transition-transform transform ${menuOpen ? "translate-y-0" : "-translate-y-full"
          } absolute top-16 left-0 w-full flex flex-col items-center gap-4 py-4`}
      >
        <a href="#about" className="hover:text-blue-400 transition duration-300" onClick={() => setMenuOpen(false)}>
          Om mig
        </a>
        <a href="#projects" className="hover:text-blue-400 transition duration-300" onClick={() => setMenuOpen(false)}>
          Projekt
        </a>
        <a href="#skills" className="hover:text-blue-400 transition duration-300" onClick={() => setMenuOpen(false)}>
          Färdigheter
        </a>
        <a href="#contact" className="hover:text-blue-400 transition duration-300" onClick={() => setMenuOpen(false)}>
          Kontakt
        </a>
      </div>
    </nav>
  );
};

export default Navbar;