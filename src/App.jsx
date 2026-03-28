import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Carreras from './pages/Carreras';
import CarreraDetail from './pages/CarreraDetail';
import Cursos from './pages/Cursos';
import CursoDetail from './pages/CursoDetail';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Faq from './pages/Faq';
import Comunidad from './pages/Comunidad';
import Becas from './pages/Becas';
import Metodologia from './pages/Metodologia';
import Egresados from './pages/Egresados';
import Privacidad from './pages/Privacidad';
import Terminos from './pages/Terminos';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-slate-50">
        <Toaster position="top-right" richColors />
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
            <Route path="/faq" element={<Faq />} />
            <Route path="/comunidad" element={<Comunidad />} />
            <Route path="/becas" element={<Becas />} />
            <Route path="/metodologia" element={<Metodologia />} />
            <Route path="/egresados" element={<Egresados />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/checkout/:type/:id" element={<Checkout />} />
            {/* Rutas no encontradas -> Vuelven a la home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <FloatingWhatsApp />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
