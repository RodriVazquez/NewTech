import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Video, Target, BarChart as ChartIcon, Code2, LineChart, Palette, BookOpen } from 'lucide-react';
import { carrerasData } from '../data/carreras';

export default function Carreras() {

  const getCareerStyle = (id) => {
    switch(id) {
      case 'programacion': return { color: "text-blue-600 bg-blue-100", icon: <Code2 className="w-7 h-7" /> };
      case 'data-science': return { color: "text-cyan-600 bg-cyan-100", icon: <LineChart className="w-7 h-7" /> };
      case 'marketing': return { color: "text-rose-600 bg-rose-100", icon: <Target className="w-7 h-7" /> };
      case 'ux-ui': return { color: "text-purple-600 bg-purple-100", icon: <Palette className="w-7 h-7" /> };
      default: return { color: "text-primary-600 bg-primary-100", icon: <BookOpen className="w-7 h-7" /> };
    }
  };

  return (
    <main className="flex-1 flex flex-col bg-slate-50 pb-24">
      {/* Hero */}
      <section className="bg-slate-950 py-16 md:py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-600/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Encontrá tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">Camino</span></h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">Explorá nuestras carreras intensivas diseñadas para conseguir trabajo en las industrias de mayor demanda.</p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-slate-300 bg-slate-900/80 px-5 py-2.5 rounded-full border border-slate-700 backdrop-blur-sm">
              <Target className="w-5 h-5 text-primary-400" />
              <span className="font-semibold text-sm">Alta Inserción Laboral</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 bg-slate-900/80 px-5 py-2.5 rounded-full border border-slate-700 backdrop-blur-sm">
              <Video className="w-5 h-5 text-primary-400" />
              <span className="font-semibold text-sm">Formación 100% Remota</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Careers */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {carrerasData.map((carrera) => (
            <div key={carrera.id} className="group relative flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/50 duration-300">
              
              <div className="flex justify-between items-start mb-6">
                 <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${getCareerStyle(carrera.id).color}`}>
                   {getCareerStyle(carrera.id).icon}
                 </div>
                 <span className="bg-emerald-100 text-emerald-700 text-xs font-black px-3 py-1.5 rounded-xl uppercase tracking-wider border border-emerald-200">
                   {carrera.discount}% OFF
                 </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">
                {carrera.title}
              </h2>

              <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                {carrera.shortDescription}
              </p>

              <div className="flex flex-wrap gap-4 mt-auto mb-6">
                 <div className="flex items-center gap-1.5 rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-500 border border-slate-100">
                   <Clock className="w-4 h-4 text-slate-400" /> {carrera.duration}
                 </div>
                 <div className="flex items-center gap-1.5 rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-500 border border-slate-100">
                   <ChartIcon className="w-4 h-4 text-slate-400" /> Nivel {carrera.level.split(" ")[0]}
                 </div>
              </div>

              <div className="mb-8 pt-6 border-t border-slate-100">
                 <div className="flex items-center gap-2 mb-1">
                   <span className="text-sm text-slate-400 line-through font-medium">${carrera.originalPrice.toLocaleString('es-AR')}</span>
                 </div>
                 <div className="text-4xl font-black text-slate-900 tracking-tight">
                   ${carrera.finalPrice.toLocaleString('es-AR')}
                 </div>
              </div>
              
              <Link to={`/carreras/${carrera.id}`} className="flex items-center justify-center w-full bg-slate-950 px-6 py-4 rounded-xl text-white font-bold hover:bg-primary-600 transition-colors shadow-lg shadow-slate-900/20 active:scale-[0.98]">
                Ver detalle de la carrera <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
