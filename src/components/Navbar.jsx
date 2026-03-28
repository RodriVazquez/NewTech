import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { carrerasData } from '../data/carreras';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg shadow-primary-500/30">
            <span className="text-xl font-bold text-white leading-none">N</span>
          </div>
          <Link to="/" className="text-2xl font-black tracking-tighter text-white">
            NewTech<span className="text-primary-500">.</span>
          </Link>
        </div>
        
        <div className="hidden min-[900px]:flex items-center space-x-10">
          <div className="relative group">
            <Link to="/carreras" className="flex items-center gap-1 text-sm font-semibold tracking-wide text-slate-300 group-hover:text-white transition-colors py-4">
              Carreras <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </Link>
            
            <div className="absolute left-0 top-full w-72 rounded-2xl border border-slate-800 bg-slate-950/95 backdrop-blur-xl p-3 opacity-0 invisible shadow-2xl shadow-black transition-all group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0">
              <div className="mb-2 px-3 pb-2 pt-1 border-b border-slate-800">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Especializaciones</span>
              </div>
              <div className="flex flex-col gap-1">
                {carrerasData.map((carrera) => (
                  <Link 
                    key={carrera.id} 
                    to={`/carreras/${carrera.id}`}
                    className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:bg-primary-600/10 hover:text-primary-400"
                  >
                    {carrera.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <Link to="/cursos" className="flex items-center gap-1 text-sm font-semibold tracking-wide text-slate-300 group-hover:text-white transition-colors py-4">
              Cursos <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </Link>
            
            <div className="absolute left-0 top-full w-56 rounded-2xl border border-slate-800 bg-slate-950/95 backdrop-blur-xl p-3 opacity-0 invisible shadow-2xl shadow-black transition-all group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0">
              <div className="mb-2 px-3 pb-2 pt-1 border-b border-slate-800">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Temáticas de cursos</span>
              </div>
              <div className="flex flex-col gap-1">
                {["Programación", "Data", "Marketing", "UX/UI"].map((cat) => (
                  <Link 
                    key={cat} 
                    to={`/cursos?categoria=${cat}`}
                    className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:bg-primary-600/10 hover:text-primary-400"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <Link to="/nosotros" className="text-sm font-semibold tracking-wide text-slate-300 hover:text-white transition-colors">Sobre Nosotros</Link>
          <Link to="/contacto" className="text-sm font-semibold tracking-wide text-slate-300 hover:text-white transition-colors">Contacto</Link>
        </div>

        <div className="flex items-center space-x-5">
          <Link 
            to="/carreras"
            className="hidden sm:inline-flex h-11 items-center justify-center rounded-full bg-white px-7 text-sm font-bold text-slate-950 transition-all hover:bg-slate-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            ¡Comenzá a estudiar ya!
          </Link>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="cursor-pointer min-[900px]:hidden flex h-11 w-11 items-center justify-center rounded-full text-slate-300 hover:bg-white/10 transition-colors"
          >
            <div className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`min-[900px]:hidden absolute left-0 top-full w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100 border-opacity-100 shadow-2xl shadow-black' : 'max-h-0 opacity-0 border-opacity-0'
        }`}
      >
        <div className="flex flex-col px-4 py-6 space-y-2">
          <Link to="/carreras" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-lg font-semibold text-white hover:bg-white/5 rounded-xl transition-colors">Carreras</Link>
          <Link to="/cursos" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-lg font-semibold text-white hover:bg-white/5 rounded-xl transition-colors">Cursos</Link>
          <Link to="/nosotros" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-lg font-semibold text-white hover:bg-white/5 rounded-xl transition-colors">Sobre Nosotros</Link>
          <Link to="/contacto" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-lg font-semibold text-white hover:bg-white/5 rounded-xl transition-colors">Contacto</Link>
          <div className="pt-4 mt-2 border-t border-slate-800 px-4">
             <Link to="/carreras" onClick={() => setIsMobileMenuOpen(false)} className="flex w-full h-12 items-center justify-center rounded-full bg-primary-600 text-base font-bold text-white transition-all hover:bg-primary-500 shadow-lg shadow-primary-500/20">
               ¡Comenzá a estudiar ya!
             </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
