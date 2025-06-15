import React, { useState } from 'react';
import { Shield, Menu, X, ShoppingCart, User, Search } from 'lucide-react';

interface HeaderProps {
  onUserClick: () => void;
  onCartClick: () => void;
  onAdminClick: () => void;
  cartCount: number;
}

const Header = ({ onUserClick, onCartClick, onAdminClick, cartCount }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm border-b border-green-900/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-green-400" />
            <span className="text-xl font-bold">MF14 PROTECTION</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-300 hover:text-green-400 transition-colors">Accueil</a>
            <a href="#produits" className="text-gray-300 hover:text-green-400 transition-colors">Produits</a>
            <a href="#protection" className="text-gray-300 hover:text-green-400 transition-colors">Pourquoi se protéger</a>
            <a href="#actualites" className="text-gray-300 hover:text-green-400 transition-colors">Actualités</a>
            <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
            <button 
              onClick={onAdminClick}
              className="text-xs bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded transition-colors"
              title="Dashboard Admin"
            >
              ADMIN
            </button>
            <User 
              className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" 
              onClick={onUserClick}
            />
            <div className="relative cursor-pointer" onClick={onCartClick}>
              <ShoppingCart className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2">
              <a href="#accueil" className="block px-3 py-2 text-gray-300 hover:text-green-400 transition-colors">Accueil</a>
              <a href="#produits" className="block px-3 py-2 text-gray-300 hover:text-green-400 transition-colors">Produits</a>
              <a href="#protection" className="block px-3 py-2 text-gray-300 hover:text-green-400 transition-colors">Pourquoi se protéger</a>
              <a href="#actualites" className="block px-3 py-2 text-gray-300 hover:text-green-400 transition-colors">Actualités</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-green-400 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;