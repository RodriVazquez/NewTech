import { Users, Target, Rocket, GraduationCap, Award, Globe2, Code2, LineChart, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Nosotros() {
  const stats = [
    { value: "+5.000", label: "Alumnos Graduados", icon: <Users className="w-6 h-6 text-primary-500" /> },
    { value: "94%", label: "Tasa de Empleabilidad", icon: <Target className="w-6 h-6 text-emerald-500" /> },
    { value: "12", label: "Carreras y Cursos", icon: <GraduationCap className="w-6 h-6 text-blue-500" /> },
    { value: "50+", label: "Profesores Expertos", icon: <Award className="w-6 h-6 text-purple-500" /> }
  ];

  const values = [
    {
      title: "Educación Democratizada",
      desc: "Creemos que la educación tecnológica de primer nivel no debería ser un privilegio elitista.",
      icon: <Globe2 className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Proyectos del Mundo Real",
      desc: "Nuestros syllabus simulan sprints de trabajo en las oficinas de los gigantes de software actuales.",
      icon: <Code2 className="w-8 h-8 text-emerald-500" />
    },
    {
      title: "Mentalidad Corporativa",
      desc: "No solo te enseñamos a tipear código. Te enseñamos habilidades blandas, SCRUM y liderazgo.",
      icon: <Briefcase className="w-8 h-8 text-rose-500" />
    }
  ];

  return (
    <main className="flex-1 flex flex-col bg-[#fdfaf6]">
      {/* Hero Section */}
      <section className="bg-slate-950 py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-600/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-semibold text-sm mb-8">
            <Rocket className="w-4 h-4 text-primary-500" /> Transformando carreras desde 2020
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Nuestra misión es <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">romper la barrera</span> del primer empleo IT.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed">
            NewTech nació cuando nos dimos cuenta de que la educación tradicional universitaria no estaba respondiendo a la velocidad brutal en la que evolucionan las tecnologías web y el mercado corporativo.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-16 relative z-20 mb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
           {stats.map((stat, i) => (
             <div key={i} className="bg-white rounded-3xl border border-slate-200 p-8 text-center shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300">
               <div className="w-14 h-14 bg-slate-50 flex items-center justify-center rounded-2xl mx-auto mb-4 border border-slate-100">
                 {stat.icon}
               </div>
               <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">{stat.value}</h3>
               <p className="text-slate-500 font-semibold">{stat.label}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Nuestros Pilares</h2>
          <p className="text-lg text-slate-600">Lo que hacemos va más allá de un tutorial pregrabado. Creamos simuladores de empleo.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{v.title}</h3>
              <p className="text-slate-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action CTA */}
      <section className="bg-primary-600 py-24 px-4 text-center mt-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">¿Estás listo para dar el salto?</h2>
          <p className="text-primary-100 text-xl mb-10 max-w-2xl mx-auto">Sumate a los miles de alumnos que ya están trabajando en las mejores startups del mundo. Tu nueva carrera te está esperando.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/carreras" className="w-full sm:w-auto px-8 py-4 bg-slate-950 text-white font-bold rounded-2xl hover:bg-slate-900 transition-colors shadow-xl shadow-slate-950/20">
              Explorar Carreras
            </Link>
            <Link to="/contacto" className="w-full sm:w-auto px-8 py-4 bg-primary-500 text-white border border-primary-400 font-bold rounded-2xl hover:bg-primary-400 transition-colors">
              Contactar Asesor
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
