import React from 'react';
import { AlertTriangle, Shield, Zap, Users, Globe, Clock } from 'lucide-react';

const WhyProtect = () => {
  const threats = [
    {
      icon: AlertTriangle,
      title: "Menaces chimiques",
      description: "Gaz toxiques, agents chimiques industriels, pesticides concentrés",
      examples: ["Chlore", "Ammoniac", "Acides", "Solvants"]
    },
    {
      icon: Zap,
      title: "Agents biologiques",
      description: "Virus, bactéries, spores et autres agents pathogènes aéroportés",
      examples: ["Anthrax", "Ricine", "Toxines", "Virus"]
    },
    {
      icon: Shield,
      title: "Radiations",
      description: "Particules radioactives et contamination nucléaire",
      examples: ["Iode-131", "Césium-137", "Plutonium", "Uranium"]
    }
  ];

  const statistics = [
    { number: "15,000+", label: "Incidents chimiques/an en Europe", icon: Globe },
    { number: "30 sec", label: "Temps critique pour se protéger", icon: Clock },
    { number: "99.97%", label: "Efficacité de filtration MF14", icon: Shield },
    { number: "24/7", label: "Support d'urgence disponible", icon: Users }
  ];

  return (
    <section id="protection" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Pourquoi se <span className="text-red-400">protéger</span> ?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dans un monde où les menaces CBRN sont réelles et imprévisibles, 
            la préparation n'est plus une option mais une nécessité.
          </p>
        </div>

        {/* Threat Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {threats.map((threat, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-red-400/50 transition-all">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-red-600/20 rounded-xl">
                  <threat.icon className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold">{threat.title}</h3>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {threat.description}
              </p>
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-300">Exemples courants :</p>
                <div className="flex flex-wrap gap-2">
                  {threat.examples.map((example, idx) => (
                    <span key={idx} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-700/30 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Statistiques alarmantes</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-red-600/20 rounded-xl">
                    <stat.icon className="h-6 w-6 text-red-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-red-400 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Scenarios */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <AlertTriangle className="h-6 w-6 text-yellow-400 mr-2" />
              Scénarios réels
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-red-400 pl-4">
                <p className="font-medium">Accident industriel</p>
                <p className="text-sm text-gray-400">Fuite de chlore dans une usine chimique - 15 minutes pour évacuer</p>
              </div>
              <div className="border-l-4 border-orange-400 pl-4">
                <p className="font-medium">Incident de transport</p>
                <p className="text-sm text-gray-400">Camion-citerne renversé sur autoroute - nuage toxique sur 5km</p>
              </div>
              <div className="border-l-4 border-yellow-400 pl-4">
                <p className="font-medium">Catastrophe naturelle</p>
                <p className="text-sm text-gray-400">Incendie d'usine - fumées toxiques pendant plusieurs jours</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Shield className="h-6 w-6 text-green-400 mr-2" />
              Votre protection
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Détection précoce</p>
                  <p className="text-sm text-gray-400">Systèmes d'alerte et protocoles d'urgence</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Équipement certifié</p>
                  <p className="text-sm text-gray-400">Masque MF14 testé selon normes militaires</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Formation incluse</p>
                  <p className="text-sm text-gray-400">Manuel détaillé et support technique 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-600/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ne laissez pas le hasard décider</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Chaque seconde compte en cas d'urgence. Équipez-vous dès maintenant 
              avec le masque MF14 et protégez ce qui compte le plus : votre vie.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              Protégez-vous maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyProtect;