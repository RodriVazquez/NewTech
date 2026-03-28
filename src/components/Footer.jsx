import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    // Only toggle on smaller screens, handled naturally by state
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 xl:gap-8">
          
          {/* Brand & Social */}
          <div className="col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-700">
                <span className="text-lg font-bold text-white leading-none">N</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                NewTech<span className="text-primary-500">.</span>
              </span>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              Transformando el futuro de la educación tecnológica en Latinoamérica. Formamos a los líderes digitales del mañana con proyectos del mundo real.
            </p>
            <div className="mt-8 flex gap-4 justify-center lg:justify-start">
              <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="YouTube">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582 6.186a2.667 2.667 0 00-1.879-1.889c-1.659-.445-8.303-.445-8.303-.445s-6.644 0-8.303.445a2.66 2.66 0 00-1.879 1.889C.773 7.854.773 12 .773 12s0 4.146.445 5.814a2.66 2.66 0 001.879 1.889c1.659.444 8.303.444 8.303.444s6.644 0 8.303-.444a2.66 2.66 0 001.879-1.889c.445-1.668.445-5.814.445-5.814s0-4.146-.445-5.814zm-11.838 8.657v-5.686L15.35 12l-5.606 2.843z" /></svg>
              </a>
            </div>
          </div>

          {/* Shortcuts - Accordion on Mobile */}
          <div className="border-b border-slate-800 lg:border-none pb-4 lg:pb-0">
            <button 
              onClick={() => toggleSection('bootcamp')}
              className="flex w-full items-center justify-center lg:justify-start gap-2 lg:gap-0 lg:cursor-default lg:pointer-events-none"
            >
              <h3 className="text-sm font-bold text-white tracking-widest uppercase">Bootcamp</h3>
              <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform duration-300 lg:hidden ${openSection === 'bootcamp' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out lg:grid-rows-[1fr] ${openSection === 'bootcamp' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <ul role="list" className="mt-6 space-y-4 text-sm flex flex-col items-center lg:items-start text-center lg:text-left">
                  <li><Link to="/carreras" className="hover:text-primary-400 transition-colors">Carreras Intensivas</Link></li>
                  <li><Link to="/cursos" className="hover:text-primary-400 transition-colors">Cursos Cortos</Link></li>
                  <li><Link to="/metodologia" className="hover:text-primary-400 transition-colors">Nuestra Metodología</Link></li>
                  <li><Link to="/egresados" className="hover:text-primary-400 transition-colors">Historias de Éxito</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Support - Accordion on Mobile */}
          <div className="border-b border-slate-800 lg:border-none pb-4 lg:pb-0">
            <button 
              onClick={() => toggleSection('soporte')}
              className="flex w-full items-center justify-center lg:justify-start gap-2 lg:gap-0 lg:cursor-default lg:pointer-events-none"
            >
              <h3 className="text-sm font-bold text-white tracking-widest uppercase">Soporte</h3>
              <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform duration-300 lg:hidden ${openSection === 'soporte' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out lg:grid-rows-[1fr] ${openSection === 'soporte' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <ul role="list" className="mt-6 space-y-4 text-sm flex flex-col items-center lg:items-start text-center lg:text-left">
                  <li><Link to="/faq" className="hover:text-primary-400 transition-colors">Preguntas Frecuentes</Link></li>
                  <li><Link to="/comunidad" className="hover:text-primary-400 transition-colors">Comunidad de Alumnos</Link></li>
                  <li><Link to="/becas" className="hover:text-primary-400 transition-colors">Programa de Becas</Link></li>
                  <li><Link to="/contacto" className="hover:text-primary-400 transition-colors">Contacto</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-4 lg:mt-0">
            <h3 className="text-sm font-bold text-white tracking-widest uppercase">Suscribite</h3>
            <p className="hidden lg:block mt-6 text-sm leading-relaxed text-slate-400 mb-4">
              Recibí las últimas novedades, eventos gratuitos y ofertas exclusivas directamente en tu correo.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success('¡Suscripción exitosa a NewTech Bootcamp!');
                e.target.reset();
              }}
              className="flex w-full max-w-sm flex-col gap-2 mt-6 lg:mt-0"
            >
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                <input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full rounded-lg border border-slate-800 bg-slate-900/50 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 lg:text-left text-center"
                />
              </div>
              <button
                type="submit"
                className="cursor-pointer rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} NewTech Bootcamp. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <Link to="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link to="/terminos" className="hover:text-white transition-colors">Términos Legales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
