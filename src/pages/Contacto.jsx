import { useState } from 'react';
import { Mail, MapPin, PhoneCall, Send, HelpCircle, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular el envío exitoso con nuestra librería Sonner (que tenemos instalada)
    toast.success('¡Mensaje enviado con éxito!', {
      description: 'Un asesor educativo se contactará con vos en breve.'
    });
    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const faqs = [
    {
      q: "¿Cuándo abren las inscripciones?",
      a: "Nuestras inscripciones están abiertas todo el año. Puedes sumarte a la próxima camada en cualquier momento."
    },
    {
      q: "¿Necesito conocimientos previos?",
      a: "No, nuestros programas están diseñados para empezar desde cero. Solo necesitas dedicación y ganas de aprender."
    },
    {
      q: "¿Cómo funciona la garantía de devolución?",
      a: "Si dentro de los primeros 14 días sientes que el programa no es para ti, te devolvemos el 100% de tu dinero."
    },
    {
      q: "¿Hay un descuento por pago en efectivo?",
      a: "Sí, abonando el total de la carrera/curso por transferencia o depósito bancario, accedes a un 15% de descuento."
    }
  ];

  return (
    <main className="flex-1 flex flex-col bg-[#fdfaf6]">
      {/* Header */}
      <section className="bg-slate-950 py-16 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Contactanos</h1>
          <p className="text-lg text-slate-400">Estamos del otro lado para despejar cualquier duda sobre tu futuro profesional.</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Info & FAQs */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Información Directa</h2>
              
              <div className="space-y-6">
                <a href="mailto:admisiones@newtech.edu.ar" target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email</h4>
                    <p className="text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-primary-600">admisiones@newtech.edu.ar</p>
                  </div>
                </a>
                
                <a href="https://wa.me/5491112345678" target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center shrink-0">
                    <PhoneCall className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp</h4>
                    <p className="text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-primary-600">+54 9 11 1234-5678</p>
                  </div>
                </a>
                
                <a href="https://instagram.com/newtech.edu" target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Instagram</h4>
                    <p className="text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-primary-600">@newtech.edu</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary-500" /> Preguntas Frecuentes
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                    <button 
                      onClick={() => toggleFaq(i)}
                      className="cursor-pointer w-full text-left hover:bg-primary-50 px-5 py-4 text-slate-700 font-semibold transition-colors flex justify-between items-center group"
                    >
                      {faq.q}
                      <ArrowRight className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === i ? 'rotate-90 text-primary-500' : 'group-hover:text-primary-500'}`} />
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openFaq === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <div className="px-5 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/50 p-8 md:p-12">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Envianos tu consulta</h2>
              <p className="text-slate-500 mb-8">Completá el formulario y nos pondremos en contacto súper rápido.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Nombre completo</label>
                    <input 
                      type="text" required
                      name="nombre" value={formData.nombre} onChange={handleChange}
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Correo Electrónico</label>
                    <input 
                      type="email" required
                      name="email" value={formData.email} onChange={handleChange}
                      placeholder="tucorreo@ejemplo.com"
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Asunto</label>
                  <select 
                    name="asunto" value={formData.asunto} onChange={handleChange} required
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none"
                  >
                    <option value="" disabled>Seleccioná un motivo...</option>
                    <option value="inscripciones">Sobre inscripciones y fechas</option>
                    <option value="pagos">Pagos y financiación</option>
                    <option value="empresas">Capacitación para empresas (B2B)</option>
                    <option value="otro">Otro motivo</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Mensaje</label>
                  <textarea 
                    rows="5" required
                    name="mensaje" value={formData.mensaje} onChange={handleChange}
                    placeholder="Escribí tu mensaje acá con todo el detalle posible..."
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="cursor-pointer w-full bg-primary-600 text-white font-extrabold py-5 rounded-xl hover:bg-primary-500 hover:shadow-xl hover:shadow-primary-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" /> Enviar mensaje
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
