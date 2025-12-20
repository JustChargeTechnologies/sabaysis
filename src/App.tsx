import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Maintenance } from './pages/Maintenance';
import { ContactUs } from './pages/ContactUs';
import { ServiceDetail } from './pages/ServiceDetail';
import { ProductDetail } from './pages/ProductDetail';
import { ProductCatalog } from './pages/ProductCatalog'; 
import { NotFound } from './pages/NotFound';
import { NavBar } from './components/navbar/NavBar';
import { Footer } from './components/layout/Footer';
import { useSmoothScroll } from './hooks/useSmoothScroll';

import { Login } from './pages/admin/Login';
import { Messages } from './pages/admin/Messages';
import { Products } from './pages/admin/Products';
import { AdminLayout, ProtectedRoute } from './components/admin/AdminLayout';

import { ScrollToTop } from './components/layout/ScrollToTop';

function App() {
  useSmoothScroll();

  return (
    <div id="smooth-wrapper" className="min-h-screen bg-white font-sans text-slate-900">
      <ScrollToTop />
      <Routes>
          <Route
          path="/*"
          element={
            <>
              <NavBar />
              <div id="smooth-content" className="pt-16 lg:pt-20">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/maintenance" element={<Maintenance />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="/services/:slug" element={<ServiceDetail />} />
                  <Route path="/products" element={<ProductCatalog />} /> 
                  <Route path="/products/:slug" element={<ProductDetail />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
              </div>
            </>
          }
        />
        <Route path="/admin/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="messages" replace />} />
            <Route path="messages" element={<Messages />} />
            <Route path="products" element={<Products />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
