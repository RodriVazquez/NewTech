import { Award, Zap } from 'lucide-react';

export default function Becas() {
  return (
    <main className="flex-1 bg-[#fdfaf6] py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Award className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-black text-slate-900 mb-6">Programa de Becas al Talento</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          La educación de vanguardia pertenece a quienes tienen la tenacidad para aprovecharla.
          Buscamos a los futuros líderes de la industria y estamos dispuestos a apostar por ellos.
        </p>

        <div className="bg-slate-950 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-xl text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-600/10 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">Bonificación del 50% al Rendimiento</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Abrimos convocatorias limitadas de forma bimestral. Evaluamos perfil, lógica computacional, capacidad resolutiva y proactividad. 
              Si tu perfil técnico destaca y estás dispuesto a comprometerte con la excelencia académica, cubrimos la mitad del valor de la Carrera Intensiva.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-slate-800 pt-8">
               <div className="flex-1">
                 <h4 className="font-bold text-primary-400 flex items-center gap-2 mb-1">
                   <Zap className="w-4 h-4" /> Requisitos clave
                 </h4>
                 <p className="text-sm text-slate-500">Disponibilidad part-time, portfolio inicial (si aplica) y pasar nuestra prueba técnica nivelatoria.</p>
               </div>
               <button className="cursor-pointer w-full sm:w-auto px-8 py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition-colors shadow-md">
                 Aplicar a la próxima edición
               </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
