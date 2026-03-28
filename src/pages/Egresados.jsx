import { Star, TrendingUp } from 'lucide-react';

export default function Egresados() {
  return (
    <main className="flex-1 bg-[#fdfaf6] py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Star className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-black text-slate-900 mb-6">Historias de Éxito</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          Nuestros más de 1.000 graduados ya están dejando su huella y transformando el panorama tecnológico. 
          Sus resultados hablan por la eficacia de nuestra currícula.
        </p>

        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm text-left relative overflow-hidden mb-8">
           <div className="flex sm:items-center flex-col sm:flex-row gap-6 mb-8">
             <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 shrink-0">
               <TrendingUp className="w-8 h-8" />
             </div>
             <div>
               <h3 className="text-2xl font-black text-slate-900">El rigor técnico da frutos</h3>
               <p className="text-slate-500 mt-1">Nuestros egresados compiten (y ganan) las posiciones más demandadas del mercado.</p>
             </div>
           </div>
           
           <div className="grid sm:grid-cols-2 gap-8 border-t border-slate-100 pt-8">
             <div>
               <div className="text-primary-600 font-black text-4xl mb-2 tracking-tight">85%</div>
               <div className="font-bold text-slate-900 mb-1">Tasa de Empleabilidad</div>
               <p className="text-sm text-slate-500">De nuestros graduados de Carreras Intensivas logran insertarse en el ecosistema IT dentro de los primeros 4 meses.</p>
             </div>
             <div>
               <div className="text-primary-600 font-black text-4xl mb-2 tracking-tight">+35%</div>
               <div className="font-bold text-slate-900 mb-1">Salto Salarial Promedio</div>
               <p className="text-sm text-slate-500">Es la diferencia promedio en los ingresos de nuestros alumnos luego de realizar su reconversión profesional.</p>
             </div>
           </div>
        </div>
        
        <p className="text-slate-500 bg-slate-100 rounded-xl p-4 font-medium">
          Ya encontrás talento de NewTech acelerando productos en empresas como Mercado Free, Vualá, PedidosNow y GloboTech.
        </p>
      </div>
    </main>
  );
}
