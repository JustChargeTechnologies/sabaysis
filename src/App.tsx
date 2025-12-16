import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Maintenance } from './pages/Maintenance';
import { ContactUs } from './pages/ContactUs';
import { NavBar } from './components/navbar/NavBar';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
