import { FileText } from 'lucide-react';

export default function Terminos() {
  return (
    <main className="flex-1 bg-[#fdfaf6] py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 bg-slate-200 text-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <FileText className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-black text-slate-900 mb-6">Términos Legales</h1>
        
        <div className="bg-slate-950 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-xl text-left">
          <div className="inline-flex py-1 px-3 rounded-full bg-red-500/20 text-red-400 font-black text-sm mb-6 border border-red-500/30">
            DISCLAMER LEGAL
          </div>
          
          <h2 className="text-xl font-bold text-white mb-4">Simulador sin Fines de Lucro</h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Este sitio representa una aplicación conceptual construida como parte de un catálogo de desarrollo web e inteligencia artificial. <strong>No existe ninguna empresa comercial ni entidad jurídica real detrás de "NewTech Bootcamp Simulator".</strong>
          </p>
          
          <div className="space-y-6 text-slate-400 text-sm">
            <div>
              <h3 className="font-bold text-primary-400 text-base mb-2">1. Propiedad Intelectual</h3>
              <p>Las marcas simuladas, logos temporales, avatares (generados vía UI-Avatars) y fotografías han sido incorporadas con el único propósito de ilustrar el diseño visual. Todas las referencias a empresas de tecnología argentinas o extranjeras son parodias o demostraciones teóricas sin intención de infracción sobre derechos comerciales.</p>
            </div>
            
            <div>
              <h3 className="font-bold text-primary-400 text-base mb-2">2. Ofertas y Transacciones</h3>
              <p>Ningún botón de "Inscribirme", "Checkout" o tarifas con descuento resulta en un cargo financiero vinculante o contrato de prestación de servicios. Los precios exhibidos (ej: "150.000 ARS") son datos visuales ilustrativos inspirados en la industria actual y no constituyen una oferta o publicidad engañosa bajo la órbita de defensa del consumidor.</p>
            </div>
            
            <div>
              <h3 className="font-bold text-primary-400 text-base mb-2">3. Exención de Responsabilidad</h3>
              <p>El autor de este sitio de software declina cualquier responsabilidad, explícita o implícita, ante reclamos, daños o la asunción por parte de un usuario de que los cursos expuestos efectivamente se dictan o garantizan salida laboral verídica.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
