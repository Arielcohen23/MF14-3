import React from 'react';
import { Calendar, ArrowRight, AlertTriangle, Shield, Globe } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Nouvelle certification EN 136 Classe 2 obtenue",
      excerpt: "Nos masques MF14 viennent d'obtenir la certification européenne la plus stricte pour les équipements de protection respiratoire.",
      date: "15 Janvier 2025",
      category: "Certification",
      icon: Shield,
      urgent: false
    },
    {
      id: 2,
      title: "Alerte sécurité : Mise à jour des protocoles CBRN",
      excerpt: "Suite aux dernières recommandations internationales, découvrez les nouvelles procédures de protection contre les menaces chimiques.",
      date: "12 Janvier 2025",
      category: "Sécurité",
      icon: AlertTriangle,
      urgent: true
    },
    {
      id: 3,
      title: "Expansion internationale : MF14 désormais disponible en Europe",
      excerpt: "Nous étendons notre réseau de distribution pour servir nos clients dans toute l'Union Européenne avec la même qualité de service.",
      date: "8 Janvier 2025",
      category: "International",
      icon: Globe,
      urgent: false
    }
  ];

  return (
    <section id="actualites" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Actualités & <span className="text-green-400">Alertes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Restez informé des dernières nouvelles en matière de protection CBRN, 
            certifications et évolutions réglementaires.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <article key={article.id} className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-green-400/50 transition-all group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`p-2 rounded-lg ${
                      article.urgent ? 'bg-red-600/20' : 'bg-green-600/20'
                    }`}>
                      <article.icon className={`h-5 w-5 ${
                        article.urgent ? 'text-red-400' : 'text-green-400'
                      }`} />
                    </div>
                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                      article.urgent 
                        ? 'bg-red-600/20 text-red-400' 
                        : 'bg-gray-700 text-gray-300'
                    }`}>
                      {article.category}
                    </span>
                  </div>
                  {article.urgent && (
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-semibold animate-pulse">
                      URGENT
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-green-400 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  
                  <button className="flex items-center space-x-1 text-green-400 hover:text-green-300 transition-colors group">
                    <span className="text-sm font-medium">Lire plus</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-600/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Restez informé</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Recevez les alertes de sécurité, les mises à jour produits et les actualités 
            importantes directement dans votre boîte mail.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
              S'abonner
            </button>
          </div>
          
          <p className="text-xs text-gray-400 mt-4">
            Pas de spam. Désabonnement possible à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;