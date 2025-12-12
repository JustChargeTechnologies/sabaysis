import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NavBar } from './components/navbar/NavBar';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
