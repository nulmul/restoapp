import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-amber-600">Savory Delights</h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-300 hover:text-amber-500 font-medium">
            Home
          </a>
          <a href="#menu" className="text-gray-300 hover:text-amber-500 font-medium">
            Menu
          </a>
          <a href="#about" className="text-gray-300 hover:text-amber-500 font-medium">
            About
          </a>
          <a href="#testimonials" className="text-gray-300 hover:text-amber-500 font-medium">
            Reviews
          </a>
          <a href="#contact" className="text-gray-300 hover:text-amber-500 font-medium">
            Contact
          </a>
        </nav>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-gray-800 px-4 py-2">
          <div className="flex flex-col space-y-3">
            <a href="#home" className="text-gray-300 hover:text-amber-500 font-medium py-2" onClick={toggleMenu}>
              Home
            </a>
            <a href="#menu" className="text-gray-300 hover:text-amber-500 font-medium py-2" onClick={toggleMenu}>
              Menu
            </a>
            <a href="#about" className="text-gray-300 hover:text-amber-500 font-medium py-2" onClick={toggleMenu}>
              About
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-amber-500 font-medium py-2" onClick={toggleMenu}>
              Reviews
            </a>
            <a href="#contact" className="text-gray-300 hover:text-amber-500 font-medium py-2" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        </nav>}
    </header>;
};
export default Header;