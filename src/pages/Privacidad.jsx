import { Shield } from 'lucide-react';

export default function Privacidad() {
  return (
    <main className="flex-1 bg-[#fdfaf6] py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 bg-slate-200 text-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Shield className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-black text-slate-900 mb-6">Políticas de Privacidad</h1>
        
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm text-left">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Aviso Importante: Proyecto de Simulación</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            <strong>NewTech Bootcamp Simulator</strong> es estrictamente un proyecto de demostración (MVP/Portfolio) creado con fines educativos y de exhibición técnica. No somos una institución educativa real operando bajo las leyes y normativas comerciales o académicas vigentes.
          </p>
          
          <h3 className="text-xl font-bold text-slate-800 mb-3">Recopilación de Datos</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            Este sitio web no recopila, almacena, ni procesa información personal real, correos electrónicos, ni datos de tarjetas de crédito con fines comerciales. Cualquier formulario de contacto o suscripción a newsletter presente en este sitio tiene una funcionalidad puramente simulada para ilustrar flujos de UX/UI.
          </p>
          
          <h3 className="text-xl font-bold text-slate-800 mb-3">Uso de Cookies</h3>
          <p className="text-slate-600 leading-relaxed">
            Podemos utilizar cookies técnicas básicas requeridas exclusivamente para el funcionamiento de la plataforma en modo demostración. No se utilizan para <em>tracking</em> publicitario ni se comparten bases de datos con terceros.
          </p>
        </div>
      </div>
    </main>
  );
}
