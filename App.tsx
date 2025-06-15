import React from 'react';
import { useState, createContext, useContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import WhyProtect from './components/WhyProtect';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import UserDashboard from './components/UserDashboard';
import ImageCatalog from './components/ImageCatalog';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderSuccess from './components/OrderSuccess';
import AdminDashboard from './components/AdminDashboard';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeFromCart = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleOrderNow = () => {
    // Ajouter le produit principal au panier
    addToCart({
      id: '1',
      name: 'Masque MF14',
      price: 299.99,
      image: 'mask'
    });
    setShowCart(true);
  };

  const handleCheckout = () => {
    setShowCart(false);
    setShowCheckout(true);
  };

  const handleOrderSuccess = () => {
    setShowCheckout(false);
    clearCart();
    setShowOrderSuccess(true);
  };

  const cartContextValue: CartContextType = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartCount
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header 
          onUserClick={() => setShowDashboard(true)} 
          onCartClick={() => setShowCart(true)}
          onAdminClick={() => setShowAdminDashboard(true)}
          cartCount={getCartCount()}
        />
        <Hero onOrderNow={handleOrderNow} />
        <ProductShowcase onOrderNow={handleOrderNow} />
        <WhyProtect />
        <ImageCatalog />
        <NewsSection />
        <Footer />
        
        {showDashboard && <UserDashboard onClose={() => setShowDashboard(false)} />}
        <Cart 
          isOpen={showCart} 
          onClose={() => setShowCart(false)} 
          onCheckout={handleCheckout}
        />
        <Checkout 
          isOpen={showCheckout} 
          onClose={() => setShowCheckout(false)} 
          onSuccess={handleOrderSuccess}
        />
        <OrderSuccess 
          isOpen={showOrderSuccess} 
          onClose={() => setShowOrderSuccess(false)}
        />
        <AdminDashboard 
          isOpen={showAdminDashboard} 
          onClose={() => setShowAdminDashboard(false)}
        />
      </div>
    </CartContext.Provider>
  );
}

export default App;