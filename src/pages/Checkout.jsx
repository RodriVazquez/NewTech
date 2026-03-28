import { useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { ShieldCheck, CreditCard, Lock, CheckCircle2, X } from 'lucide-react';
import { toast } from 'sonner';
import { cursosData } from '../data/cursos';
import { carrerasData } from '../data/carreras';

export default function Checkout() {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  // Validate type
  if (type !== 'curso' && type !== 'carrera') {
    return <Navigate to="/" replace />;
  }

  const item = type === 'curso' 
    ? cursosData.find(c => c.id === id)
    : carrerasData.find(c => c.id === id);

  if (!item) {
    return <Navigate to="/" replace />;
  }

  const price = type === 'curso' ? item.price : item.finalPrice;
  const oldPrice = item.originalPrice;
  const finalPrice = couponApplied ? price * 0.9 : price;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsProcessing(false);
      toast.success(type === 'curso' ? '¡Curso contratado con éxito!' : '¡Inscripción a carrera realizada con éxito!');
      navigate('/');
    }, 1500);
  };

  const handleCardChange = (e) => {
    // Remove non-digits and add space every 4 digits
    const value = e.target.value.replace(/\D/g, '');
    const formatted = value.replace(/(.{4})/g, '$1 ').trim();
    setCardNumber(formatted.substring(0, 19));
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/[^\d/]/g, '');
    
    // Handle manual deletion of slash gracefully
    if (expiry.endsWith('/') && value.length === expiry.length - 1 && !value.endsWith('/')) {
      value = value.slice(0, -1);
    }
    
    let raw = value.replace(/\//g, '');
    let formatted = '';
    
    if (raw.length > 0) {
      let month = raw.substring(0, 2);
      // Validate month (01-12)
      if (month.length === 2) {
        if (parseInt(month, 10) > 12) month = '12';
        if (parseInt(month, 10) === 0) month = '01';
      }
      formatted = month;
      
      if (raw.length >= 2) {
        formatted += '/';
      }
      if (raw.length > 2) {
        formatted += raw.substring(2, 4);
      }
    }
    
    setExpiry(formatted.substring(0, 5));
  };

  const handleExpiryBlur = () => {
    if (expiry.length === 5) {
      const parts = expiry.split('/');
      if (parts.length === 2) {
        let year = parseInt(parts[1], 10);
        // Validate year between 26 and 40
        if (year < 26) year = 26;
        if (year > 40) year = 40;
        setExpiry(`${parts[0]}/${year}`);
      }
    } else if (expiry.endsWith('/')) {
      setExpiry(expiry.slice(0, -1));
    }
  };

  return (
    <main className="flex-1 bg-slate-50 py-12 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">Checkout Seguro</h1>
          <p className="text-slate-500">Completá tus datos para finalizar la inscripción.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-6 pb-6 border-b border-slate-100">
              <Lock className="w-5 h-5 text-emerald-500" />
              <h2 className="text-xl font-bold text-slate-900">Datos Personales</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nombre completo</label>
                  <input required type="text" placeholder="Ej: Juan Pérez" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">DNI / ID Nacional</label>
                  <input required type="text" placeholder="Ej: 12345678" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Correo electrónico</label>
                <input required type="email" placeholder="tu@email.com" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" />
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <div className="flex items-center gap-2 mb-6">
                  <CreditCard className="w-5 h-5 text-primary-500" />
                  <h2 className="text-xl font-bold text-slate-900">Método de Pago</h2>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Número de Tarjeta</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="0000 0000 0000 0000" 
                    value={cardNumber}
                    onChange={handleCardChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 font-mono tracking-widest" 
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Vencimiento</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="MM/AA" 
                      value={expiry}
                      onChange={handleExpiryChange}
                      onBlur={handleExpiryBlur}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 font-mono tracking-widest" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">CVC</label>
                    <input required type="password" placeholder="***" maxLength="4" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 font-mono" />
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isProcessing}
                className="cursor-pointer w-full rounded-2xl bg-primary-600 py-4 text-base font-bold text-white transition-all hover:bg-primary-500 shadow-md mt-8 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Procesando simulación...' : `Pagar AR$ ${finalPrice.toLocaleString('es-AR', {maximumFractionDigits: 0})}`}
              </button>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl text-white sticky top-24">
              <h3 className="text-xl font-bold mb-6">Resumen de compra</h3>
              
              <div className="flex gap-4 mb-6 pb-6 border-b border-slate-800 items-start">
                 <div className="w-16 h-16 bg-slate-800 rounded-xl shrink-0 flex items-center justify-center mt-1">
                   <CheckCircle2 className="w-8 h-8 text-primary-500" />
                 </div>
                 <div>
                   <div className="text-xs font-bold text-primary-400 uppercase tracking-wider mb-1">
                     {type === 'curso' ? 'Curso Intensivo' : 'Carrera Completa'}
                   </div>
                   <h4 className="font-bold text-lg leading-tight text-white mb-2">{item.title}</h4>
                   <p className="text-sm text-slate-400 leading-snug">{item.shortDescription}</p>
                 </div>
              </div>

              <div className="space-y-4 mb-6 pb-6 border-b border-slate-800 text-slate-300">
                 <div className="flex justify-between items-center">
                   <span>Precio original</span>
                   <span className="line-through">AR$ {oldPrice.toLocaleString('es-AR')}</span>
                 </div>
                 <div className="flex justify-between items-center text-emerald-400 font-medium">
                   <span>Descuento aplicado</span>
                   <span>-{item.discount}%</span>
                 </div>
                 {couponApplied && (
                   <div className="flex justify-between items-center text-emerald-400 font-medium pt-2">
                     <div className="flex items-center gap-2">
                       <span>Cupón extra (CUPON10)</span>
                       <button 
                         onClick={() => {
                           setCouponApplied(false);
                           setCouponCode('');
                           toast.success('Cupón removido', { description: 'El total se recalculó.'});
                         }}
                         className="cursor-pointer flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-red-500/20 hover:text-red-400 transition-colors"
                         aria-label="Quitar cupón"
                       >
                         <X className="w-3 h-3" />
                       </button>
                     </div>
                     <span>-10%</span>
                   </div>
                 )}
              </div>

              {!couponApplied && (
                <div className="mb-6 pb-6 border-b border-slate-800">
                  {!showCouponInput ? (
                    <button 
                      onClick={() => setShowCouponInput(true)} 
                      className="cursor-pointer text-sm font-bold text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      + Agregar cupón de descuento
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder='Probá con: "CUPON10"' 
                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 uppercase placeholder:normal-case placeholder:text-slate-500 tracking-widest"
                      />
                      <button 
                        onClick={() => {
                          if (couponCode.trim().toUpperCase() === 'CUPON10') {
                            setCouponApplied(true);
                            setShowCouponInput(false);
                            toast.success('¡Cupón aplicado con éxito!');
                          } else {
                            toast.error('Cupón inválido', { description: 'Revisá que esté bien escrito.' });
                          }
                        }}
                        className="cursor-pointer rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-slate-700 shadow-sm"
                      >
                        Aplicar
                      </button>
                    </div>
                  )}
                </div>
              )}

              <div className="flex justify-between items-end mb-8">
                 <span className="text-lg font-medium text-slate-300">Total</span>
                 <span className="text-3xl font-black">AR$ {finalPrice.toLocaleString('es-AR', {maximumFractionDigits: 0})}</span>
              </div>

              <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-4">
                 <p className="text-xs text-primary-300 leading-relaxed text-center">
                   <ShieldCheck className="w-4 h-4 inline-block mr-1 align-sub" /> 
                   Abono asegurado a través de nuestra pasarela simulada. Sin validación financiera real.
                 </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
