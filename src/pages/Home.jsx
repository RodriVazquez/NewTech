import { ArrowRight, Zap, PlayCircle, Star, ShieldCheck, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { cursosData } from '../data/cursos';

export default function Home() {
  const navigate = useNavigate();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const getFeaturedCourse = (id, icon, themeClasses) => {
    const course = cursosData.find(c => c.id === id);
    return { ...course, targetIcon: icon, themeClasses };
  };

  const featuredList = [
    getFeaturedCourse('react-js', <Zap className="h-6 w-6" />, { iconBg: 'bg-indigo-50', iconText: 'text-primary-600', hoverBg: 'group-hover:bg-primary-600' }),
    getFeaturedCourse('growth-marketing', <Zap className="h-6 w-6" />, { iconBg: 'bg-emerald-50', iconText: 'text-emerald-600', hoverBg: 'group-hover:bg-emerald-600' }),
    getFeaturedCourse('backend-node', <ShieldCheck className="h-6 w-6" />, { iconBg: 'bg-blue-50', iconText: 'text-blue-600', hoverBg: 'group-hover:bg-blue-600' })
  ];

  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 pt-16 pb-24 lg:pt-32 lg:pb-40">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-300 mb-8 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-primary-400" fill="currentColor" />
            <span>Inscripciones abiertas para Cohorte 2026</span>
          </div>
          
          <h1 className="mx-auto max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Acelerá tu carrera en <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">Marketing y Programación</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed sm:text-xl">
            Dominá las habilidades más demandadas por la industria en solo 4 meses. Clases en vivo, proyectos reales y acompañamiento personalizado con tutorías semanales.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/carreras" className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all hover:bg-primary-500 hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] hover:-translate-y-0.5">
              Ver Carreras
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/cursos" className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-slate-800 hover:border-slate-600">
              <PlayCircle className="h-5 w-5 text-slate-300" />
              Explorar Cursos
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary-500" />
              <span>100% Online y en Vivo</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary-500" />
              <span>Proyectos Reales</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary-500" />
              <span>Bolsa de Trabajo VIP</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mock Brands Section */}
      <section className="border-y border-slate-800 bg-slate-950 py-10 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-8">Nuestros egresados aceleran su carrera en</p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 lg:gap-24 opacity-60 px-4">
            <div className="flex items-center justify-center group cursor-default">
              <span className="text-xl sm:text-2xl font-black tracking-tighter text-white transition-opacity group-hover:opacity-100">Mercado Free</span>
            </div>
            <div className="flex items-center justify-center group cursor-default">
               <span className="text-2xl sm:text-3xl font-black tracking-tight text-white transition-opacity group-hover:opacity-100 lowercase">vualá</span>
            </div>
            <div className="flex items-center justify-center group cursor-default">
               <span className="text-xl sm:text-2xl font-extrabold italic tracking-tight text-white transition-opacity group-hover:opacity-100">GloboTech</span>
            </div>
            <div className="flex items-center justify-center group cursor-default">
               <span className="text-xl sm:text-2xl font-black tracking-tighter text-white transition-opacity group-hover:opacity-100">Pedidos<span className="font-normal italic">Now</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-bold text-orange-600 mb-6">
              <Star className="h-4 w-4" fill="currentColor" />
              <span>Cyber Weeks - Últimos Días</span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Cursos con <span className="text-primary-600">descuento especial</span></h2>
            <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">Potenciá tu currículum contratando nuestros cursos intensivos de forma individual con hasta 40% OFF.</p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredList.map((curso, idx) => (
              <div 
                key={idx} 
                onClick={() => navigate(`/cursos/${curso.id}`)}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/10"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-500 to-blue-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
                <div className="absolute top-6 right-6 rounded-full bg-red-100 px-3 py-1 text-xs font-black tracking-wide text-red-600 line-through">
                  -{curso.discount}% OFF
                </div>
                
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${curso.themeClasses.iconBg} ${curso.themeClasses.iconText} ${curso.themeClasses.hoverBg} group-hover:text-white transition-colors`}>
                  {curso.targetIcon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900">{curso.title}</h3>
                <p className="mt-3 flex-1 text-slate-500 leading-relaxed">{curso.shortDescription}</p>
                
                <div className="mt-8 border-t border-slate-100 pt-6">
                  <div className="flex items-end justify-between">
                    <div>
                       <div className="text-sm font-medium text-slate-400 line-through mb-1">AR$ {curso.originalPrice.toLocaleString('es-AR')}</div>
                       <div className="flex items-center gap-2">
                         <span className="text-3xl font-black text-slate-900">AR$ {curso.price.toLocaleString('es-AR')}</span>
                       </div>
                    </div>
                    <Link to={`/cursos/${curso.id}`} className={`flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 ${curso.themeClasses.hoverBg} group-hover:text-white transition-colors`}>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Link to="/cursos" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors">
               Ver todos los cursos disponibles <ArrowRight className="h-4 w-4" />
             </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-slate-950 py-24 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-900/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Más de 2.000 alumnos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">transformaron su carrera</span></h2>
            <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto">Conocé las historias de quienes ya pasaron por NewTech y hoy trabajan en las mejores empresas del sector.</p>
          </div>
          
          <div className="relative group mx-4 sm:mx-0">
            <div className="overflow-hidden bg-transparent cursor-grab active:cursor-grabbing -my-6 py-6" ref={emblaRef}>
              <div className="flex -ml-6 touch-pan-y">
                {[
                  {
                    name: "Sofía R.",
                    role: "Frontend Developer en Mercado Free",
                    text: "Antes trabajaba en un rubro nada que ver. El bootcamp me dio las herramientas exactas que pedía el mercado. A las 3 semanas de terminar, me contrataron.",
                    image: "https://ui-avatars.com/api/?name=Sofia+R&background=4f46e5&color=fff"
                  },
                  {
                    name: "Marcos T.",
                    role: "Growth Marketer en GloboTech",
                    text: "La metodología de aprender haciendo proyectos reales marca la diferencia. Salís del curso no solo con un diploma, sino con un portfolio armado y sólido.",
                    image: "https://ui-avatars.com/api/?name=Marcos+T&background=047857&color=fff"
                  },
                  {
                    name: "Valentina M.",
                    role: "Backend Node.js en Vualá",
                    text: "El acompañamiento de los tutores es increíble. Te empujan a dar más de vos y siempre están para destrabarte cuando no entendés un concepto complejo.",
                    image: "https://ui-avatars.com/api/?name=Valentina+M&background=2563eb&color=fff"
                  },
                  {
                    name: "Diego H.",
                    role: "UX/UI Designer en PedidosNow",
                    text: "Poder diseñar productos digitales desde cero teniendo feedback de profesores que trabajan en la industria no tiene precio. El mejor retorno de inversión.",
                    image: "https://ui-avatars.com/api/?name=Diego+H&background=c026d3&color=fff"
                  },
                  {
                    name: "Camila L.",
                    role: "Data Analyst",
                    text: "Lo que más destaco es la bolsa de trabajo. Desde el primer día te arman el perfil de LinkedIn y el CV. Conseguí mi primer empleo IT antes de presentar el proyecto final.",
                    image: "https://ui-avatars.com/api/?name=Camila+L&background=ea580c&color=fff"
                  },
                  {
                    name: "Lucas G.",
                    role: "Fullstack Developer",
                    text: "La currícula está 100% pensada en lo que piden las empresas hoy. Nada de relleno, todo código que vas a usar en tu día a día en una startup.",
                    image: "https://ui-avatars.com/api/?name=Lucas+G&background=dc2626&color=fff"
                  },
                  {
                    name: "Florencia P.",
                    role: "Performance Marketer",
                    text: "Pasé de atención al cliente a gestionar presupuestos enormes de campañas. El bootcamp de Marketing me cambió la vida y la forma de entender los negocios.",
                    image: "https://ui-avatars.com/api/?name=Florencia+P&background=0d9488&color=fff"
                  },
                  {
                    name: "Javier S.",
                    role: "React Native Dev",
                    text: "Pensé que al ser online iba a ser difícil aprender o me iba a sentir solo, pero nada que ver. La comunidad de Discord está activa 24/7 y siempre hay alguien ayudando.",
                    image: "https://ui-avatars.com/api/?name=Javier+S&background=eab308&color=fff"
                  }
                ].map((review, i) => (
                  <div key={i} className="pl-6 flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_33.33%] min-w-0 transform-gpu">
                    <div className="relative h-full flex flex-col rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm transition-transform hover:-translate-y-1">
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="h-4 w-4 fill-primary-500 text-primary-500" />
                        ))}
                      </div>
                      <p className="text-slate-300 leading-relaxed mb-8 flex-1">"{review.text}"</p>
                      <div className="flex items-center gap-4 mt-auto">
                        <img src={review.image} alt={review.name} className="h-12 w-12 rounded-full ring-2 ring-slate-800 pointer-events-none" />
                        <div>
                          <h4 className="font-bold text-white">{review.name}</h4>
                          <span className="text-sm text-slate-400">{review.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <button 
              onClick={scrollPrev} 
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 text-white shadow-xl backdrop-blur-sm transition-all hover:bg-primary-600 hover:border-primary-500 hover:scale-110 active:scale-95 z-20 opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={scrollNext} 
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 text-white shadow-xl backdrop-blur-sm transition-all hover:bg-primary-600 hover:border-primary-500 hover:scale-110 active:scale-95 z-20 opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
