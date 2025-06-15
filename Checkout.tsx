import React, { useState } from 'react';
import { CreditCard, MapPin, User, Shield, ArrowLeft, Lock } from 'lucide-react';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const Checkout = ({ isOpen, onClose, onSuccess }: CheckoutProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Shipping
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'France',
    
    // Payment
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Process payment
      setTimeout(() => {
        onSuccess();
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="h-6 w-6" />
                </button>
              )}
              <h1 className="text-3xl font-bold">Commande</h1>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((stepNum) => (
                <React.Fragment key={stepNum}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= stepNum ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-400'
                  }`}>
                    {stepNum}
                  </div>
                  {stepNum < 3 && (
                    <div className={`w-16 h-1 ${step > stepNum ? 'bg-green-600' : 'bg-gray-700'}`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Shipping Information */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-6">
                  <MapPin className="h-6 w-6 text-green-400" />
                  <h2 className="text-xl font-semibold">Informations de livraison</h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Prénom *</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-green-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Nom *</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-green-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-green-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Téléphone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-green-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Adresse *</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-green-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Ville *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-green-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Code postal *</label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-green-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Pays *</label>
                    <select
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-green-400 focus:outline-none"
                    >
                      <option>France</option>
                      <option>Belgique</option>
                      <option>Suisse</option>
                      <option>Luxembourg</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Payment Information */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-6">
                  <CreditCard className="h-6 w-6 text-green-400" />
                  <h2 className="text-xl font-semibold">Informations de paiement</h2>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2 text-green-400 mb-2">
                    <Lock className="h-4 w-4" />
                    <span className="text-sm font-medium">Paiement sécurisé SSL</span>
                  </div>
                  <p className="text-sm text-gray-400">Vos informations de paiement sont cryptées et sécurisées</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Nom sur la carte *</label>
                  <input
                    type="text"
                    required
                    value={formData.cardName}
                    onChange={(e) => handleInputChange('cardName', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-green-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Numéro de carte *</label>
                  <input
                    type="text"
                    required
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-green-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Date d'expiration *</label>
                    <input
                      type="text"
                      required
                      placeholder="MM/AA"
                      value={formData.expiryDate}
                      onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-green-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">CVV *</label>
                    <input
                      type="text"
                      required
                      placeholder="123"
                      value={formData.cvv}
                      onChange={(e) => handleInputChange('cvv', e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-green-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Order Summary */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Shield className="h-6 w-6 text-green-400" />
                  <h2 className="text-xl font-semibold">Récapitulatif de commande</h2>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 space-y-4">
                  <div className="flex justify-between">
                    <span>Masque MF14 x1</span>
                    <span>€299.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Livraison express</span>
                    <span className="text-green-400">Gratuite</span>
                  </div>
                  <div className="border-t border-gray-700 pt-4 flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-green-400">€299.99</span>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Adresse de livraison</h3>
                  <p className="text-gray-400">
                    {formData.firstName} {formData.lastName}<br />
                    {formData.address}<br />
                    {formData.postalCode} {formData.city}<br />
                    {formData.country}
                  </p>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-4">
                  <p className="text-yellow-400 text-sm">
                    ⚠️ En passant cette commande, vous confirmez avoir lu et accepté nos conditions de vente 
                    et notre politique de confidentialité.
                  </p>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              {step === 1 && 'Continuer vers le paiement'}
              {step === 2 && 'Vérifier la commande'}
              {step === 3 && 'Confirmer et payer €299.99'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;