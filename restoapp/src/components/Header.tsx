import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, signOut, loading } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-amber-600">Savory Delights</h1>
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
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
          
          {!loading && (
            <div className="flex items-center space-x-4 ml-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-gray-300">
                    Welcome, {user.user_metadata?.full_name || user.email}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Sign In
                </button>
              )}
            </div>
          )}
        </nav>
        {/* Mobile menu button and auth */}
        <div className="md:hidden flex items-center space-x-3">
          {!loading && !user && (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1 rounded text-sm"
            >
              Sign In
            </button>
          )}
          <button onClick={toggleMenu} className="text-gray-300">
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 px-4 py-2">
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
            
            {!loading && user && (
              <div className="border-t border-gray-700 pt-3 mt-3">
                <div className="text-gray-300 py-2">
                  Welcome, {user.user_metadata?.full_name || user.email}
                </div>
                <button
                  onClick={() => {
                    handleSignOut();
                    toggleMenu();
                  }}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg w-full"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </nav>
      )}
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </header>
  );
};

export default Header;
