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
    "¿Cuándo abren las inscripciones?",
    "¿Necesito conocimientos previos?",
    "¿Cómo funciona la garantía de devolución?",
    "¿Hay un descuento por pago en efectivo?"
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
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email</h4>
                    <p className="text-lg font-semibold text-slate-900">admisiones@newtech.edu.ar</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center shrink-0">
                    <PhoneCall className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp</h4>
                    <p className="text-lg font-semibold text-slate-900">+54 9 11 1234-5678</p>
                    <p className="text-sm text-slate-500 mt-1">Lunes a Viernes de 9 a 18hs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Oficinas (Solo Staff)</h4>
                    <p className="text-lg font-semibold text-slate-900">Av. Siempre Viva 742, Buenos Aires</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary-500" /> Preguntas Frecuentes
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <button key={i} className="w-full text-left bg-white border border-slate-200 hover:border-primary-300 hover:bg-primary-50 px-5 py-4 rounded-xl text-slate-700 font-semibold transition-colors group flex justify-between items-center">
                    {faq}
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary-500 transition-transform group-hover:translate-x-1" />
                  </button>
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

                <button type="submit" className="w-full bg-primary-600 text-white font-extrabold py-5 rounded-xl hover:bg-primary-500 hover:shadow-xl hover:shadow-primary-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
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
