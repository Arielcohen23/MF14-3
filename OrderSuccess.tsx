import React from 'react';
import { CheckCircle, Download, Package, Mail } from 'lucide-react';

interface OrderSuccessProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderSuccess = ({ isOpen, onClose }: OrderSuccessProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl w-full max-w-2xl p-8 text-center">
        <div className="mb-8">
          <CheckCircle className="h-20 w-20 text-green-400 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Commande confirmée !</h1>
          <p className="text-gray-400">Merci pour votre achat. Votre commande a été traitée avec succès.</p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-gray-400 text-sm">Numéro de commande</p>
              <p className="font-mono text-green-400 font-semibold">MF14-2025-002</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Montant total</p>
              <p className="font-semibold text-xl">€299.99</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Date de commande</p>
              <p className="font-semibold">16 Janvier 2025</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Livraison estimée</p>
              <p className="font-semibold text-green-400">18-20 Janvier 2025</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3 text-left">
            <Mail className="h-5 w-5 text-green-400" />
            <span className="text-gray-300">Un email de confirmation a été envoyé à votre adresse</span>
          </div>
          <div className="flex items-center space-x-3 text-left">
            <Package className="h-5 w-5 text-green-400" />
            <span className="text-gray-300">Vous recevrez un numéro de suivi dès l'expédition</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2">
            <Download className="h-5 w-5" />
            <span>Télécharger la facture</span>
          </button>
          <button
            onClick={onClose}
            className="flex-1 border border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 py-3 rounded-lg font-semibold transition-all"
          >
            Continuer mes achats
          </button>
        </div>

        <div className="mt-8 p-4 bg-green-900/20 border border-green-700/30 rounded-lg">
          <p className="text-green-400 text-sm">
            🛡️ Votre masque MF14 sera expédié dans un emballage discret et sécurisé. 
            Consultez le manuel d'utilisation dès réception.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;