import React from 'react';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold">MF14 PROTECTION</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Spécialiste en équipements de protection individuelle CBRN. 
              Votre sécurité est notre priorité absolue depuis plus de 15 ans.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>contact@mf14protection.fr</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Conditions de vente</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Politique de confidentialité</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Livraison & Retours</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Support technique</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 MF14 Protection. Tous droits réservés.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Certifié CE • Norme EN 136 • Qualité militaire
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;