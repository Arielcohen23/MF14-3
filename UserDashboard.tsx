import React, { useState } from 'react';
import { User, Package, MapPin, CreditCard, Settings, LogOut, Eye, Download, Truck } from 'lucide-react';

interface Order {
  id: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  total: number;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  trackingNumber?: string;
}

const UserDashboard = ({ onClose }: { onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState('orders');
  
  const mockOrders: Order[] = [
    {
      id: 'MF14-2025-001',
      date: '15 Janvier 2025',
      status: 'shipped',
      total: 299.99,
      items: [{ name: 'Masque MF14', quantity: 1, price: 299.99 }],
      trackingNumber: 'FR123456789'
    },
    {
      id: 'MF14-2024-089',
      date: '28 Décembre 2024',
      status: 'delivered',
      total: 89.99,
      items: [{ name: 'Filtre de rechange MF14', quantity: 2, price: 44.99 }]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-400 bg-yellow-400/20';
      case 'processing': return 'text-blue-400 bg-blue-400/20';
      case 'shipped': return 'text-green-400 bg-green-400/20';
      case 'delivered': return 'text-gray-400 bg-gray-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'En attente';
      case 'processing': return 'En préparation';
      case 'shipped': return 'Expédié';
      case 'delivered': return 'Livré';
      default: return status;
    }
  };

  const tabs = [
    { id: 'orders', label: 'Mes commandes', icon: Package },
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'addresses', label: 'Adresses', icon: MapPin },
    { id: 'payment', label: 'Paiement', icon: CreditCard },
    { id: 'settings', label: 'Paramètres', icon: Settings }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-64 bg-gray-800 p-6 border-r border-gray-700">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-semibold">Jean Dupont</p>
                <p className="text-sm text-gray-400">Client Premium</p>
              </div>
            </div>

            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === tab.id 
                      ? 'bg-green-600 text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
              
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-all mt-8">
                <LogOut className="h-5 w-5" />
                <span>Déconnexion</span>
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold">
                  {tabs.find(tab => tab.id === activeTab)?.label}
                </h1>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div className="space-y-6">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">Commande #{order.id}</h3>
                          <p className="text-gray-400">{order.date}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                            {getStatusText(order.status)}
                          </span>
                          <span className="text-xl font-bold text-green-400">€{order.total}</span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-gray-300">
                            <span>{item.name} x{item.quantity}</span>
                            <span>€{(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>

                      {order.trackingNumber && (
                        <div className="bg-gray-700/50 rounded-lg p-3 mb-4">
                          <div className="flex items-center space-x-2">
                            <Truck className="h-4 w-4 text-green-400" />
                            <span className="text-sm text-gray-300">Numéro de suivi: </span>
                            <span className="font-mono text-green-400">{order.trackingNumber}</span>
                          </div>
                        </div>
                      )}

                      <div className="flex space-x-3">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
                          <Eye className="h-4 w-4" />
                          <span>Détails</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-600 hover:border-green-400 rounded-lg transition-colors">
                          <Download className="h-4 w-4" />
                          <span>Facture</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="max-w-2xl space-y-6">
                  <div className="bg-gray-800 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Informations personnelles</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Prénom</label>
                        <input type="text" defaultValue="Jean" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Nom</label>
                        <input type="text" defaultValue="Dupont" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white" />
                      </div>
                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                        <input type="email" defaultValue="jean.dupont@email.com" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white" />
                      </div>
                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-400 mb-2">Téléphone</label>
                        <input type="tel" defaultValue="+33 6 12 34 56 78" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white" />
                      </div>
                    </div>
                    <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">
                      Sauvegarder
                    </button>
                  </div>
                </div>
              )}

              {/* Other tabs content would go here */}
              {activeTab !== 'orders' && activeTab !== 'profile' && (
                <div className="text-center py-12">
                  <p className="text-gray-400">Contenu en développement...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;