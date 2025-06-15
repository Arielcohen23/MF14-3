import React from 'react';
import { Shield, CheckCircle, Star, ShoppingCart, Plus } from 'lucide-react';
import { useCart } from '../App';

interface ProductShowcaseProps {
  onOrderNow: () => void;
}

const ProductShowcase = ({ onOrderNow }: ProductShowcaseProps) => {
  const { addToCart } = useCart();

  const specifications = [
    { label: "Type", value: "Masque complet CBRN" },
    { label: "Filtration", value: "20/2020 Auto-amorçage" },
    { label: "Protection", value: "Chimique, Biologique, Radiologique, Nucléaire" },
    { label: "Norme", value: "EN 136 Classe 2" },
    { label: "Matériau", value: "Silicone médical + Polycarbonate" },
    { label: "Durée de vie", value: "15+ ans avec entretien" }
  ];

  const features = [
    "Protection complète du visage et des voies respiratoires",
    "Filtre remplaçable haute efficacité",
    "Étanchéité parfaite testée en laboratoire",
    "Résistant aux agents chimiques corrosifs",
    "Compatible avec systèmes de communication",
    "Livré avec manuel d'utilisation détaillé"
  ];

  const handleAddToCart = () => {
    addToCart({
      id: '1',
      name: 'Masque MF14',
      price: 299.99,
      image: 'mask'
    });
  };

  const handleAddFilter = () => {
    addToCart({
      id: '2',
      name: 'Filtre de rechange',
      price: 44.99,
      image: 'filter'
    });
  };

  return (
    <section id="produits" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Masque à Gaz <span className="text-green-400">MF14</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            L'équipement de protection individuelle de référence pour faire face aux menaces CBRN. 
            Conçu selon les standards militaires les plus exigeants.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Product Details - Left Side */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-400">(47 avis clients)</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline space-x-4">
                <span className="text-4xl font-bold text-green-400">€299.99</span>
                <span className="text-xl text-gray-500 line-through">€399.99</span>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">-25%</span>
              </div>
              <p className="text-gray-400">TVA incluse • Livraison gratuite en France</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Caractéristiques principales</h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-gray-900/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="h-5 w-5 text-green-400 mr-2" />
                Spécifications techniques
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-gray-700 last:border-b-0">
                    <span className="text-gray-400">{spec.label}</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-700">
              <div className="text-center">
                <Shield className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <p className="text-sm font-semibold">Garantie 5 ans</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <p className="text-sm font-semibold">Certifié CE</p>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <p className="text-sm font-semibold">Qualité militaire</p>
              </div>
            </div>
          </div>

          {/* Product Images - Right Side */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="bg-gray-700 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <Shield className="h-32 w-32 text-green-400 mx-auto mb-6" />
                <p className="text-lg font-semibold mb-2">MF14 - Vue principale</p>
                <p className="text-gray-400">Image produit haute résolution</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-700 rounded-lg aspect-square flex items-center justify-center">
                  <Shield className="h-8 w-8 text-green-400" />
                </div>
              ))}
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-gray-400">Quantité:</label>
                <select className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>5</option>
                </select>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Ajouter au panier</span>
              </button>
              
              <button 
                onClick={onOrderNow}
                className="w-full border border-green-600 text-green-400 hover:bg-green-600 hover:text-white py-4 rounded-lg font-semibold transition-all"
              >
                Acheter maintenant
              </button>
              
              <button 
                onClick={handleAddFilter}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-medium transition-all flex items-center justify-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Ajouter filtre de rechange (€44.99)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;