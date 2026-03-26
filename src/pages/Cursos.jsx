import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Code2, LineChart, Target, Palette, Clock, BarChart as ChartIcon, ShoppingCart, BookOpen } from 'lucide-react';
import { cursosData } from '../data/cursos';

const categories = ["Todos", "Programación", "Data", "Marketing", "UX/UI"];

export default function Cursos() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('categoria') || "Todos";
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (cat) => {
    if (cat === "Todos") {
      searchParams.delete("categoria");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ categoria: cat });
    }
  };

  const filteredCursos = cursosData.filter(curso => {
    const matchesCategory = activeCategory === "Todos" || curso.category === activeCategory;
    const matchesSearch = curso.title.toLowerCase().includes(searchQuery.toLowerCase()) || curso.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category, size = "w-5 h-5") => {
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
    <main className="flex-1 flex flex-col bg-slate-50 pb-24">
      {/* Hero */}
      <section className="bg-slate-950 py-16 md:py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-600/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Explorá nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">Catálogo</span></h1>
          <p className="text-lg text-slate-400 mb-10">Más de 12 cursos especializados para impulsar tu carrera en la industria tecnológica.</p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
            </div>
            <input 
              type="text" 
              className="w-full bg-slate-900/80 border border-slate-700 text-white rounded-full py-4 pl-12 pr-6 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-500"
              placeholder="Buscar por nombre, tecnología o habilidad..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${
                activeCategory === cat 
                ? 'bg-slate-900 text-white ring-2 ring-slate-900 ring-offset-2' 
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Info */}
        <div className="mb-6 flex justify-between items-center text-slate-500 text-sm font-semibold">
          <span>{filteredCursos.length} cursos encontrados</span>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCursos.map((curso) => (
            <div key={curso.id} className="group bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300">
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${getCategoryColor(curso.category)}`}>
                    {getCategoryIcon(curso.category, "w-7 h-7")}
                  </div>
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-black px-3 py-1.5 rounded-xl uppercase tracking-wider border border-emerald-200">
                    {curso.discount}% OFF
                  </span>
                </div>
                
                <div className="mb-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{curso.category}</span>
                </div>
                
                <Link to={`/cursos/${curso.id}`}>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-tight group-hover:text-primary-600 transition-colors">
                    {curso.title}
                  </h3>
                </Link>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  {curso.shortDescription}
                </p>

                <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-100 rounded-xl p-3 mb-6">
                  <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-400" /> {curso.duration}</div>
                  <div className="w-px h-4 bg-slate-200"></div>
                  <div className="flex items-center gap-1.5"><ChartIcon className="w-4 h-4 text-slate-400" /> {curso.level}</div>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-slate-400 line-through font-medium">${curso.originalPrice.toLocaleString('es-AR')}</span>
                  </div>
                  <div className="text-4xl font-black text-slate-900 tracking-tight mb-6">
                    ${curso.price.toLocaleString('es-AR')}
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <button className="w-full flex items-center justify-center gap-2 bg-slate-950 text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-colors shadow-md active:scale-[0.98]">
                      <ShoppingCart className="w-4 h-4" />
                      Sumar al carrito
                    </button>
                    <Link to={`/cursos/${curso.id}`} className="w-full flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 font-bold py-3.5 rounded-xl hover:bg-slate-50 hover:text-primary-600 transition-colors active:scale-[0.98]">
                      Ver detalle del curso
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {filteredCursos.length === 0 && (
            <div className="col-span-full py-24 text-center">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No encontramos cursos</h3>
              <p className="text-slate-500 text-lg">Probá buscando con otros términos o seleccioná otra categoría.</p>
              <button 
                onClick={() => {handleCategoryChange("Todos"); setSearchQuery("");}}
                className="mt-8 bg-white border border-slate-200 text-slate-900 font-bold py-3 px-8 rounded-full hover:bg-slate-50 transition-colors shadow-sm"
              >
                Limpiar búsqueda
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
