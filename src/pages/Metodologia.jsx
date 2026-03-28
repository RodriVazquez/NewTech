import { Code2, Target, Briefcase } from 'lucide-react';

export default function Metodologia() {
  return (
    <main className="flex-1 bg-[#fdfaf6] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Code2 className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-black text-slate-900 mb-6">Nuestra Metodología</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto">
          No somos una plataforma devoradora de videos pregrabados. Somos un auténtico simulador de entornos laborales reales. Así es como logramos que nuestros egresados destaquen de inmediato.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
             <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
               <Target className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">Roleplay Técnico</h3>
             <p className="text-slate-500 leading-relaxed">
               Desde el día 1 te tratamos como un Trainee. Recibís requerimientos funcionales, tickets simulados, deadlines inamovibles y repositorios con conflictos pre-armados. Te vas a equivocar, y ahí es donde ocurre el verdadero aprendizaje.
             </p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
             <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-6">
               <Briefcase className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">Mentores de la Industria</h3>
             <p className="text-slate-500 leading-relaxed">
               Nuestros profesores y tutores no son teóricos; trabajan actualmente en las mejores empresas tech. Sus revisiones de código y feedback no apuntan a la aprobación del curso, sino a que tu código pase un PR (Pull Request) corporativo.
             </p>
          </div>
        </div>
      </div>
    </main>
  );
}
