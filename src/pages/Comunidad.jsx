import { Users, MessageSquare, Coffee, BookOpen } from 'lucide-react';

export default function Comunidad() {
  return (
    <main className="flex-1 bg-[#fdfaf6] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-6">Comunidad de Alumnos</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            El aprendizaje técnico te abre puertas, pero el ecosistema de talento a tu alrededor define cuán lejos llegarás. 
            Al sumarte a NewTech, ingresás a un círculo exclusivo.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12 text-center">
           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <MessageSquare className="w-10 h-10 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Canales Exclusivos</h3>
              <p className="text-sm text-slate-500">Acceso a nuestro server con más de 1.000 egresados activos y ofertas laborales internas.</p>
           </div>
           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <Coffee className="w-10 h-10 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Eventos y Meetups</h3>
              <p className="text-sm text-slate-500">Encuentros presenciales trimestrales en Buenos Aires y charlas online con líderes del sector.</p>
           </div>
           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <BookOpen className="w-10 h-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Grupos de Estudio</h3>
              <p className="text-sm text-slate-500">Sesiones autogestionadas para preparar entrevistas, repasar lógica o armar proyectos open source.</p>
           </div>
        </div>
      </div>
    </main>
  );
}
