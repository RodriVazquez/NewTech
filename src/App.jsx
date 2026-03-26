import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Carreras from './pages/Carreras';
import CarreraDetail from './pages/CarreraDetail';
import Cursos from './pages/Cursos';
import CursoDetail from './pages/CursoDetail';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-slate-50">
        <Navbar />
        <div className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carreras" element={<Carreras />} />
            <Route path="/carreras/:id" element={<CarreraDetail />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/cursos/:id" element={<CursoDetail />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
