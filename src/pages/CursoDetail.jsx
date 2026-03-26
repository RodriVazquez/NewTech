import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Video, Clock, BarChart as ChartIcon, ShoppingCart, Target, Code2, LineChart, Palette, BookOpen, ShieldCheck } from 'lucide-react';
import { cursosData } from '../data/cursos';

export default function CursoDetail() {
  const { id } = useParams();
  const curso = cursosData.find(c => c.id === id);

  if (!curso) {
    return <Navigate to="/cursos" replace />;
  }

  const getCategoryIcon = (category, size = "w-6 h-6") => {
    switch(category) {
      case 'Programación': return <Code2 className={size} />;
      case 'Data': return <LineChart className={size} />;
      case 'Marketing': return <Target className={size} />;
      case 'UX/UI': return <Palette className={size} />;
      default: return <BookOpen className={size} />;
    }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Programación': return "text-blue-600 bg-blue-100";
      case 'Data': return "text-cyan-600 bg-cyan-100";
      case 'Marketing': return "text-rose-600 bg-rose-100";
      case 'UX/UI': return "text-purple-600 bg-purple-100";
      default: return "text-primary-600 bg-primary-100";
    }
  };

  return (
    <main className="flex-1 flex flex-col bg-[#fdfaf6]">
      {/* Breadcrumb */}
      <div className="bg-slate-950 pt-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto pb-4">
          <Link to="/cursos" className="inline-flex items-center text-slate-400 hover:text-white transition-colors text-sm font-semibold">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al catálogo de cursos
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-slate-950 py-12 md:py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-primary-600/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
          
          <div className={`w-24 h-24 rounded-3xl flex items-center justify-center shrink-0 shadow-2xl ${getCategoryColor(curso.category)}`}>
            {getCategoryIcon(curso.category, "w-12 h-12")}
          </div>

          <div className="text-center md:text-left flex-1">
            <div className="mb-4">
               <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{curso.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight max-w-4xl">{curso.title}</h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-8 leading-relaxed">{curso.shortDescription}</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex items-center gap-2 text-slate-300 bg-slate-900/80 px-5 py-2.5 rounded-full border border-slate-700 backdrop-blur-sm">
                <Video className="w-5 h-5 text-primary-400" />
                <span className="font-semibold text-sm">Clases 100% Online</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 bg-slate-900/80 px-5 py-2.5 rounded-full border border-slate-700 backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-primary-400" />
                <span className="font-semibold text-sm">Certificado de Aprobación</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full mt-12 mb-24">
        
        <div className="mb-10 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-base font-bold text-slate-700 bg-slate-200/50 px-4 py-2 rounded-lg">
            <ChartIcon className="w-5 h-5 text-slate-500" /> Nivel: {curso.level}
          </div>
          <div className="flex items-center gap-2 text-base font-bold text-slate-700 bg-slate-200/50 px-4 py-2 rounded-lg">
            <Clock className="w-5 h-5 text-slate-500" /> {curso.duration}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Syllabus */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-12">
            
            {/* Description */}
            <section>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Acerca del curso</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{curso.description}</p>
            </section>

            {/* Topics */}
            <section>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Temario Principal</h3>
              <ul className="space-y-4">
                {curso.topics.map((topic, i) => (
                  <li key={i} className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-sm font-bold text-orange-800 shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-slate-800 font-semibold mt-1">{topic}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project */}
              <section className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <h4 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary-500" /> Proyecto Final
                </h4>
                <p className="text-slate-600 leading-relaxed">{curso.project}</p>
              </section>

              {/* Skills */}
              <section className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <h4 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary-500" /> Habilidades a dominar
                </h4>
                <div className="flex flex-wrap gap-2">
                  {curso.skills.map((skill, i) => (
                    <span key={i} className="bg-slate-100 border border-slate-200 text-slate-700 text-sm font-bold px-3 py-1.5 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            </div>

          </div>

          {/* Right Column: Sticky Pricing */}
          <div className="lg:col-span-5 xl:col-span-4 sticky top-24">
             <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/50 flex flex-col text-left">
                
                <div className="w-full">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="rounded-[10px] bg-[#4ade80] px-3 py-1.5 text-sm font-black text-slate-900 leading-none">
                      {curso.discount}% OFF
                    </span>
                    <span className="text-xl font-medium text-slate-500 line-through">
                      ${curso.originalPrice.toLocaleString('es-AR')} ARS
                    </span>
                  </div>
                  
                  <p className="text-xl text-slate-600 mb-2">Precio de inscripción</p>
                  
                  <div className="text-5xl font-black text-slate-900 tracking-tight mb-8 pb-8 border-b border-slate-100">
                    ${curso.price.toLocaleString('es-AR')} 
                    <span className="text-2xl text-slate-500 font-medium ml-2">ARS</span>
                  </div>
                </div>
                
                <button className="w-full rounded-2xl bg-slate-950 py-5 text-lg font-bold text-white transition-all hover:bg-primary-600 shadow-xl shadow-slate-900/20 active:scale-[0.98] flex items-center justify-center gap-3">
                  <ShoppingCart className="w-5 h-5" />
                  Sumar al carrito
                </button>
                
                <p className="text-sm font-medium text-slate-400 mt-6 text-center flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Pago 100% seguro y garantizado
                </p>
             </div>
          </div>

        </div>
      </div>
    </main>
  );
}
