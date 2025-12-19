import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Maintenance } from './pages/Maintenance';
import { ContactUs } from './pages/ContactUs';
import { ServiceDetail } from './pages/ServiceDetail';
import { ProductDetail } from './pages/ProductDetail';
import { NotFound } from './pages/NotFound';
import { NavBar } from './components/navbar/NavBar';
import { Footer } from './components/layout/Footer';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  useSmoothScroll();

  return (
    <div id="smooth-wrapper" className="min-h-screen bg-white font-sans text-slate-900">
      <div id="smooth-content">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
