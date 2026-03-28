import { MessageCircleQuestion } from 'lucide-react';
import { useState } from 'react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "¿Es necesario tener conocimientos previos?",
      a: "Para la mayoría de nuestros cursos iniciales, no. Sin embargo, para las carreras intensivas recomendamos conocimientos básicos de lógica computacional y uso avanzado de PC. Nuestro enfoque es riguroso desde el día uno."
    },
    {
      q: "¿Cómo es la modalidad de cursada?",
      a: "Nuestra metodología es 100% online y en vivo. Creemos en la disciplina, el trabajo en equipo sincrónico y el acompañamiento constante. Todas las clases quedan grabadas en nuestra plataforma por si necesitás repasar conceptos."
    },
    {
      q: "¿Ofrecen bolsa de trabajo?",
      a: "Sí. Contamos con una selecta red de alianzas con empresas top del sector (como Vualá, PedidosNow y GloboTech). Además, un equipo especializado te ayudará a optimizar tu LinkedIn y a prepararte para entrevistas técnicas exigentes."
    },
    {
      q: "¿Tienen garantía de satisfacción?",
      a: "Absolutamente. Ofrecemos 7 días de garantía de devolución del 100% de tu dinero tras el inicio de la cursada, si sentís que el nivel de exigencia o la dinámica no se ajustan a tus expectativas."
    },
    {
      q: "¿Qué métodos de pago aceptan?",
      a: "Aceptamos tarjetas de crédito (hasta en 6 cuotas sin interés para carreras), transferencias bancarias y criptomonedas. Ofrecemos descuentos especiales por pagos completos por adelantado."
    }
  ];

  return (
    <main className="flex-1 bg-[#fdfaf6] py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircleQuestion className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-4">Preguntas Frecuentes</h1>
          <p className="text-lg text-slate-500">Todo lo que necesitás saber antes de dar el salto al siguiente nivel de tu carrera.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="cursor-pointer w-full text-left p-6 flex justify-between items-center focus:outline-none"
              >
                <h3 className="text-lg font-bold text-slate-900 pr-8">{faq.q}</h3>
                <span className={`transform transition-transform duration-300 text-primary-500 font-bold text-2xl leading-none ${openIndex === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div 
                className={`grid transition-all duration-300 ease-in-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-slate-600 leading-relaxed pt-2 border-t border-slate-100 mx-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
