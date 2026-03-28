import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ChevronDown, Download, CheckCircle2, Clock, BarChart, Video, CreditCard, ShieldCheck, ArrowLeft } from 'lucide-react';
import { carrerasData } from '../data/carreras';

const CourseAccordion = ({ course, index, total }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex w-full items-center justify-between p-5 text-left font-bold text-slate-800 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
      >
        <div className="flex items-center gap-4">
          <span className="flex h-8 items-center justify-center rounded-lg bg-orange-100 px-3 text-xs font-bold text-orange-800">
            {index + 1}/{total}
          </span>
          <span className="text-lg">{course.title}</span>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 shrink-0">
          <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>

      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="p-6 pt-2 border-t border-slate-100 bg-slate-50/50">
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Temario Principal</h4>
                <ul className="text-slate-600 text-sm space-y-2">
                  {course.topics.map((topic, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                 <div>
                   <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Proyecto Final</h4>
                   <p className="text-slate-600 text-sm leading-relaxed">{course.project}</p>
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Habilidades al terminar</h4>
                   <div className="flex flex-wrap gap-2">
                     {course.skills.map((skill, i) => (
                       <span key={i} className="bg-white border border-slate-200 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-md">{skill}</span>
                     ))}
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CarreraDetail() {
  const { id } = useParams();
  const carrera = carrerasData.find(c => c.id === id);

  if (!carrera) {
    return <Navigate to="/carreras" replace />;
  }

  return (
    <main className="flex-1 flex flex-col bg-[#fdfaf6]">
      {/* Breadcrumb / Back Navigation */}
      <div className="bg-slate-950 pt-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto pb-4">
          <Link to="/carreras" className="inline-flex items-center text-slate-400 hover:text-white transition-colors text-sm font-semibold">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a todas las carreras
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-slate-950 py-12 md:py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-primary-600/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight max-w-4xl">{carrera.title}</h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-8 leading-relaxed">Formación intensiva orientada a la inserción laboral y proyectos del mundo real.</p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <div className="flex items-center gap-2 text-slate-300 bg-slate-900/80 px-5 py-2.5 rounded-full border border-slate-700 backdrop-blur-sm">
              <Video className="w-5 h-5 text-primary-400" />
              <span className="font-semibold text-sm">Clases 100% Online y en Vivo</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 bg-slate-900/80 px-5 py-2.5 rounded-full border border-slate-700 backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5 text-primary-400" />
              <span className="font-semibold text-sm">Proyectos Reales</span>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full mt-12 mb-24">
        <div className="mb-10 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-base font-bold text-slate-700 bg-slate-200/50 px-4 py-2 rounded-lg">
            <BarChart className="w-5 h-5 text-slate-500" /> Nivel: {carrera.level}
          </div>
          <div className="flex items-center gap-2 text-base font-bold text-slate-700 bg-slate-200/50 px-4 py-2 rounded-lg">
            <Clock className="w-5 h-5 text-slate-500" /> {carrera.duration}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Learning Path */}
          <div className="lg:col-span-7 xl:col-span-8">
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Explorá el learning path completo</h3>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">{carrera.description}</p>
            
            <div className="mb-10 w-full max-w-4xl mx-auto">
              {carrera.courses.map((course, i) => (
                <CourseAccordion key={i} course={course} index={i} total={carrera.courses.length} />
              ))}
            </div>
            
            <div className="flex justify-center md:justify-start">
              <button className="cursor-pointer flex items-center justify-center gap-3 rounded-full bg-[#201008] px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg shadow-md">
                <Download className="w-4 h-4" />
                Descargar programa de la carrera
              </button>
            </div>
          </div>

          {/* Right Column: Sticky Pricing */}
          <div className="lg:col-span-5 xl:col-span-4 sticky top-24">
             <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 flex flex-col text-left">
                
                <div className="w-full">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="rounded-[10px] bg-[#4ade80] px-3 py-1.5 text-sm font-black text-slate-900 leading-none">
                      {carrera.discount}% OFF
                    </span>
                    <span className="text-xl font-medium text-slate-500 line-through">
                      ${carrera.originalPrice.toLocaleString('es-AR')} ARS
                    </span>
                  </div>
                  
                  <p className="text-xl text-slate-600 mb-1">
                    6 cuotas sin interés de
                  </p>
                  
                  <div className="text-5xl font-black text-slate-900 tracking-tight mb-2">
                    ${(carrera.finalPrice / 6).toLocaleString('es-AR', {maximumFractionDigits: 0})}
                    <span className="text-2xl text-slate-500 font-medium ml-2">ARS</span>
                  </div>
                  
                  <p className="text-lg text-slate-500 mb-8 pb-8 border-b border-slate-100">
                    Precio final: ${carrera.finalPrice.toLocaleString('es-AR')} ARS
                  </p>
                </div>
                
                <Link to={`/checkout/carrera/${carrera.id}`} className="w-full inline-flex justify-center rounded-2xl bg-primary-600 py-4 text-lg font-bold text-white transition-colors hover:bg-primary-500 shadow-md">
                  Inscribirme ahora
                </Link>
                
                <p className="text-sm font-medium text-slate-400 mt-4 text-center">
                  <ShieldCheck className="w-4 h-4 inline-block mr-1 -mt-0.5" />
                  Garantía de devolución de 7 días
                </p>
             </div>
          </div>

        </div>
      </div>
    </main>
  );
}
