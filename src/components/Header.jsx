import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import { socialLinks } from "../data/socialLinks";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <img
            src="/images/Alogo.png"
            alt="A"
            className="w-14 h-14 rounded-full border-2 border-blue-500 shadow-md"
          />
          <h1 className="text-xl font-bold tracking-wide">Apoorv Jain</h1>
        </div>
        <a
          href="https://drive.google.com/file/d/1qhEUFfQzxkDBKCSfiYTEmSwKIjkWc3Iu/view?usp=sharing"
          className="text-white hover:text-blue-400 text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>

        <a href="#projects" className="text-white hover:text-blue-400 text-lg">
          Projects
        </a>
        <a
          href="#publications"
          className="text-white hover:text-blue-400 text-lg"
        >
          Publications
        </a>

        <nav className="hidden md:flex space-x-6 items-center">
          {/* {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon size={24} />
            </a>
          ))} */}
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-white hover:text-gray-300 text-2xl transition-colors duration-300"
            >
              <link.icon size={24} />
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="flex flex-col space-y-4 p-4 text-center text-white">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center space-x-2"
              >
                <Icon size={24} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
