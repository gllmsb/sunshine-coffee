import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { HeaderImage } from './components/HeaderImage/HeaderImage'
import { InfoSection } from './components/InfoSection/InfoSection'
import { ShopNow } from './components/ShopNow/ShopNow'
import { Testimonies } from './components/Testimonies/Testimonies'
import { LoginPage } from './pages/LoginPage'
import { ProductPage } from './pages/ProductPage';



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
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
