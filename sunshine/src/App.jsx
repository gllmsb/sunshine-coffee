import './App.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HeaderImage } from './components/HeaderImage/HeaderImage';
import { InfoSection } from './components/InfoSection/InfoSection';
import { ShopNow } from './components/ShopNow/ShopNow';
import { Testimonies } from './components/Testimonies/Testimonies';
import { LoginPage } from './pages/LoginPage';
import { ProductPage } from './pages/ProductPage';
import { CartProvider } from './components/CartProvider/CartProvider';
import { Cart } from './components/Cart/Cart';

function MainContent() {
  return (
    <>
      <HeaderImage />
      <InfoSection />
      <ShopNow />
      <Testimonies />
    </>
  );
}

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartProvider>
      <Router>
        <Header openCart={openCart} /> 
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
        <Footer />
        {isCartOpen && <Cart onClose={closeCart} />} 
      </Router>
    </CartProvider>
  );
}

export default App;
