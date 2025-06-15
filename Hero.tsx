import React from 'react';
import { AlertTriangle, Shield, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOrderNow: () => void;
}

const Hero = ({ onOrderNow }: HeroProps) => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/20"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%234ade80%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M0 40L40 0H20L0 20M40 40V20L20 40%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 text-red-400">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-medium">PROTECTION CBRN CERTIFIÉE</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-white">Masque à Gaz</span>
              <br />
              <span className="text-green-400">MF14</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl">
              Protection complète contre les menaces chimiques, biologiques, radiologiques et nucléaires. 
              Filtration 20/2020 certifiée pour votre sécurité absolue.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onOrderNow}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105"
              >
                <span>Commander maintenant</span>
                <ChevronRight className="h-5 w-5" />
              </button>
              <button className="border border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 px-8 py-4 rounded-lg font-semibold transition-all">
                Spécifications techniques
              </button>
            </div>
            
            {/* Key features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-green-400" />
                <div>
                  <p className="font-semibold">Protection CBRN</p>
                  <p className="text-sm text-gray-400">Certifiée mondiale</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-green-400 rounded-full flex items-center justify-center text-gray-900 font-bold">20</div>
                <div>
                  <p className="font-semibold">Filtration 20/2020</p>
                  <p className="text-sm text-gray-400">Auto-amorçage</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-8 w-8 text-yellow-400" />
                <div>
                  <p className="font-semibold">Urgence</p>
                  <p className="text-sm text-gray-400">Livraison rapide</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Product image placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-600">
              <div className="aspect-square bg-gray-600 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Shield className="h-24 w-24 text-green-400 mx-auto mb-4" />
                  <p className="text-gray-300 font-semibold">MF14 GAS MASK</p>
                  <p className="text-sm text-gray-400">Image haute résolution</p>
                </div>
              </div>
              
              {/* Price tag */}
              <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold">
                €299.99
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -z-10 top-10 -left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl"></div>
            <div className="absolute -z-10 bottom-10 -right-10 w-32 h-32 bg-red-400/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;